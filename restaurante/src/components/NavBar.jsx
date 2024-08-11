import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

function NavBar() {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4 sticky top-0">
      <Link to="/" className="text-white font-bold">
        <h1>Restaurante 69</h1>
      </Link>
      <ul className="flex gap-x-1">
        <li>
          <Link
            to="/mesasManager"
            className="bg-indigo-500 hover:bg-indigo-700 text-white
              px-2 py-1"
          >
            Mesas
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            className="bg-indigo-500 hover:bg-indigo-700 text-white
              px-2 py-1"
          >
            Menú
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
