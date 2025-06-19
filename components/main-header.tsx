import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link href="/" className="text-2xl font-bold hover:underline">
        <h1 className="text-xl font-bold">The Store</h1>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/souvenirs" className="hover:underline">
              Souvenirs{" "}
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:underline">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
