import React from 'react';
import { useSearch } from '../contexts/SearchContext';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'lucide-react';

export function SearchResults() {
  const { results, isSearching, setSearchQuery } = useSearch();
  const [searchParams] = useSearchParams();
  
  React.useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchQuery(query);
  }, [searchParams, setSearchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Sökresultat
        </h1>
        
        {isSearching ? (
          <div className="flex items-center justify-center py-12">
            <Loader className="h-8 w-8 text-indigo-600 animate-spin" />
          </div>
        ) : results.length > 0 ? (
          <div className="grid gap-6">
            {results.map((result, index) => (
              <a
                key={index}
                href={result.url}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {result.type}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-900">{result.title}</h2>
                </div>
                <p className="mt-2 text-gray-600">{result.description}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Inga resultat hittades.</p>
          </div>
        )}
      </div>
    </div>
  );
}