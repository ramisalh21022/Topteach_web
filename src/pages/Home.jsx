import { useState } from "react";
import LOGOrami from "../assets/LOGOrami.png";
import img1 from "../assets/img1.png";

export default function Home() {
  const handleDownload = async (url, fileName) => {
  const response = await fetch(url);
  const blob = await response.blob();

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName || "game.html";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};
  const [selectedSubject, setSelectedSubject] = useState(null);
const [tab, setTab] = useState("images");
  const subjects = [
    {
      name: "English",
      image: "./subjects/english.avif",
      gallery: [
        "./subjects/english/img1.png",
        "./subjects/english/img2.png",
        "./subjects/english/img3.png",
         "./subjects/english/img4.png",
        "./subjects/english/img5.png",
        "./subjects/english/img6.png",
        "./subjects/english/img7.png",
        "./subjects/english/img8.png",
         "./subjects/english/img9.png",
        "./subjects/english/img10.png",
        "./subjects/english/img1.png",
        "./subjects/english/img12.png",
        "./subjects/english/img13.png",
         "./subjects/english/img14.png",
        "./subjects/english/img15.png",
        "./subjects/english/img16.png",
        "./subjects/english/img17.png",
        "./subjects/english/img18.png",
         "./subjects/english/img19.png",
        "./subjects/english/img20.png",
        "./subjects/english/img21.png",
        "./subjects/english/img22.png",
        "./subjects/english/img23.png",
         "./subjects/english/img24.png",
        "./subjects/english/img25.png",
        "./subjects/english/img26.png",
        "./subjects/english/img27.png",
        "./subjects/english/img28.png",
         "./subjects/english/img29.png",
        "./subjects/english/img30.png",
        "./subjects/english/img31.png",
        "./subjects/english/img32.png",
        "./subjects/english/img33.png",
         "./subjects/english/img34.png",
        "./subjects/english/img35.png",
        "./subjects/english/img36.png",
        "./subjects/english/img37.png",
        "./subjects/english/img38.png",
         "./subjects/english/img39.png",
        "./subjects/english/img40.png",
        "./subjects/english/img41.png",
        "./subjects/english/img42.png",
        "./subjects/english/img43.png",
         "./subjects/english/img44.png",
        "./subjects/english/img45.png",
        "./subjects/english/img46.png",
        "./subjects/english/img47.png",
        "./subjects/english/img48.png",
         "./subjects/english/img49.png",
        "./subjects/english/img50.png",
        "./subjects/english/img51.png",
        "./subjects/english/img52.png",
        "./subjects/english/img53.png",
         "./subjects/english/img54.png",
        "./subjects/english/img55.png",
        "./subjects/english/img56.png",
        "./subjects/english/img57.png",
        "./subjects/english/img58.png",
         "./subjects/english/img59.png",
        
      ],
      videos: [
        
        "https://www.youtube.com/embed/4vI_MTgAeOQ",
        "https://www.youtube.com/embed/W46pVAaRJes",
      ],
    },
    {
      name: "Arabic",
      image: "./subjects/arabic.avif",
      gallery: [
        "./subjects/arabic/img1.png",
        "./subjects/arabic/img2.png",
        "./subjects/arabic/img3.png",
         "./subjects/arabic/img4.png",
        "./subjects/arabic/img5.png",
      ],
      videos: [],
    },
    {
      name: "Scratch",
      image: "./subjects/scratch.avif",
      gallery: [
        "./subjects/scratch/img1.png",
        "./subjects/scratch/img2.png",
        "./subjects/scratch/img3.png",
         "./subjects/scratch/img4.png",
        "./subjects/scratch/img5.png",],
      videos: [
        "https://www.youtube.com/embed/kJkvgPJ7DHE",
        "https://www.youtube.com/embed/PRSxZnOonNU",
        "https://www.youtube.com/embed/V23qGto9h00",
      ],
       students: [
  {
    student: "كريم ",
    gameName: " يعرف عن نفسه",
   
    gameUrl: "./students/karim/index.html",
    downloadUrl: "./students/karim.zip"
  },

  {
    student: " علي",
    gameName: "صيد الكرة",
    
    gameUrl: "./students/ali/index.html",
    downloadUrl: "./students/ali.zip"
  },
  {
    student: "ابراهيم ",
    gameName: "  قيد التصميم ",
   
    gameUrl: "./students/ebrahem/index.html",
    downloadUrl: "./students/ebrahem.zip"
  },

  {
    student: " ساندي",
    gameName: " قيد التصميم",
    
    gameUrl: "./students/sandy/index.html",
    downloadUrl: "./students/sandy.zip"
  }
]
      
    },
    {
      name: "Krita",
      image: "./subjects/krita.webp",
      gallery: ["./subjects/krita/img1.png",
        "./subjects/krita/img2.png",
        "./subjects/krita/img3.png",
         "./subjects/krita/img4.png",
        "./subjects/krita/img5.png",],
      videos: [
        "https://www.youtube.com/embed/m70vJ8itopw",
        "https://www.youtube.com/embed/WvbZBTRvZIY",
        "https://www.youtube.com/embed/c-ZXw5OejFI",
      ],
    
    },
    {
      name: "Blender",
      image: "./subjects/blender.avif",
      gallery: [
        "./subjects/blender/img1.png",
        "./subjects/blender/img2.png",
        "./subjects/blender/img3.png",
         "./subjects/blender/img4.png",
        "./subjects/blender/img5.png",
      ],
      videos: [
        "https://www.youtube.com/embed/6INg4P0foFQ",
        
      ],
    },
    {
      name: "Science",
      image: "./subjects/science.avif",
      gallery: [
        "./subjects/science/img1.png",
       ],
      videos: [],
    },
    {
      name: "Social Studies",
      image: "./subjects/social.webp",
      gallery: [
        "./subjects/social/img1.png",
       
      ],
      videos: [
        "https://www.youtube.com/embed/KGb1Od1zeew",
        
      ],
    },
    {
      name: "Other",
      image: "./subjects/other.avif",
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

  <button onClick={() => setTab("students")}>
  🎮 أعمال الطلاب
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
 {tab === "students" && (
  <div>
    <h3
      style={{
        marginBottom: "20px",
        textAlign: "center"
      }}
    >
      🎮 أعمال الطلاب
    </h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
        gap: "20px"
      }}
    >
      {selectedSubject.students?.map((student, i) => (
  <div
    key={i}
    style={{
      background: "#fff",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,.1)"
    }}
  >
    {/* معاينة اللعبة */}
    <iframe
      src={student.gameUrl}
      title={student.gameName}
      style={{
        width: "100%",
        height: "180px",
        border: "none",
        background: "#f5f5f5"
      }}
    />

    <div style={{ padding: "15px" }}>
      <h4
        style={{
          margin: "0 0 10px",
          textAlign: "center"
        }}
      >
        {student.gameName}
      </h4>

      <p
        style={{
          color: "#666",
          textAlign: "center"
        }}
      >
        👨‍🎓 {student.student}
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "15px"
        }}
      >
        <a
          href={student.gameUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            flex: 1,
            background: "#22c55e",
            color: "#fff",
            padding: "10px",
            textAlign: "center",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          ▶ تشغيل
        </a>

       <button
  onClick={() =>
    handleDownload(student.gameUrl, `${student.gameName}.html`)
  }
  style={{
    flex: 1,
    background: "#3b82f6",
    color: "#fff",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer"
  }}
>
  ⬇ تحميل
</button>
      </div>
    </div>
  </div>
))}
    </div>
  </div>
)}

</div>

      </div>
    </div>
  
)}

    </div>
  );
}
