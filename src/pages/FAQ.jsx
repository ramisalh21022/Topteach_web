export default function FAQ() {
  return (
    <div className="min-h-screen p-10 bg-gray-100 fade-in">
      <h2 className="text-3xl font-bold mb-6 text-center">الأسئلة الشائعة</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">كيف أطلب منتج؟</h3>
          <p>يمكنك طلب المنتج من خلال صفحة المنتجات والنقر على زر التسوق.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">هل التوصيل مجاني؟</h3>
          <p>نعم، التوصيل مجاني لجميع الطلبات فوق 50 دولار.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">ما هي طرق الدفع المتاحة؟</h3>
          <p>يمكن الدفع نقداً عند الاستلام أو عبر البطاقات البنكية.</p>
        </div>
      </div>
    </div>
  );
}
