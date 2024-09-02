import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section>
        <h1>404</h1>
        <div>This page doesn&apos;t exist! Try again later or go back to the <Link href="/">homepage</Link>.</div>
      </section>
    </main>
  );
}