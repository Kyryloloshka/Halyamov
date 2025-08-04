"use client";
import React from "react";
import { themeActions, useActionCreators, useStateSelector } from "@/state";
import "./style.scss";

const ThemeToggle = () => {
  const theme = useStateSelector((state) => state.theme.theme);
  const actions = useActionCreators(themeActions);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    actions.toggleTheme();
  };

  return (
    <button type="button" className="scale-75">
      <label 
        className="switch" 
        htmlFor="switch"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            actions.toggleTheme();
          }
        }}
        role="switch"
        aria-checked={theme === 'light'}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <input 
          id="switch" 
          type="checkbox" 
          className="circle" 
          checked={theme === 'light'}
          onChange={handleCheckboxChange}
          aria-label="Theme toggle"
        />
        <svg
          viewBox="0 0 384 512"
          xmlns="http://www.w3.org/2000/svg"
          className="moon svg"
          aria-hidden="true"
        >
          <path
            d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
          ></path>
        </svg>
        <div className="sun svg" aria-hidden="true">
          <span className="dot"></span>
        </div>
      </label>
    </button>
  );
};

export default ThemeToggle; 