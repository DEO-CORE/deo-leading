import { motion } from 'motion/react';
import { Code2, Smartphone, Globe, Palette, Zap, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Веб-разработка',
    description: 'Создаем современные веб-приложения с использованием новейших технологий и фреймворков.',
  },
  {
    icon: Smartphone,
    title: 'Мобильные приложения',
    description: 'Разработка нативных и кроссплатформенных приложений для iOS и Android.',
  },
  {
    icon: Globe,
    title: 'SaaS решения',
    description: 'Проектируем и разрабатываем облачные сервисы и платформы для вашего бизнеса.',
  },
  {
    icon: Palette,
    title: 'UI/UX дизайн',
    description: 'Создаем интуитивные интерфейсы, которые нравятся пользователям.',
  },
  {
    icon: Zap,
    title: 'MVP разработка',
    description: 'Быстрый запуск вашего продукта для проверки гипотез и выхода на рынок.',
  },
  {
    icon: ShieldCheck,
    title: 'Техподдержка',
    description: 'Обеспечиваем стабильную работу и развитие вашего продукта.',
  },
];

export function Services() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Наши <span className="text-orange-500">услуги</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Полный спектр услуг для создания и развития вашего IT продукта
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/5 rounded-2xl transition-all duration-300" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-orange-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
