import NavLink from "./main-header/nav-link";

export default function Footer() {
  return (
    <>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-white">
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/qa">QA </NavLink>
        </li>
      </footer>
    </>
  );
}
