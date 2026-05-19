import React from "react";

// ✅ تحميل الصور من مجلد المنتجات
const images = import.meta.glob("../assets/products/*.jpeg", { eager: true });
const productImages = Object.values(images).map((img) => img.default);

export default function ProductGalleryHorizontal() {
  return (
    <section className="bg-gray-50 py-12 px-6">
      {/* 🔹 العنوان */}
      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-12 tracking-wide">
        منتجاتنا المميزة
      </h2>

      {/* 🔹 البطاقات العرضية */}
      <div className="flex flex-col gap-10 items-center">
        {productImages.map((src, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden w-full sm:w-4/5 md:w-3/4 lg:w-2/3 hover:scale-[1.02]"
          >
            {/* ✅ صورة المنتج */}
            <div className="sm:w-1/2 h-64">
              <img
                src={src}
                alt={`منتج ${index + 1}`}
                className="w-3/4 h-3/4 object-contain mx-auto my-auto rounded-xl"
              />
            </div>

            {/* ✅ معلومات المنتج */}
            <div className="sm:w-1/2 flex flex-col justify-center p-6 text-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                منتج رقم {index + 1}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                منتج مميز من تشكيلتنا الجديدة. مصنوع بجودة عالية وتصميم عصري يناسب جميع الأذواق.
              </p>
              <button className="self-start bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition-all duration-300 shadow-md hover:shadow-lg">
                تسوق الآن
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
