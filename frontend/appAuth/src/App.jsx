import React, { useState } from "react";
import {
  Sparkles,
  RefreshCw,
  User,
  LogOut,
  UploadCloud,
  Camera,
  ChevronRight,
} from "lucide-react";
import { mockWardrobe, modelImage as defaultModel } from "./data/mockData";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userModelImage, setUserModelImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const wardrobe = Array.isArray(mockWardrobe) ? mockWardrobe : [];

  // --- 1. VIEW LOGIN (CĂN GIỮA TUYỆT ĐỐI) ---
  if (!isLoggedIn) {
    return (
      // Fix: w-full + flex justify-center
      <div className="min-h-screen min-w-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
        {/* Background Image Full Width */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 backdrop-blur-[2px]"></div>
        </div>

        {/* Login Card Centered */}
        <div className="relative z-10  max-w-480 px-4">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl text-center">
            <h1 className="text-4xl font-serif tracking-[0.3em] text-white mb-8">
              GARBLO
            </h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsLoggedIn(true);
              }}
              className="space-y-4"
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 bg-white/80 rounded-xl outline-none focus:bg-white transition-all text-sm placeholder:text-gray-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-white/80 rounded-xl outline-none focus:bg-white transition-all text-sm placeholder:text-gray-500"
              />
              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all mt-4 shadow-lg shadow-emerald-900/20">
                Enter Studio
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. VIEW UPLOAD (CĂN GIỮA TUYỆT ĐỐI) ---
  if (!userModelImage) {
    return (
      // Fix: w-full + flex items-center justify-center
      <div className="min-h-screen min-w-screen w-full bg-[#f8f7f2] flex items-center justify-center p-6">
        {/* Container giới hạn max-width và tự động căn giữa (mx-auto) */}
        <div className="w-full max-w-[900px] bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row mx-auto">
          {/* Left Content */}
          <div className="flex-1 p-12 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl font-serif text-slate-900 mb-6">
              Setup Model
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              To begin the virtual fitting experience, please upload a full-body
              photo or use our default model.
            </p>
            <button
              onClick={() => setUserModelImage(defaultModel)}
              className="inline-flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-slate-400 hover:text-black transition-colors uppercase tracking-wider"
            >
              Use Demo Model <ChevronRight size={16} />
            </button>
          </div>

          {/* Right Area (Upload Zone) */}
          <div className="flex-1 bg-zinc-50 border-l border-gray-100 p-12 flex items-center justify-center relative group cursor-pointer hover:bg-zinc-100 transition-colors">
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer z-20"
              onChange={(e) =>
                setUserModelImage(URL.createObjectURL(e.target.files[0]))
              }
            />
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud size={32} className="text-black" />
              </div>
              <p className="font-bold text-slate-900">Click to Upload</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- 3. VIEW CHÍNH (CĂN GIỮA TUYỆT ĐỐI) ---
  return (
    // Fix: w-full + flex flex-col items-center
    <div className="min-h-screen min-w-screen w-full bg-[#f8f7f2] text-slate-900 font-sans flex flex-col items-center">
      {/* Header Wrapper: w-full + flex justify-center */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 flex justify-center h-[72px]">
        {/* Header Content: max-w-[1400px] + w-full */}
        <div className="w-full max-w-[1400px] px-6 flex justify-between items-center h-full">
          <h1 className="text-xl font-serif tracking-[0.3em] uppercase">
            GARBLO
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setUserModelImage(null)}
              className="text-[10px] font-bold uppercase tracking-widest hover:text-emerald-600 transition-colors flex items-center gap-2"
            >
              <RefreshCw size={14} /> New Model
            </button>
            <div className="h-4 w-[1px] bg-gray-300"></div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Wrapper: w-full + max-w-[1400px] + mx-auto (Quan trọng!) */}
      <main className="w-full max-w-[1400px] flex-1 flex flex-col md:flex-row mt-[72px] bg-white shadow-2xl h-[calc(100vh-72px)] overflow-hidden mx-auto border-x border-gray-100">
        {/* SECTION 1: MODEL DISPLAY (CENTERED) */}
        <div className="flex-[1.5] bg-[#fafafa] relative flex items-center justify-center p-6 md:p-10 overflow-hidden">
          {/* Card chứa ảnh */}
          <div className="relative w-full max-w-[500px] h-full max-h-[90vh] bg-white rounded-[2rem] shadow-xl overflow-hidden ring-1 ring-black/5">
            <img
              src={selectedItem ? selectedItem.image : userModelImage}
              alt="Preview"
              className="w-full h-full object-cover"
            />

            {/* Tag trạng thái */}
            <div className="absolute top-6 left-6">
              <span
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm border border-white/20 backdrop-blur-md ${
                  selectedItem
                    ? "bg-black text-white"
                    : "bg-white/80 text-black"
                }`}
              >
                {selectedItem ? "AI Fitting Active" : "Original Model"}
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 2: WARDROBE (RIGHT SIDE) */}
        <div className="flex-1 min-w-[320px] max-w-[450px] bg-white border-l border-gray-100 flex flex-col h-full">
          <div className="p-8 border-b border-gray-50 flex-shrink-0">
            <h2 className="text-3xl font-serif mb-2">Wardrobe</h2>
            <p className="text-xs text-gray-400">Select items to visualize.</p>
          </div>

          <div className="flex-1 overflow-y-auto p-6 grid grid-cols-2 gap-4 content-start pb-20">
            {/* Reset Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className={`aspect-[3/4] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center transition-all duration-300 ${
                !selectedItem
                  ? "border-black bg-black text-white"
                  : "border-gray-200 text-gray-400 hover:border-black hover:text-black"
              }`}
            >
              <RefreshCw
                size={24}
                className={!selectedItem ? "animate-spin-slow" : ""}
              />
              <span className="text-[10px] font-bold uppercase mt-2 tracking-widest">
                Reset
              </span>
            </button>

            {/* Wardrobe Items */}
            {wardrobe.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative aspect-[3/4] rounded-2xl overflow-hidden border transition-all duration-300 ${
                  selectedItem?.id === item.id
                    ? "border-black ring-2 ring-black ring-offset-2 scale-95"
                    : "border-transparent hover:shadow-lg"
                }`}
              >
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {selectedItem?.id === item.id && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Sparkles className="text-white drop-shadow-md" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
