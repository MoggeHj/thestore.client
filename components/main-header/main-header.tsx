import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white fixed top-0 left-0 w-full z-20 shadow-md">
      <NavLink href="/" className="text-2xl font-bold hover:underline">
        The Store
      </NavLink>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink href="/souvenirs">Souvenirs </NavLink>
          </li>
          <li>
            <NavLink href="/cart">Cart </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
