import { useEffect, useState } from 'react';

const listeners = new Set();
let globalTheme = typeof window !== 'undefined' ? (localStorage.getItem('theme') || 'light') : 'light';

function setGlobalTheme(newTheme) {
  globalTheme = newTheme;
  const root = document.documentElement;
  const body = document.body;
  
  if (newTheme === 'dark') {
    root.classList.add('dark');
    body.classList.add('dark');
  } else {
    root.classList.remove('dark');
    body.classList.remove('dark');
  }
  
  localStorage.setItem('theme', newTheme);
  listeners.forEach(listener => listener(newTheme));
}

// Apply theme immediately on script load to avoid flashing
if (typeof window !== 'undefined') {
  const root = document.documentElement;
  const body = document.body;
  if (globalTheme === 'dark') {
    root.classList.add('dark');
    body.classList.add('dark');
  } else {
    root.classList.remove('dark');
    body.classList.remove('dark');
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(globalTheme);

  useEffect(() => {
    const handleChange = (newTheme) => {
      setTheme(newTheme);
    };
    listeners.add(handleChange);
    return () => {
      listeners.delete(handleChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setGlobalTheme(nextTheme);
  };

  return {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
    setTheme: (newTheme) => setGlobalTheme(newTheme)
  };
}
