import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaInfoCircle, FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import LOGOrami from "../assets/LOGOrami.png";

export default function Footer() {
  return (
    <footer className="bg-white shadow-lg rounded-2xl mx-6 mt-10 mb-6 p-6 flex flex-row justify-between items-center gap-8">
  {/* شعار واسم الشركة */}
  <div className="flex flex-col items-center">
    <img src={LOGOrami} alt="Logo" className="w-[100px] h-[100px] object-cover mb-2"
  style={{ width: "100px", height: "100px", objectFit: "cover" }} />
    <h2 className="text-xl font-extrabold">شركة الألبسة الحديثة</h2>
  </div>

  {/* اتصل بنا */}
  <div className="flex flex-col items-center">
    <h3 className="text-lg font-bold mb-2">اتصل بنا</h3>
    <div className="flex items-center gap-2 mb-1">
      <FaWhatsapp className="text-green-500" />
      <span>+963 9XXXXXXX</span>
    </div>
    <div className="flex items-center gap-2 mb-1">
      <FaPhone className="text-blue-400" />
      <span>+963 11 XXXXXXX</span>
    </div>
  </div>

  {/* لمحة عن الشركة */}
  <div className="flex flex-col items-center">
    <h3 className="text-lg font-bold mb-2">لمحة عن الشركة</h3>
    <p className="text-gray-600 text-sm text-center">
      نقدم أحدث صيحات الموضة بأفضل الخامات وأجمل التصاميم العصرية بأسعار منافسة.
    </p>
    <div className="flex gap-4 mt-2 text-gray-700 text-2xl gap-[2rem]">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer transition-colors duration-300 " />
            <FaTwitter className="hover:text-blue-400 cursor-pointer transition-colors duration-300" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors duration-300 " />
            <FaTelegramPlane className="hover:text-blue-500 cursor-pointer transition-colors duration-300" />
            <FaYoutube className="hover:text-red-600 cursor-pointer transition-colors duration-300" />
          </div>
        
      
  </div>
   
</footer>

  );
}
