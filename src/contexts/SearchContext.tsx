import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchResult {
  title: string;
  description: string;
  type: 'feature' | 'service' | 'article';
  url: string;
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  results: SearchResult[];
  isSearching: boolean;
}

const SearchContext = createContext<SearchContextType | null>(null);

// Mock data for demonstration
const mockData: SearchResult[] = [
  {
    title: 'AI Automation',
    description: 'Automatisera repetitiva uppgifter med AI',
    type: 'feature',
    url: '#features'
  },
  {
    title: 'Smart Analys',
    description: 'Datadriven beslutsfattning för företag',
    type: 'service',
    url: '#services'
  },
  {
    title: 'Prediktiv Analys',
    description: 'Förutse trender och fatta bättre beslut',
    type: 'feature',
    url: '#features'
  }
];

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Update results when search query changes
  React.useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      // Simulate search delay
      const timer = setTimeout(() => {
        const filtered = mockData.filter(
          item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filtered);
        setIsSearching(false);
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [searchQuery]);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, results, isSearching }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}