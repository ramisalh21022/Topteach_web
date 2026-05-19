import { useState } from "react";
import { Link } from "react-router-dom";
import LOGOrami from "../assets/LOGOrami.png";
import img1 from "../assets/img1.png";
// ضمن المكون نفسه
const images = import.meta.glob("../assets/products/*.jpeg", { eager: true });
const productImages = Object.values(images).map((img) => img.default);
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";
import logo from "../assets/logo.png"; // استيراد الصورة محلياً

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "المنتجات", path: "/products", dropdown: ["منتج 1", "منتج 2"] },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-pink-50 flex flex-col">
      {/* 🔹 الشريط العلوي */}
      <div className="bg-white shadow-lg rounded-2xl mx-6 mt-6 p-4 flex items-center justify-between relative">
        {/* الشعار */}
        <div className="flex items-center space-x-4">
          <img
  src={LOGOrami}
  alt="LOGOrami"
  className="w-[100px] h-[100px] rounded-full shadow-md object-cover object-center !important"
  style={{ width: "100px", height: "100px", objectFit: "cover" }}
/>

        </div>

     {/* أسماء الصفحات في المنتصف */}
<div dir="rtl" className="flex flex-row-reverse justify-center items-center gap-[6rem]">
      {pages.map((page, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => setDropdownOpen(index)}
          onMouseLeave={() => setDropdownOpen(null)}
        >
          {/* Link مع hover/focus وتحتوي على underline متحرك */}
          <Link
            to={page.path}
             className="px-4 py-2 text-gray-800 hover:text-pink-600 focus:text-pink-600 cursor-pointer transition-colors duration-300"
          >
            {page.name}
            {/* Underline متحرك */}
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-pink-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Dropdown عند التمرير */}
          {dropdownOpen === index && page.dropdown && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-white border border-gray-200 rounded-2xl shadow-xl z-20 animate-fade-in">
              <ul className="text-center text-gray-700">
                {page.dropdown.map((item, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-pink-50 hover:text-pink-600 cursor-pointer transition rounded-md"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>

        {/* البحث */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="بحث..."
            className="px-3 py-1 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>
      </div>

      {/* 🔸 الصورة الرئيسية */}
      <div className="mt-8 w-full h-[400px] relative px-6">
        <img
  src={img1}
  alt="img1"
  className="w-[1920px] h-[200px] rounded-full shadow-md object-cover object-center !important"
  style={{ width: "1920px", height: "200px", objectFit: "cover" }}
/>


        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            شركة الألبسة الحديثة
          </h1>
          <p className="text-lg font-medium drop-shadow-md">
            أناقة عصرية – جودة عالية – أسعار تنافسية
          </p>
        </div>
      </div>

     {/* 🔹 بطاقات المنتجات بشكل أنيق */}
<div className="bg-white rounded-2xl shadow-xl mx-6 mt-10 p-8 flex justify-center flex-wrap gap-10">
  {productImages.map((src, index) => (
    <div
      key={index}
      className="w-64 bg-gray-50 rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 transform transition-all duration-300 p-4 flex flex-col items-center"
    >
      {/* الصورة داخل إطار دائري */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-300 shadow-inner mb-4">
        <img
          src={src}
          alt={`منتج ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* العنوان */}
      <h3 className="text-xl font-extrabold text-gray-800 mb-2">
        منتج {index + 1}
      </h3>

      {/* التفاصيل */}
      <p className="text-gray-500 text-sm text-center leading-relaxed">
        هذا وصف مختصر لمنتج {index + 1} يوضح أبرز ميزاته وجودته العالية.
      </p>
    </div>
  ))}
</div>
</div>

      
  );
}
