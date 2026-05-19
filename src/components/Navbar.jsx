import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-6 px-8 w-full flex justify-center">
      <div className="flex flex-row-reverse justify-center items-center gap-[6rem]">
        <Link
          to="/"
          className="text-3xl font-extrabold text-gray-800 hover:text-pink-500 transition duration-300"
        >
          الرئيسية
        </Link>
        <Link
          to="/about"
          className="text-3xl font-extrabold text-gray-800 hover:text-pink-500 transition duration-300"
        >
          من نحن
        </Link>
        <Link
          to="/products"
          className="text-3xl font-extrabold text-gray-800 hover:text-pink-500 transition duration-300"
        >
          المنتجات
        </Link>
        <Link
          to="/portfolio"
          className="text-3xl font-extrabold text-gray-800 hover:text-pink-500 transition duration-300"
        >
          أعمالنا
        </Link>
        <Link
          to="/careers"
          className="text-3xl font-extrabold text-gray-800 hover:text-pink-500 transition duration-300"
        >
          الوظائف
        </Link>
        <Link
          to="/faq"
          className="text-3xl font-extrabold text-gray-800 hover:text-pink-500 transition duration-300"
        >
          الأسئلة الشائعة
        </Link>
        <Link
          to="/contact"
          className="text-3xl font-extrabold text-gray-800 hover:text-pink-500 transition duration-300"
        >
          تواصل معنا
        </Link>
      </div>
    </nav>
  );
}
