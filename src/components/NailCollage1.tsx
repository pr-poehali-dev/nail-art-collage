import Icon from "@/components/ui/icon";

const NailCollage1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-black to-gray-900 opacity-90"></div>
            
            <div className="relative grid md:grid-cols-3 gap-6 p-12">
              <div className="md:col-span-2 space-y-8">
                <div className="space-y-4">
                  <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <p className="text-white text-sm font-semibold" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      PREMIUM NAILS
                    </p>
                  </div>
                  
                  <h1 className="text-6xl md:text-8xl font-black text-white leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    NOIR
                    <br />
                    <span className="text-purple-400">STYLE</span>
                  </h1>
                  
                  <p className="text-gray-300 text-lg max-w-md" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    Элегантность в каждой детали. Монохромные дизайны с акцентами.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-purple-600 rounded-2xl transform -rotate-2 group-hover:rotate-2 transition-transform duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/4a5effca-82ef-4ce6-ae0a-235d25e1a73f.jpg"
                      alt="Noir style 1"
                      className="relative rounded-2xl w-full h-64 object-cover shadow-2xl"
                    />
                  </div>
                  
                  <div className="relative group mt-8">
                    <div className="absolute inset-0 bg-gray-700 rounded-2xl transform rotate-3 group-hover:-rotate-3 transition-transform duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/af3e7c9c-0f65-4fda-a021-c8f79656c221.jpg"
                      alt="Noir style 2"
                      className="relative rounded-2xl w-full h-64 object-cover shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <Icon name="Award" size={32} className="text-purple-400 mb-3" />
                    <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      Мастер года 2024
                    </h3>
                    <p className="text-gray-400 text-sm">Лучший специалист по монохромным дизайнам</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <Icon name="Users" size={32} className="text-purple-400 mb-3" />
                    <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      Приведи друга
                    </h3>
                    <p className="text-purple-300 text-2xl font-black mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>-20%</p>
                    <p className="text-gray-400 text-sm">Обеим подругам</p>
                  </div>
                </div>

                <button className="w-full bg-white text-black font-bold py-4 px-6 rounded-2xl hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-xl" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NailCollage1;
