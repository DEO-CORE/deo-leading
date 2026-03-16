import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Users, Target, Trophy, Clock, Lightbulb } from 'lucide-react';

const advantages = [
  {
    icon: Rocket,
    title: 'Быстрый запуск',
    description: 'Agile-методология позволяет выпускать MVP за 4-6 недель',
  },
  {
    icon: Users,
    title: 'Опытная команда',
    description: 'Профессионалы с опытом работы в крупных IT компаниях',
  },
  {
    icon: Target,
    title: 'Фокус на результат',
    description: 'Мы не просто пишем код — мы решаем бизнес-задачи',
  },
  {
    icon: Trophy,
    title: 'Высокое качество',
    description: 'Строгий контроль качества на каждом этапе разработки',
  },
  {
    icon: Clock,
    title: 'Соблюдение сроков',
    description: 'Прозрачное планирование и регулярная отчетность',
  },
  {
    icon: Lightbulb,
    title: 'Инновации',
    description: 'Используем передовые технологии и лучшие практики',
  },
];

export function Advantages() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
      
      {/* Gradient orb */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[128px]" />

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
            Почему <span className="text-orange-500">DEO-CORE</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Мы создаем не просто продукты, а долгосрочное партнерство
          </p>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Connecting line (for desktop) */}
              {index < advantages.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-orange-500/20 to-transparent" />
              )}

              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 flex items-center justify-center">
                    <advantage.icon className="w-8 h-8 text-orange-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-24 p-8 md:p-12 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-3xl border border-orange-500/20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Процесс работы
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Анализ', desc: 'Изучаем вашу задачу и целевую аудиторию' },
              { step: '02', title: 'Прототип', desc: 'Создаем дизайн и архитектуру решения' },
              { step: '03', title: 'Разработка', desc: 'Пишем код и тестируем функционал' },
              { step: '04', title: 'Запуск', desc: 'Деплоим и поддерживаем продукт' },
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Connecting arrow */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-orange-500/40 to-orange-500/20">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full" />
                  </div>
                )}

                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-500/30 mb-2">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-neutral-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
