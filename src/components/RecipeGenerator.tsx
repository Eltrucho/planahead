"use client";

import React, { useState } from "react";

type RecipeMode = "quick" | "categories";

interface RecipeGeneratorProps {
  onClose?: () => void;
  onRecipeGenerated?: (recipe: any) => void;
}

export function RecipeGenerator({ onClose, onRecipeGenerated }: RecipeGeneratorProps) {
  const [mode, setMode] = useState<RecipeMode>("categories");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [customIngredients, setCustomIngredients] = useState<string>("");

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleGenerate = () => {
    const payload = {
      mode,
      categories: selectedCategories,
      customIngredients: mode === "categories" ? customIngredients : "",
    };

    if (onRecipeGenerated) {
      onRecipeGenerated(payload);
    }

    if (onClose) {
      onClose();
    }
  };



  return (
    /* Capa contenedora flotante con fondo semitransparente y desenfoque */
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800 max-w-2xl w-full shadow-2xl relative my-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Generador de Recetas con IA</h2>
          {onClose && (
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors text-lg p-1"
            >
              ✕
            </button>
          )}
        </div>

        {/* Selector de Pestañas */}
        <div className="flex gap-4 border-b border-slate-800 pb-4 mb-6">
          <button
            onClick={() => setMode("categories")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === "categories"
                ? "bg-emerald-600 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            Por Categorías
          </button>
          <button
            onClick={() => setMode("quick")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === "quick"
                ? "bg-emerald-600 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
          >
            Modo Sorpréndeme ⚡
          </button>
        </div>

        {/* Contenido según la pestaña */}
        {mode === "categories" ? (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Selecciona categorías de ingredientes:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Verduras",
                  "Proteínas",
                  "Lácteos",
                  "Legumbres",
                  "Cereales",
                ].map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryToggle(cat)}
                      className="w-4 h-4 accent-emerald-500 rounded"
                    />
                    <span className="text-sm">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Campo de texto para ingredientes adicionales */}
            <div className="pt-2 border-t border-slate-800/60">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                ¿Otros ingredientes específicos?
              </label>
              <input
                type="text"
                value={customIngredients}
                onChange={(e) => setCustomIngredients(e.target.value)}
                placeholder="Ej: cuscús, champiñones, cúrcuma..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        ) : (
          <div className="py-8 text-center text-slate-400">
            <p>
              Generaremos una receta rápida y variada de forma automática sin
              filtros.
            </p>
          </div>
        )}

        {/* Botón de Acción */}
        <button
          onClick={handleGenerate}
          className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <span>Generar Receta</span>
        </button>
      </div>
    </div>
  );
}