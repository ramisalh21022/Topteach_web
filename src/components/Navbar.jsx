import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-white via-blue-50 to-pink-50 shadow-lg py-6 flex justify-center">

      <Link
        to="/"
        className="
          text-center
          text-3xl md:text-5xl
          font-extrabold
          italic
          tracking-wide
          transition-all duration-500
          hover:scale-105
          animate-fade-in
        "
      >
        
        <span className="text-blue-600">الأولى</span>{" "}
        <span className="text-pink-500">في</span>{" "}
        <span className="text-purple-600">القطيلبية</span>{" "}
        <span className="text-green-600">للتعليم</span>{" "}
        <span className="text-orange-500">والرقي</span>{" "}
        <span className="text-red-500">نحو</span>{" "}
        <span className="text-indigo-600">المستقبل</span>

      </Link>

    </nav>
  );
}
