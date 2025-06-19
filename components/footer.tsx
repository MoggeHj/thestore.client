import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-white">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/qa">QA</Link>
        </li>
      </footer>
    </>
  );
}
