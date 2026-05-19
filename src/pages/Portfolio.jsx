import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // مكتبة أنميشن
import p1 from "../assets/products/p1.jpeg";
import p2 from "../assets/products/p2.jpeg";
import p3 from "../assets/products/p3.jpeg";
import p4 from "../assets/products/p4.jpeg";
import p5 from "../assets/products/p5.jpeg";
import p6 from "../assets/products/p6.jpeg";
import p7 from "../assets/products/p7.jpeg";

//import p8 from "../assets/products/p8.jpeg";
//import p9 from "../assets/products/p9.jpeg";
//import p10 from "../assets/products/p10.jpeg";
//import p11 from "../assets/products/p11.jpeg";
//import p12 from "../assets/products/p12.jpeg";
//import p13 from "../assets/products/p13.jpeg";
//import p14 from "../assets/products/p14.jpeg";

//const productImages = [p1, p2, p3, p4,p5, p6, p7,p8, p9, p10, p11,p12, p13, p14];
const productImages = [p1, p2, p3, p4,p5, p6, p7];

//const images = import.meta.glob("../assets/products/*.jpeg", { eager: true });
//const productImages = Object.values(images).map((img) => img.default);
// بناء مصفوفة منتجات كاملة مع بيانات لكل منتج
const products = productImages.map((img, index) => ({
  id: index,
  image: img,
  name: `منتج ${index + 1}`,
  description: "تصميم أنيق بخامات عالية الجودة.",
  details: "وصف مفصل للمنتج. مصمم بعناية وجودة عالية.",
  price: 50
}));

export default function Portfolio() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* شبكة المنتجات */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-64 bg-gray-50 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 p-4 flex flex-col items-center"
          >
            <div className="w-full h-44 rounded-xl overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-extrabold text-gray-800 mb-2 text-center">
              {product.name}
            </h3>
            <p className="text-gray-500 text-sm text-center mb-4">
              {product.description}
            </p>
            <button
              onClick={() => setOpenIndex(index)}
              className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              تفاصيل المنتج
            </button>
          </div>
        ))}
      </div>

      {/* Modal مركزي */}
      <AnimatePresence>
        {openIndex !== null && products[openIndex] && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 p-6 relative"
              onClick={(e) => e.stopPropagation()} // منع إغلاق عند الضغط داخل Modal
            >
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-2xl"
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <img
                    src={products[openIndex].image}
                    alt={products[openIndex].name}
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
                    {products[openIndex].name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {products[openIndex].details}
                  </p>
                  <p className="text-pink-600 font-bold text-lg mb-4">
                    السعر: {products[openIndex].price}$
                  </p>
                  <button className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition-all duration-300 shadow-md hover:shadow-lg">
                    أضف إلى السلة
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
