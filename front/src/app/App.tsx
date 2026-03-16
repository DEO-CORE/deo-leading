import React from 'react';
import { Hero } from './components/hero';
import { Services } from './components/services';
import { Portfolio } from './components/portfolio';
import { Advantages } from './components/advantages';
import { ContactForm } from './components/contact-form';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Hero />
      <Services />
      <Portfolio />
      <Advantages />
      <ContactForm />
      <Footer />
    </div>
  );
}
