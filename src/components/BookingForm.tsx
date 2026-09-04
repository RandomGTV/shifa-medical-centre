"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { clinic } from "@/data/clinic";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";

function buildSlots(start: number, end: number, stepMinutes = 30) {
  const out: string[] = [];
  for (let m = start * 60; m <= end * 60; m += stepMinutes) {
    const h24 = Math.floor(m / 60);
    const mm = m % 60;
    const suffix = h24 >= 12 ? "PM" : "AM";
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    out.push(`${h12}:${String(mm).padStart(2, "0")} ${suffix}`);
  }
  return out;
}

const MORNING = buildSlots(8, 12.5);
const EVENING = buildSlots(16, 20);

const today = () => new Date().toISOString().split("T")[0];

export function BookingForm() {
  const params = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    visitType: "New patient",
    service: params.get("service") ?? "",
    doctor: params.get("doctor") ?? "",
    date: today(),
    slot: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const isSunday = useMemo(() => {
    const d = new Date(`${form.date}T00:00:00`);
    return !Number.isNaN(d.getTime()) && d.getDay() === 0;
  }, [form.date]);

  const set = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => {
      const { [key]: _removed, ...rest } = e;
      return rest;
    });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 3) e.name = "Please enter the patient's full name.";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").slice(-10)))
      e.phone = "Enter a 10-digit Indian mobile number.";
    if (!form.service) e.service = "Choose a department.";
    if (!form.date) {
      e.date = "Choose a date.";
    } else if (isSunday) {
      e.date = "The clinic is closed on Sundays. Please select Monday to Saturday.";
    }
    if (!form.slot && !isSunday) e.slot = "Pick a time slot.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const message = () => {
    const serviceName = services.find((s) => s.slug === form.service)?.name ?? "—";
    const doctorName = doctors.find((d) => d.slug === form.doctor)?.name ?? "No preference";
    const dateLabel = new Date(`${form.date}T00:00:00`).toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return [
      `*Appointment request — ${clinic.shortName}*`,
      "",
      `Patient: ${form.name}`,
      `Phone: ${form.phone}`,
      form.age ? `Age: ${form.age}` : null,
      `Type: ${form.visitType}`,
      `Department: ${serviceName}`,
      `Doctor: ${doctorName}`,
      `Preferred date: ${dateLabel}`,
      `Preferred time: ${form.slot}`,
      form.notes ? `Reason / notes: ${form.notes}` : null,
      "",
      "Sent from the clinic website.",
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const first = document.querySelector<HTMLElement>("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const url = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-600" strokeWidth={1.5} />
        <h2 className="mt-5 font-display text-2xl text-ink">Request sent to the front desk</h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
          WhatsApp should have opened with your details filled in. Press send there if you have
          not already. A member of our front office confirms the slot, usually within 20 minutes
          during OP hours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={clinic.phoneHref} className="btn-ghost">
            Or call {clinic.phone}
          </a>
          <button type="button" onClick={() => setSent(false)} className="btn-primary">
            Book another appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-7 sm:p-9" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Patient name" error={errors.name} required>
          <input
            className="input"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Full name"
            autoComplete="name"
          />
        </Field>

        <Field label="Mobile number" error={errors.phone} required>
          <input
            className="input"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="98470 00000"
            inputMode="tel"
            autoComplete="tel"
          />
        </Field>

        <Field label="Age" hint="Optional">
          <input
            className="input"
            value={form.age}
            onChange={(e) => set("age", e.target.value)}
            placeholder="e.g. 34"
            inputMode="numeric"
          />
        </Field>

        <Field label="Visit type">
          <div className="flex gap-2">
            {["New patient", "Follow-up"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => set("visitType", t)}
                className={`flex-1 rounded-xl border px-4 py-3 text-[13.5px] font-medium transition-colors ${
                  form.visitType === t
                    ? "border-brand-600 bg-brand-600/10 text-brand-700"
                    : "border-brand-900/10 text-ink-soft hover:bg-cream"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Field>

        <Field label="Department" error={errors.service} required>
          <select
            className="input"
            value={form.service}
            onChange={(e) => set("service", e.target.value)}
          >
            <option value="">Select a department</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Preferred doctor" hint="Optional">
          <select
            className="input"
            value={form.doctor}
            onChange={(e) => set("doctor", e.target.value)}
          >
            <option value="">No preference</option>
            {doctors.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name} — {d.speciality}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Preferred date" error={errors.date} required>
          <input
            type="date"
            className="input"
            min={today()}
            value={form.date}
            onChange={(e) => set("date", e.target.value)}
          />
        </Field>

        <div className="sm:col-span-2">
          <div data-error={errors.slot ? "true" : undefined}>
            <p className="label">
              Preferred time <span className="text-brand-600">*</span>
            </p>

            <p className="mt-1 text-[12.5px] text-ink-faint">
              Slots are a preference, not a confirmation — the front desk confirms the exact time
              on WhatsApp.
            </p>

            {isSunday ? (
              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-[13.5px] text-amber-900">
                The clinic is closed on Sundays. Please select any date from Monday to Saturday (7:00 AM – 8:00 PM).
              </div>
            ) : (
              <div className="mt-4 space-y-4">
                <SlotRow
                  title="Morning"
                  slots={MORNING}
                  selected={form.slot}
                  onSelect={(s) => set("slot", s)}
                />
                <SlotRow
                  title="Evening"
                  slots={EVENING}
                  selected={form.slot}
                  onSelect={(s) => set("slot", s)}
                />
              </div>
            )}

            {errors.slot ? <p className="error">{errors.slot}</p> : null}
          </div>
        </div>

        <div className="sm:col-span-2">
          <Field label="Reason for visit" hint="Optional — helps us allot enough time">
            <textarea
              className="input min-h-[110px] resize-y"
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
              placeholder="Symptoms, how long, any reports you are bringing"
            />
          </Field>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t pt-7 hairline sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[12.5px] leading-relaxed text-ink-faint">
          Pressing the button opens WhatsApp with this request filled in. Nothing is stored on this
          website.
        </p>
        <button type="submit" className="btn-primary shrink-0 px-7 py-3.5">
          <Send className="h-4 w-4" strokeWidth={1.9} />
          Send request on WhatsApp
        </button>
      </div>

      <p className="mt-6 flex items-center gap-2 rounded-xl bg-cream px-4 py-3 text-[13px] text-ink-soft">
        <MessageCircle className="h-4 w-4 shrink-0 text-brand-600" strokeWidth={1.8} />
        For an emergency, do not use this form — call {clinic.emergency}. Casualty is open 24×7.
      </p>
    </form>
  );
}

function SlotRow({
  title,
  slots,
  selected,
  onSelect,
  disabled = false,
}: {
  title: string;
  slots: string[];
  selected: string;
  onSelect: (s: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className={disabled ? "opacity-45" : ""}>
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
        {title}
      </p>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {slots.map((s) => (
          <button
            key={s}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(s)}
            className={`rounded-full border px-3.5 py-2 text-[13px] transition-colors disabled:cursor-not-allowed ${
              selected === s
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-brand-900/10 text-ink-soft hover:border-brand-600/40 hover:text-brand-700"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

function Field({
  label,
  hint,
  error,
  required,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block" data-error={error ? "true" : undefined}>
      <span className="label">
        {label}
        {required ? <span className="text-brand-600"> *</span> : null}
        {hint ? <span className="ml-2 font-normal text-ink-faint">{hint}</span> : null}
      </span>
      <div className="mt-2">{children}</div>
      {error ? <p className="error">{error}</p> : null}
    </label>
  );
}
