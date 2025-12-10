import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFBE0B] via-[#FF006E] to-[#8338EC] p-4 md:p-8 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-0">
            
            <div className="relative p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-pink-50">
              <div className="absolute top-4 right-4 bg-[#8338EC] text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg">
                АКЦИЯ
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="bg-gradient-to-r from-[#FF006E] via-[#8338EC] to-[#FB5607] bg-clip-text text-transparent">
                  NAILS
                </span>
                <br />
                <span className="text-[#8338EC]">STUDIO</span>
              </h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-[#FF006E] to-[#8338EC] p-2 rounded-xl">
                    <Icon name="Sparkles" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      Трендовый маникюр 2024
                    </p>
                    <p className="text-gray-600 text-sm">Уникальные дизайны и качество</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-[#FB5607] to-[#FFBE0B] p-2 rounded-xl">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      Приведи друга — скидка 20%
                    </p>
                    <p className="text-gray-600 text-sm">Для вас и вашей подруги!</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-[#FF006E] via-[#8338EC] to-[#FB5607] text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Записаться сейчас
              </button>
              
              <div className="mt-8 flex gap-4">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 px-4 py-2 rounded-xl">
                  <p className="text-2xl font-black text-[#8338EC]" style={{ fontFamily: 'Montserrat, sans-serif' }}>1500₽</p>
                  <p className="text-xs text-gray-600">От</p>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 px-4 py-2 rounded-xl">
                  <p className="text-2xl font-black text-[#FB5607]" style={{ fontFamily: 'Montserrat, sans-serif' }}>2Ч</p>
                  <p className="text-xs text-gray-600">Время</p>
                </div>
              </div>
            </div>

            <div className="relative p-6 md:p-8 bg-gradient-to-br from-[#8338EC] to-[#FF006E]">
              <div className="grid grid-cols-2 gap-3 h-full">
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFBE0B] to-[#FB5607] rounded-2xl transform rotate-6 opacity-50 group-hover:rotate-12 transition-transform duration-500"></div>
                  <img 
                    src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/4c3f0efe-0b9c-40df-973e-069d6e766918.jpg" 
                    alt="Маникюр 1" 
                    className="relative rounded-2xl w-full h-full object-cover shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"
                  />
                </div>

                <div className="relative group mt-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF006E] to-[#8338EC] rounded-2xl transform -rotate-6 opacity-50 group-hover:-rotate-12 transition-transform duration-500"></div>
                  <img 
                    src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/9c23149a-afae-4079-b0a3-18045461dd4f.jpg" 
                    alt="Маникюр 2" 
                    className="relative rounded-2xl w-full h-full object-cover shadow-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-500"
                  />
                </div>

                <div className="relative group -mt-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8338EC] to-[#FFBE0B] rounded-2xl transform rotate-3 opacity-50 group-hover:rotate-6 transition-transform duration-500"></div>
                  <img 
                    src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/9ac816f4-8a9f-473d-817c-9f99175f7183.jpg" 
                    alt="Маникюр 3" 
                    className="relative rounded-2xl w-full h-full object-cover shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"
                  />
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <p className="text-4xl font-black text-[#FF006E] text-center mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>20%</p>
                    <p className="text-sm font-bold text-gray-800 text-center" style={{ fontFamily: 'Rubik, sans-serif' }}>За друга</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl">
                <p className="text-xs font-bold text-gray-800 flex items-center gap-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  <Icon name="Instagram" size={16} className="text-[#FF006E]" />
                  @nails.studio
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/80 text-sm font-medium" style={{ fontFamily: 'Rubik, sans-serif' }}>
            📍 Москва, ул. Примерная, 123 • 📞 +7 (999) 123-45-67
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
