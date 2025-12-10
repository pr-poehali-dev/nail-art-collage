import Icon from "@/components/ui/icon";

const NailCollage2 = () => {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <p className="text-purple-400 text-sm font-bold tracking-widest mb-4" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    EXCLUSIVE COLLECTION
                  </p>
                  <h1 className="text-7xl font-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <span className="text-white">ULTRA</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-gray-400">VIOLET</span>
                  </h1>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-600/20 border border-purple-600 flex items-center justify-center">
                      <Icon name="Sparkles" size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>Хромированное покрытие</p>
                      <p className="text-gray-500 text-sm">Зеркальный эффект</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-600/20 border border-gray-600 flex items-center justify-center">
                      <Icon name="Clock" size={24} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-white font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>Стойкость до 4 недель</p>
                      <p className="text-gray-500 text-sm">Гарантия качества</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-600/20 border border-purple-600 flex items-center justify-center">
                      <Icon name="Gift" size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>Скидка за друга 20%</p>
                      <p className="text-gray-500 text-sm">Специальное предложение</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-2xl transition-all duration-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    Забронировать
                  </button>
                  <button className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl border border-gray-700 transition-all duration-300" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    Портфолио
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-purple-600 rounded-3xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                      <img 
                        src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/12401aeb-2548-4a6a-b754-4e97cc18db0a.jpg"
                        alt="Ultra violet"
                        className="relative rounded-3xl w-full h-72 object-cover"
                      />
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-6 text-center">
                      <p className="text-5xl font-black text-purple-400 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>2490₽</p>
                      <p className="text-gray-400 text-sm">Стартовая цена</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gray-600 rounded-3xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                      <img 
                        src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/4a5effca-82ef-4ce6-ae0a-235d25e1a73f.jpg"
                        alt="Monochrome"
                        className="relative rounded-3xl w-full h-96 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NailCollage2;
