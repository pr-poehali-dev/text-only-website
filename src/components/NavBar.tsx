
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">ТекстСайт</div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
