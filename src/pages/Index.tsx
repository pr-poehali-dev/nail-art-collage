import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Слайд 1: Название салона и акция
    <div key="slide1" className="min-h-screen bg-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="grid md:grid-cols-5 gap-0">
            
            <div className="md:col-span-2 bg-black p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="w-16 h-1 bg-purple-600 mb-8"></div>
                
                <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  NAILS
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-gray-400">STUDIO</span>
                </h1>
                
                <p className="text-gray-400 text-xl mb-12" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Элегантность в каждой детали. Монохромные дизайны с фиолетовыми акцентами.
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-6 py-2">
                  <p className="text-purple-400 text-sm font-bold mb-2 tracking-wider">АКЦИЯ МЕСЯЦА</p>
                  <p className="text-white text-3xl font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Приведи друга
                  </p>
                  <p className="text-white text-3xl font-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Получи 20% скидка
                  </p>
                  <p className="text-gray-500 text-sm mt-3">Для вас и вашей подруги</p>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Записаться онлайн
                  <Icon name="ArrowRight" size={20} />
                </button>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <Icon name="Instagram" size={20} className="text-purple-400" />
                  <p className="text-gray-400 text-sm">@nails.studio</p>
                  <div className="flex-1"></div>
                  <Icon name="Phone" size={20} className="text-gray-400" />
                  <p className="text-gray-400 text-sm">+7 (999) 123-45-67</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-8 flex items-center justify-center">
              <div className="text-center max-w-2xl">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-16 mb-8 shadow-2xl">
                  <Icon name="Users" size={80} className="mx-auto mb-6 text-white" />
                  <p className="text-9xl font-black mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>20%</p>
                  <p className="text-2xl text-purple-100 font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>За каждого друга</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-xl p-6">
                    <Icon name="Gift" size={40} className="mx-auto mb-3 text-purple-600" />
                    <p className="text-gray-900 font-bold">Бонусы</p>
                    <p className="text-gray-600 text-sm">За рекомендации</p>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-6">
                    <Icon name="Heart" size={40} className="mx-auto mb-3 text-purple-600" />
                    <p className="text-gray-900 font-bold">Программа лояльности</p>
                    <p className="text-gray-600 text-sm">Накопительная система</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Слайд 2: Портфолио
    <div key="slide2" className="min-h-screen bg-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="grid md:grid-cols-5 gap-0">
            
            <div className="md:col-span-2 bg-black p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="w-16 h-1 bg-purple-600 mb-8"></div>
                
                <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  ПОРТ
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-gray-400">ФОЛИО</span>
                </h1>
                
                <p className="text-gray-400 text-xl mb-12" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Наши работы говорят сами за себя. Уникальный стиль и безупречное качество.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>500+</p>
                    <p className="text-gray-500 text-xs">Клиентов</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <p className="text-3xl font-black text-purple-400 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>1000+</p>
                    <p className="text-gray-500 text-xs">Дизайнов</p>
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Смотреть все работы
                  <Icon name="ExternalLink" size={20} />
                </button>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <Icon name="Instagram" size={20} className="text-purple-400" />
                  <p className="text-gray-400 text-sm">@nails.studio</p>
                  <div className="flex-1"></div>
                  <Icon name="Phone" size={20} className="text-gray-400" />
                  <p className="text-gray-400 text-sm">+7 (999) 123-45-67</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-8">
              <div className="grid grid-cols-2 gap-6 h-full">
                
                <div className="space-y-6">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/af3e7c9c-0f65-4fda-a021-c8f79656c221.jpg"
                      alt="Работа 1"
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white font-bold text-lg">Классический френч</p>
                      <p className="text-gray-300 text-sm">Элегантность</p>
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/725b1f73-38e0-4d3d-b8e6-d37087ef0a9a.jpg"
                      alt="Работа 2"
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white font-bold text-lg">Готика</p>
                      <p className="text-gray-300 text-sm">Смелый стиль</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/4a5effca-82ef-4ce6-ae0a-235d25e1a73f.jpg"
                      alt="Работа 3"
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white font-bold text-lg">Геометрия</p>
                      <p className="text-gray-300 text-sm">Минимализм</p>
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/c9c0fe4f-bdb8-4ce4-b687-bfd0bbc2785a.jpg"
                      alt="Работа 4"
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white font-bold text-lg">Люкс дизайн</p>
                      <p className="text-gray-300 text-sm">Кристаллы</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="relative group overflow-hidden rounded-2xl h-48">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img 
                      src="https://cdn.poehali.dev/projects/f7cfef95-8176-4713-92b6-f39296340294/files/12401aeb-2548-4a6a-b754-4e97cc18db0a.jpg"
                      alt="Работа 5"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-1/2 left-8 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white text-3xl font-bold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Хром фиолет</p>
                      <p className="text-gray-300">Премиум покрытие с зеркальным эффектом</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Слайд 3: Качество
    <div key="slide3" className="min-h-screen bg-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="grid md:grid-cols-5 gap-0">
            
            <div className="md:col-span-2 bg-black p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="w-16 h-1 bg-purple-600 mb-8"></div>
                
                <h1 className="text-7xl md:text-8xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  КАЧЕС
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-gray-400">ТВО</span>
                </h1>
                
                <p className="text-gray-400 text-xl mb-12" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Мы используем только премиальные материалы и проверенные техники для идеального результата.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                    <Icon name="Award" size={24} className="text-purple-400" />
                    <div>
                      <p className="text-white font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>Сертифицированные мастера</p>
                      <p className="text-gray-500 text-xs">Дипломы международного образца</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                    <Icon name="Shield" size={24} className="text-gray-400" />
                    <div>
                      <p className="text-white font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>Стерильность</p>
                      <p className="text-gray-500 text-xs">Все инструменты в автоклаве</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  Записаться онлайн
                  <Icon name="ArrowRight" size={20} />
                </button>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <Icon name="Instagram" size={20} className="text-purple-400" />
                  <p className="text-gray-400 text-sm">@nails.studio</p>
                  <div className="flex-1"></div>
                  <Icon name="Phone" size={20} className="text-gray-400" />
                  <p className="text-gray-400 text-sm">+7 (999) 123-45-67</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
                    <Icon name="Sparkles" size={48} className="mb-4" />
                    <h3 className="text-2xl font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Премиум материалы</h3>
                    <p className="text-purple-100">CND, OPI, Luxio – только проверенные бренды с мировым именем</p>
                  </div>

                  <div className="bg-gray-900 rounded-2xl p-8 text-white">
                    <Icon name="Clock" size={48} className="mb-4 text-gray-400" />
                    <h3 className="text-2xl font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Стойкость до 4 недель</h3>
                    <p className="text-gray-400">Гарантируем долговечность покрытия при правильном уходе</p>
                  </div>

                  <div className="bg-gray-100 rounded-2xl p-8">
                    <Icon name="Heart" size={48} className="mb-4 text-purple-600" />
                    <h3 className="text-2xl font-black mb-2 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>Забота о ногтях</h3>
                    <p className="text-gray-600">Укрепление и восстановление натуральных ногтей</p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 text-white">
                    <Icon name="Zap" size={48} className="mb-4 text-purple-400" />
                    <h3 className="text-2xl font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Безопасность</h3>
                    <p className="text-gray-400">Гипоаллергенные материалы без формальдегида</p>
                  </div>
                </div>

                <div className="bg-black rounded-2xl p-8 flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center">
                      <Icon name="Star" size={40} className="text-white" />
                    </div>
                  </div>
                  <div className="text-white">
                    <p className="text-4xl font-black mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>5.0 рейтинг</p>
                    <p className="text-gray-400">На основе 250+ отзывов наших клиентов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="relative">
      {slides[currentSlide]}
      
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-md rounded-full p-2 flex gap-2 border border-white/10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-purple-500 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-black/80 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-black/90 transition-all duration-300"
        aria-label="Предыдущий"
      >
        <Icon name="ChevronLeft" size={24} className="text-white" />
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-black/80 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-black/90 transition-all duration-300"
        aria-label="Следующий"
      >
        <Icon name="ChevronRight" size={24} className="text-white" />
      </button>
    </div>
  );
};

export default Index;
