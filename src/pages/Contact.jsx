export default function Contact() {
  return (
    <div className="min-h-screen p-10 bg-gray-100 fade-in">
      <h2 className="text-3xl font-bold mb-6 text-center">تواصل معنا</h2>
      <form className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
        <input type="text" placeholder="الاسم" className="w-full p-3 border rounded"/>
        <input type="email" placeholder="البريد الإلكتروني" className="w-full p-3 border rounded"/>
        <textarea placeholder="رسالتك" className="w-full p-3 border rounded h-32"/>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded transition">إرسال</button>
      </form>
    </div>
  );
}
