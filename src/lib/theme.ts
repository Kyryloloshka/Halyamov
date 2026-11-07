export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

// Runs inline in <head> before first paint, so the page never flashes the
// wrong theme. Keep it tiny and dependency-free.
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t!=='light'&&t!=='dark')t='dark';var d=document.documentElement;d.setAttribute('data-theme',t);if(t==='dark')d.classList.add('dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');document.documentElement.classList.add('dark');}document.documentElement.classList.add('js');})();`;

export const getTheme = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";

export const applyTheme = (theme: Theme) => {
  const html = document.documentElement;
  // Color transitions are enabled only while switching, instead of a global
  // `* { transition }` that taxes every style change on the page.
  html.classList.add("theme-transition");
  html.setAttribute("data-theme", theme);
  html.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
  window.setTimeout(() => html.classList.remove("theme-transition"), 350);
};
