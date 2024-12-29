import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, Menu } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { SearchBar } from './SearchBar';

export function Header() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AI Bolaget</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <SearchBar />
            <nav className="flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-indigo-600">Funktioner</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600">Om oss</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600">Kontakt</a>
            </nav>
            {isAuthenticated ? (
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Min Sida
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Logga in
              </button>
            )}
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}