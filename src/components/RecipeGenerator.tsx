"use client";

import { useState } from "react";
import {
  foodCategories,
  recipeModes,
  type RecipeMode,
} from "@/lib/recipe-categories";

function SparklesIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

type RecipeGeneratorProps = {
  onClose?: () => void;
};

export function RecipeGenerator({ onClose }: RecipeGeneratorProps) {
  const [activeMode, setActiveMode] = useState<RecipeMode>("surprise");
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [leftoverIngredients, setLeftoverIngredients] = useState("");

  function toggleItem(key: string) {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  function handleGenerate() {
    // Placeholder for future AI integration
  }

  return (
    <section
      className="rounded-2xl border border-sage-200 bg-white p-5 shadow-sm sm:p-6"
      aria-labelledby="recipe-generator-heading"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2
            id="recipe-generator-heading"
            className="text-lg font-semibold text-sage-700 sm:text-xl"
          >
            Generador de Recetas
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Elige un modo y crea tu próxima comida con IA.
          </p>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-sage-50 hover:text-sage-700"
            aria-label="Cerrar generador de recetas"
          >
            <CloseIcon />
          </button>
        )}
      </div>

      <nav
        className="mb-6 flex flex-col gap-1 rounded-xl bg-sage-100/80 p-1 sm:flex-row"
        role="tablist"
        aria-label="Modos de generación"
      >
        {recipeModes.map((mode) => {
          const isActive = activeMode === mode.id;

          return (
            <button
              key={mode.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveMode(mode.id)}
              className={`flex-1 rounded-lg px-4 py-2.5 text-left text-sm transition-all duration-200 sm:text-center ${
                isActive
                  ? "bg-sage-600 font-semibold text-white shadow-md"
                  : "font-medium text-zinc-500 hover:bg-sage-50 hover:text-sage-700"
              }`}
            >
              {mode.label}
            </button>
          );
        })}
      </nav>

      <div role="tabpanel" className="space-y-5">
        {activeMode === "surprise" && (
          <div className="rounded-xl bg-sage-50 px-5 py-6 text-center ring-1 ring-sage-100">
            <p className="text-sm text-zinc-600">
              {recipeModes.find((m) => m.id === "surprise")?.description}
            </p>
            <button
              type="button"
              onClick={handleGenerate}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-sage-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600"
            >
              <SparklesIcon />
              Sorpréndeme con una receta
            </button>
          </div>
        )}

        {activeMode === "categories" && (
          <div className="space-y-4">
            <p className="text-sm text-zinc-500">
              {recipeModes.find((m) => m.id === "categories")?.description}
            </p>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {foodCategories.map((category) => (
                <fieldset
                  key={category.id}
                  className="rounded-xl border border-sage-200 bg-sage-50/50 p-4"
                >
                  <legend className="px-1 text-sm font-semibold text-sage-700">
                    {category.label}
                  </legend>
                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    {category.items.map((item) => {
                      const key = `${category.id}:${item}`;
                      const isChecked = selectedItems.has(key);

                      return (
                        <li key={key}>
                          <label className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-sage-100">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleItem(key)}
                              className="h-4 w-4 shrink-0 rounded border-sage-300 text-sage-600 focus:ring-sage-500"
                            />
                            <span className="text-zinc-700">{item}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </fieldset>
              ))}
            </div>

            <button
              type="button"
              onClick={handleGenerate}
              disabled={selectedItems.size === 0}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sage-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <SparklesIcon />
              Generar con categorías seleccionadas
            </button>
          </div>
        )}

        {activeMode === "leftovers" && (
          <div className="space-y-4">
            <p className="text-sm text-zinc-500">
              {recipeModes.find((m) => m.id === "leftovers")?.description}
            </p>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-sage-700">
                Ingredientes disponibles
              </span>
              <textarea
                value={leftoverIngredients}
                onChange={(e) => setLeftoverIngredients(e.target.value)}
                placeholder="Ej: pollo, arroz, tomates, queso, espinacas..."
                rows={4}
                className="w-full resize-y rounded-xl border border-sage-200 bg-white px-4 py-3 text-sm text-zinc-700 placeholder:text-zinc-400 focus:border-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-200"
              />
            </label>

            <button
              type="button"
              onClick={handleGenerate}
              disabled={leftoverIngredients.trim().length === 0}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sage-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <SparklesIcon />
              Generar receta de aprovechamiento
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
