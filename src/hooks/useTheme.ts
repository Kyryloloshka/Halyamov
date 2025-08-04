import { useEffect, useRef, useState } from 'react';
import { useStateSelector, themeActions, useActionCreators } from '@/state';

export const useTheme = () => {
  const theme = useStateSelector((state) => state.theme.theme);
  const actions = useActionCreators(themeActions);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      actions.setTheme(savedTheme);
    } else {
      actions.setTheme('dark');
    }
    setIsMounted(true);
  }, [actions]);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const html = document.documentElement;
    
    html.setAttribute('data-theme', theme);
    
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, isMounted]);
}; 