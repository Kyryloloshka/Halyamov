import { useEffect } from 'react';
import { useStateSelector, themeActions, useActionCreators } from '@/state';

export const useTheme = () => {
  const theme = useStateSelector((state) => state.theme.theme);
  const actions = useActionCreators(themeActions);

  useEffect(() => {
    const html = document.documentElement;
    
    // Встановлюємо data-theme атрибут
    html.setAttribute('data-theme', theme);
    
    // Встановлюємо Tailwind dark mode class
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    // Зберігаємо тему в localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Ініціалізуємо тему при завантаженні
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      actions.setTheme(savedTheme);
    } else {
      actions.setTheme('dark');
    }
  }, [actions]);
}; 