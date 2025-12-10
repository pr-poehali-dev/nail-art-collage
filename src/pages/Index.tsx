import Icon from "@/components/ui/icon";
import NailCollage1 from "@/components/NailCollage1";
import NailCollage2 from "@/components/NailCollage2";
import NailCollage3 from "@/components/NailCollage3";
import { useState } from "react";

const Index = () => {
  const [currentCollage, setCurrentCollage] = useState(0);
  
  const collages = [
    <div key="0" className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1f] to-[#0f0520] p-4 md:p-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full">
        <div className="bg-zinc-900/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-purple-900/50 overflow-hidden transform hover:scale-[1.02] transition-all duration-500 border border-purple-900/30">
          <div className="grid md:grid-cols-2 gap-0">
            
            <div className="relative p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-zinc-900 to-zinc-950">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg shadow-purple-500/50">
                АКЦИЯ
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="bg-gradient-to-r from-rose-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  NAILS
                </span>
                <br />
                <span className="text-purple-400">STUDIO</span>
              </h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-rose-600 to-purple-600 p-2 rounded-xl shadow-lg shadow-purple-500/30">
                    <Icon name="Sparkles" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      Трендовый маникюр 2024
                    </p>
                    <p className="text-zinc-400 text-sm">Уникальные дизайны и качество</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 p-2 rounded-xl shadow-lg shadow-fuchsia-500/30">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-purple-100" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      Приведи друга — скидка 20%
                    </p>
                    <p className="text-zinc-400 text-sm">Для вас и вашей подруги!</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-rose-600 via-purple-600 to-violet-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-xl shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/70 transform hover:scale-105 transition-all duration-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Записаться сейчас
              </button>
              
              <div className="mt-8 flex gap-4">
                <div className="bg-gradient-to-br from-purple-900/50 to-rose-900/50 px-4 py-2 rounded-xl border border-purple-700/30">
                  <p className="text-2xl font-black text-purple-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>1500₽</p>
                  <p className="text-xs text-zinc-400">От</p>
                </div>
                <div className="bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50 px-4 py-2 rounded-xl border border-violet-700/30">
                  <p className="text-2xl font-black text-violet-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>2Ч</p>
                  <p className="text-xs text-zinc-400">Время</p>
                </div>
              </div>
            </div>

            <div className="relative p-6 md:p-8 bg-gradient-to-br from-purple-950 to-rose-950">
              <div className="grid grid-cols-2 gap-3 h-full">
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-purple-600 rounded-2xl transform rotate-6 opacity-40 group-hover:rotate-12 transition-transform duration-500"></div>
                  <img 
                    src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/b9c4daa3-021d-44f2-a597-52f52121f41b.jpg" 
                    alt="Маникюр 1" 
                    className="relative rounded-2xl w-full h-full object-cover shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"
                  />
                </div>

                <div className="relative group mt-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl transform -rotate-6 opacity-40 group-hover:-rotate-12 transition-transform duration-500"></div>
                  <img 
                    src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/725b1f73-38e0-4d3d-b8e6-d37087ef0a9a.jpg" 
                    alt="Маникюр 2" 
                    className="relative rounded-2xl w-full h-full object-cover shadow-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-500"
                  />
                </div>

                <div className="relative group -mt-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-rose-600 rounded-2xl transform rotate-3 opacity-40 group-hover:rotate-6 transition-transform duration-500"></div>
                  <img 
                    src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/c9c0fe4f-bdb8-4ce4-b687-bfd0bbc2785a.jpg" 
                    alt="Маникюр 3" 
                    className="relative rounded-2xl w-full h-full object-cover shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"
                  />
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="bg-zinc-900/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl shadow-purple-500/50 border border-purple-600/30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <p className="text-4xl font-black text-rose-400 text-center mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>20%</p>
                    <p className="text-sm font-bold text-purple-200 text-center" style={{ fontFamily: 'Rubik, sans-serif' }}>За друга</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-zinc-900/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-purple-600/30">
                <p className="text-xs font-bold text-purple-200 flex items-center gap-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  <Icon name="Instagram" size={16} className="text-rose-400" />
                  @nails.studio
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-purple-300/80 text-sm font-medium" style={{ fontFamily: 'Rubik, sans-serif' }}>
            📍 Москва, ул. Примерная, 123 • 📞 +7 (999) 123-45-67
          </p>
        </div>
      </div>
    </div>,
    <NailCollage1 key="1" />,
    <NailCollage2 key="2" />,
    <NailCollage3 key="3" />
  ];

  return (
    <div className="relative">
      {collages[currentCollage]}
      
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-md rounded-full p-2 flex gap-2 border border-white/10">
          {collages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCollage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentCollage === index 
                  ? 'bg-purple-500 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Коллаж ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <button
        onClick={() => setCurrentCollage((prev) => (prev - 1 + collages.length) % collages.length)}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-black/80 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-black/90 transition-all duration-300"
        aria-label="Предыдущий"
      >
        <Icon name="ChevronLeft" size={24} className="text-white" />
      </button>
      
      <button
        onClick={() => setCurrentCollage((prev) => (prev + 1) % collages.length)}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-black/80 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-black/90 transition-all duration-300"
        aria-label="Следующий"
      >
        <Icon name="ChevronRight" size={24} className="text-white" />
      </button>
    </div>
  );
};

export default Index;