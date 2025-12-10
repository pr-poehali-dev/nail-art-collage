import Icon from "@/components/ui/icon";

const NailCollage3 = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 bg-black p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="w-16 h-1 bg-purple-600 mb-8"></div>
                <h1 className="text-6xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  MONO
                  <br />
                  CHROME
                </h1>
                <p className="text-gray-400 text-lg mb-12" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Минимализм и строгость в каждом штрихе
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="text-purple-400 text-sm font-bold mb-1">АКЦИЯ МЕСЯЦА</p>
                  <p className="text-white text-2xl font-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Приведи друга – 20% скидка
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-white text-3xl font-black mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>1800₽</p>
                    <p className="text-gray-500 text-xs">от</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-white text-3xl font-black mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>90мин</p>
                    <p className="text-gray-500 text-xs">время</p>
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Записаться
                  <Icon name="ArrowRight" size={20} />
                </button>
              </div>
            </div>

            <div className="md:col-span-3 p-8">
              <div className="grid grid-cols-2 gap-6 h-full">
                <div className="space-y-6">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/af3e7c9c-0f65-4fda-a021-c8f79656c221.jpg"
                      alt="Work 1"
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white font-bold">Классический френч</p>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-2xl p-6 text-center">
                    <Icon name="Star" size={32} className="text-purple-500 mx-auto mb-3" />
                    <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Rubik, sans-serif' }}>5.0 рейтинг</p>
                    <p className="text-gray-400 text-sm">250+ отзывов</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-purple-600 rounded-2xl p-6 text-center text-white">
                    <p className="text-6xl font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>20%</p>
                    <p className="text-purple-200 font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>За друга</p>
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <Icon name="Users" size={24} className="mx-auto" />
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/4a5effca-82ef-4ce6-ae0a-235d25e1a73f.jpg"
                      alt="Work 2"
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white font-bold">Геометрия</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="relative group overflow-hidden rounded-2xl h-48">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/12401aeb-2548-4a6a-b754-4e97cc18db0a.jpg"
                      alt="Work 3"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-1/2 left-8 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white text-3xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Хром фиолет</p>
                      <p className="text-gray-300">Премиум покрытие</p>
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

export default NailCollage3;
