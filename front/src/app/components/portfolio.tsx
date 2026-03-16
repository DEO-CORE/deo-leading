import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[]; // В Django мы назвали это technologies
  link: string;
  color?: string; // Опционально, если будешь передавать с бека
};

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка загрузки проектов:', err);
        setLoading(false);
      });
  }, []);

  const getDefaultColor = (index: number) => {
    const colors = [
      'from-pink-500/20 to-rose-500/20',
      'from-green-500/20 to-emerald-500/20',
      'from-orange-500/20 to-yellow-500/20',
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Наши <span className="text-orange-500">проекты</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Решения, которые меняют индустрии и приносят результат
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
            <div className="text-white">Загрузка проектов...</div>
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={project.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color || getDefaultColor(index)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative">
                    <div className="text-orange-400 text-sm font-medium mb-3">
                      {project.category}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      {project.title}
                      <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>

                    <p className="text-neutral-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-orange-400 font-medium group-hover:gap-4 transition-all"
                    >
                      <span>Подробнее</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all duration-300 flex items-center gap-2 border border-white/10 mx-auto group">
            Все проекты
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}