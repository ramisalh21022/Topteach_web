import { useState } from "react";
import LOGOrami from "../assets/LOGOrami.png";
import img1 from "../assets/img1.png";

export default function Home() {
  const [selectedSubject, setSelectedSubject] = useState(null);
const [tab, setTab] = useState("images");
  const subjects = [
    {
      name: "English",
      image: "/subjects/english.avif",
      gallery: [
        "/subjects/english/img1.avif",
        "/subjects/english/img2.avif",
        "/subjects/english/img3.webp",
         "/subjects/english/img4.webp",
        "/subjects/english/img5.webp",
        "/subjects/english/img6.webp",
      ],
      videos: [
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
      ],
    },
    {
      name: "Arabic",
      image: "/subjects/arabic.avif",
      gallery: [],
      videos: [],
    },
    {
      name: "Scratch",
      image: "/subjects/scratch.avif",
      gallery: [],
      videos: [],
    },
    {
      name: "Krita",
      image: "/subjects/krita.webp",
      gallery: [],
      videos: [],
    },
    {
      name: "Blender",
      image: "/subjects/blender.avif",
      gallery: [],
      videos: [],
    },
    {
      name: "Science",
      image: "/subjects/science.avif",
      gallery: [],
      videos: [],
    },
    {
      name: "Social Studies",
      image: "/subjects/social.webp",
      gallery: [],
      videos: [],
    },
    {
      name: "Other",
      image: "/subjects/other.avif",
      gallery: [],
      videos: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-blue-50">

      {/* 🔹 الهيدر */}
      <div className="flex items-center justify-between px-6 py-3 bg-white shadow-md rounded-b-2xl">
        <img
          src={LOGOrami}
          alt="logo"
          className="rounded-full shadow-sm"
          style={{ width: "70px", height: "70px", objectFit: "cover" }}
        />

        <h1 className="text-xl md:text-2xl font-bold text-blue-600">
          TopTeach - منصة تعليمية للأطفال
        </h1>

        <div className="w-10 h-10"></div>
      </div>

      {/* 🔸 البانر */}
      <div className="mt-6 px-6">
        <img
          src={img1}
          className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* 🔹 العنوان */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-extrabold text-gray-800">
          اختر المادة التعليمية
        </h2>
        <p className="text-gray-500 mt-2">
          اضغط على أي مادة لعرض المحتوى
        </p>
      </div>

      {/* 🔹 الكروت */}
      <div className="bg-white rounded-2xl shadow-xl mx-6 mt-10 p-8">
        <div className="grid grid-cols-3 gap-10 justify-items-center">

          {subjects.map((sub, index) => (
            <div
              key={index}
              onClick={() => setSelectedSubject(sub)}
              className="cursor-pointer hover:scale-105 transition"
            >

              {/* كرت */}
              <div className="w-64 h-80 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl p-4 flex flex-col items-center">
                <img
                  src={sub.image}
                  className="w-full h-40 object-cover rounded-xl mb-3"
                />
                <h3 className="font-bold text-lg">{sub.name}</h3>
                <p className="text-sm text-gray-500 text-center">
                  مادة تعليمية للأطفال
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

 {selectedSubject && (
  <div
    onClick={() => setSelectedSubject(null)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.75)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 99999,
      padding: "20px",
    }}
  >
    {/* CARD */}
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        background: "white",
        width: "95%",
        maxWidth: "1000px",
        maxHeight: "90vh",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      <div style={{
        padding: "15px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ margin: 0 }}>
          {selectedSubject.name}
        </h2>

        <button onClick={() => setSelectedSubject(null)}>
          ✖
        </button>
      </div>

      {/* TABS */}
      <div style={{
  display: "flex",
  gap: "15px",
  padding: "10px 15px",
  borderBottom: "1px solid #eee"
}}>
  
  <button onClick={() => setTab("images")}>
    📸 الصور
  </button>

  <button onClick={() => setTab("videos")}>
    🎥 الفيديو
  </button>

  <button onClick={() => setTab("info")}>
    📄 معلومات
  </button>

</div>

      {/* CONTENT */}
      <div style={{ padding: "15px", overflowY: "auto" }}>

  {/* IMAGES */}
  {tab === "images" && (
    <div>
      <h3>📸 الصور</h3>

      {selectedSubject.gallery?.length > 0 ? (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px"
        }}>
          {selectedSubject.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
          ))}
        </div>
      ) : (
        <p>لا توجد صور</p>
      )}
    </div>
  )}

  {/* VIDEOS */}
  {tab === "videos" && (
    <div>
      <h3>🎥 الفيديوهات</h3>

      {selectedSubject.videos?.length > 0 ? (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px"
        }}>
          {selectedSubject.videos.map((vid, i) => (
            <iframe
              key={i}
              src={vid}
              style={{
                width: "100%",
                height: "220px",
                borderRadius: "10px"
              }}
              allowFullScreen
            />
          ))}
        </div>
      ) : (
        <p>لا توجد فيديوهات</p>
      )}
    </div>
  )}

  {/* INFO */}
  {tab === "info" && (
    <div style={{ textAlign: "center" }}>
      <h3>📄 معلومات المادة</h3>
      <p>هذه مادة: {selectedSubject.name}</p>
    </div>
  )}

</div>

      </div>
    </div>
  
)}

    </div>
  );
}
