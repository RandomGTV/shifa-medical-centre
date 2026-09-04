import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-cream px-6 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl">This page has moved on</h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
          The link you followed does not exist any more. The front desk is still where it always
          was.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to the home page
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact the clinic
          </Link>
        </div>
      </div>
    </div>
  );
}
