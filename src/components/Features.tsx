import React from 'react';
import { Bot, Brain, BarChart, Clock, Shield, Zap } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Automatisera komplexa processer med hjälp av avancerad AI-teknologi.'
    },
    {
      icon: BarChart,
      title: 'Prediktiv Analys',
      description: 'Förutse trender och fatta bättre beslut med datadriven insikt.'
    },
    {
      icon: Shield,
      title: 'Säker Implementation',
      description: 'Högsta säkerhetsnivå för din företagsdata och AI-processer.'
    },
    {
      icon: Clock,
      title: 'Snabb Integration',
      description: 'Sömlös integration med dina befintliga system och processer.'
    },
    {
      icon: Bot,
      title: 'AI Assistenter',
      description: 'Skräddarsydda AI-assistenter för olika arbetsuppgifter.'
    },
    {
      icon: Zap,
      title: 'Realtidsoptimering',
      description: 'Kontinuerlig optimering av processer i realtid.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Kraftfulla AI-lösningar för moderna företag
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Vi erbjuder en komplett svit av AI-verktyg och tjänster för att transformera din verksamhet
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col h-full bg-white p-6 rounded-xl">
                <feature.icon className="h-8 w-8 text-indigo-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}