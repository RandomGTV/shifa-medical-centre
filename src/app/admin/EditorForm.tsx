"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { saveContent } from "@/app/admin/actions";

type Field = {
  key: string;
  label: string;
  group: string;
  hint?: string;
  multiline?: boolean;
};

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-primary px-7 py-3.5" disabled={pending}>
      {pending ? "Saving…" : "Save changes"}
    </button>
  );
}

export function EditorForm({
  fields,
  values,
}: {
  fields: Field[];
  values: Record<string, string>;
}) {
  const [message, action] = useActionState(saveContent, undefined);

  const groups = Array.from(new Set(fields.map((f) => f.group)));
  const saved = message?.startsWith("Saved");

  return (
    <form action={action}>
      <div className="space-y-8">
        {groups.map((group) => (
          <section key={group} className="card p-7">
            <h2 className="font-display text-[18px] font-bold text-brand-900">{group}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {fields
                .filter((f) => f.group === group)
                .map((f) => (
                  <label
                    key={f.key}
                    className={`block ${f.multiline ? "sm:col-span-2" : ""}`}
                    htmlFor={f.key}
                  >
                    <span className="label">{f.label}</span>
                    {f.hint ? (
                      <span className="mt-1 block text-[12.5px] text-ink-faint">{f.hint}</span>
                    ) : null}
                    {f.multiline ? (
                      <textarea
                        id={f.key}
                        name={f.key}
                        defaultValue={values[f.key] ?? ""}
                        rows={2}
                        className="input mt-2 resize-y"
                      />
                    ) : (
                      <input
                        id={f.key}
                        name={f.key}
                        defaultValue={values[f.key] ?? ""}
                        className="input mt-2"
                      />
                    )}
                  </label>
                ))}
            </div>
          </section>
        ))}
      </div>

      <div className="sticky bottom-0 mt-8 flex flex-wrap items-center gap-4 border-t bg-cream/90 py-5 backdrop-blur hairline">
        <Submit />
        {message ? (
          <p
            role="status"
            className={`text-[14px] font-medium ${saved ? "text-accent-700" : "text-red-600"}`}
          >
            {message}
          </p>
        ) : (
          <p className="text-[13px] text-ink-faint">
            Clearing a field puts the original value back.
          </p>
        )}
      </div>
    </form>
  );
}
