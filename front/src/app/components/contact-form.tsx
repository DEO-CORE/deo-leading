import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  User,
  MessageSquare,
  CheckCircle,
  Send as Telegram,
} from 'lucide-react';

type FormData = {
  name: string;
  telegram: string;
  description: string;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    telegram: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        'http://127.0.0.1:8000/api/startproject/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Server error');
      }

      setSubmitted(true);
      setFormData({ name: '', telegram: '', description: '' });
      setTimeout(() => setSubmitted(false), 3000);

    } catch (error) {
      alert('Ошибка отправки. Проверьте соединение с сервером.');
    } finally {
      setLoading(false);
    }
  };


   useEffect 

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[128px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Начнем <span className="text-orange-500">ваш проект</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Расскажите о вашей идее, и мы предложим решение
          </p>
        </motion.div>

        <div className="p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Спасибо!
              </h3>
              <p className="text-neutral-400">
                Мы свяжемся с вами в ближайшее время
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-white mb-2">
                  <User className="w-4 h-4 text-orange-500" />
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-orange-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-white mb-2">
                  <Telegram className="w-4 h-4 text-orange-500" />
                  Telegram
                </label>
                <input
                  type="text"
                  name="telegram"
                  required
                  value={formData.telegram}
                  onChange={handleChange}
                  placeholder="@ivan"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-orange-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-white mb-2">
                  <MessageSquare className="w-4 h-4 text-orange-500" />
                  О проекте
                </label>
                <textarea
                  name="description"
                  rows={5}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Опишите вашу задачу..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white resize-none outline-none focus:border-orange-500/50 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 hover:from-orange-600 hover:to-orange-700 transition-all font-bold"
              >
                {loading ? 'Отправка...' : 'Отправить заявку'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}