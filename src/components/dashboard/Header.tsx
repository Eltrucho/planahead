"use client";

import { useState } from "react";
import type { Tab } from "./Dashboard";

type HeaderProps = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  onOpenPreferences?: () => void;
};

const tabs: { id: Tab; label: string }[] = [
  { id: "menu", label: "Menú Semanal" },
  { id: "shopping", label: "Lista de la Compra" },
];

export function Header({ activeTab, onTabChange, onOpenPreferences }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-10 border-b border-sage-200 bg-white/90 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/90 transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Nombre */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-600 text-sm font-bold text-white shadow-sm">
              QC
            </div>
            <h1 className="text-xl font-semibold tracking-tight text-sage-700 dark:text-sage-300 sm:text-2xl">
              Quécomo
            </h1>
          </div>

          {/* Acciones del Header: Filtros/Preferencias + Modo Claro/Oscuro + Avatar */}
          <div className="flex items-center gap-2">
            {/* Botón de Preferencias / Exclusiones Alimentarias */}
            <button
              type="button"
              onClick={onOpenPreferences}
              title="Preferencias e ingredientes no deseados"
              aria-label="Abrir preferencias alimentarias"
              className="flex h-10 px-3 items-center gap-1.5 rounded-full bg-sage-50 text-sage-700 hover:bg-sage-100 border border-sage-200 dark:bg-zinc-800 dark:text-sage-300 dark:border-zinc-700 dark:hover:bg-zinc-700 text-xs font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="hidden sm:inline">Filtros IA</span>
            </button>

            {/* Botón Switch Modo Claro / Oscuro */}
            <button
              type="button"
              onClick={toggleTheme}
              title={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              aria-label="Alternar tema"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-50 text-sage-700 hover:bg-sage-100 border border-sage-200 dark:bg-zinc-800 dark:text-sage-300 dark:border-zinc-700 dark:hover:bg-zinc-700 transition-colors"
            >
              {isDarkMode ? (
                /* Icono Sol (Modo claro suave) */
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                /* Icono Luna (Modo oscuro) */
                <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar del usuario */}
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sm font-semibold text-sage-700 ring-2 ring-sage-200 dark:bg-zinc-800 dark:text-sage-300 dark:ring-zinc-700"
              title="María García"
              aria-label="Avatar de usuario: María García"
            >
              MG
            </div>
          </div>
        </div>

        {/* Pestañas de Navegación */}
        <nav
          className="flex gap-1 rounded-xl bg-sage-100/80 p-1 dark:bg-zinc-800/80 sm:inline-flex sm:w-fit"
          aria-label="Navegación principal"
          role="tablist"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onTabChange(tab.id)}
                className={`flex-1 rounded-lg px-4 py-2.5 text-sm transition-all duration-200 sm:flex-none sm:px-6 ${
                  isActive
                    ? "bg-sage-600 font-semibold text-white shadow-md"
                    : "font-medium text-zinc-600 hover:bg-sage-50 hover:text-sage-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}