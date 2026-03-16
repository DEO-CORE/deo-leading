import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <div className="w-16 h-16 mb-4 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              <img src="https://i.ibb.co/wZS1Qdf9/image.png" alt='DEO'></img>
            </div>
            <p className="text-neutral-400 mb-4 max-w-md">
              Студия полного цикла разработки IT продуктов. Превращаем идеи в успешные решения.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/50 flex items-center justify-center transition-all group"
              >
                <Github className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/50 flex items-center justify-center transition-all group"
              >
                <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/50 flex items-center justify-center transition-all group"
              >
                <Twitter className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500/50 flex items-center justify-center transition-all group"
              >
                <Mail className="w-5 h-5 text-neutral-400 group-hover:text-orange-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  Веб-разработка
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  Мобильные приложения
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  UI/UX дизайн
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  Консалтинг
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">
                  Карьера
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © {currentYear} DEO-CORE. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
