"use client";
import { useTheme } from '@/hooks/useTheme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  useTheme();
  
  return <>{children}</>;
};

export default ThemeProvider; 