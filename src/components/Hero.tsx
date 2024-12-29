import React from 'react';
import { ArrowRight, Bot, Sparkles, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-gray-900 sm:text-7xl">
          Förvandla din verksamhet{' '}
          <span className="relative whitespace-nowrap text-indigo-600">
            <span className="relative">med AI</span>
          </span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Vi hjälper företag att implementera AI-lösningar som ökar effektiviteten och skapar nya affärsmöjligheter.
        </p>
        
        <div className="mt-10 flex justify-center gap-x-6">
          <button className="group inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white hover:bg-indigo-700 hover:text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700 active:text-white/80">
            Kom igång
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          
          <button className="group inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-gray-700 ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50">
            Läs mer
          </button>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-6">
          {[
            { icon: Bot, title: 'AI-Automation', desc: 'Automatisera repetitiva uppgifter' },
            { icon: Sparkles, title: 'Smart Analys', desc: 'Datadriven beslutsfattning' },
            { icon: TrendingUp, title: 'Tillväxt', desc: 'Öka din affärseffektivitet' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <item.icon className="h-10 w-10 text-indigo-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}