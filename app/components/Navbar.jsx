import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="p-5 text-teal-50 bg-blue-500">
      <nav className="flex justify-between">
        <Link href="/">
          <h1 className="font-bold text-xl">TechStore</h1>
        </Link>
        <div>
          <ul className="flex justify-between gap-5">
            <li>
              <Link href="/productos">Productos</Link>
            </li>
            <li>
              <Link className="flex gap-2" href="/cart">
                <ShoppingCart />
                <span>Carrito</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
