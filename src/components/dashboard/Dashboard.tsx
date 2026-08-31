"use client";
import React, { useState } from "react";
import { Header } from "./Header";
import { QuickActions } from "./QuickActions";
import { ShoppingListView } from "./ShoppingListView";
import { WeeklyMenuGrid } from "./WeeklyMenuGrid";
import { RecipeGenerator } from "@/components/RecipeGenerator";

export type Tab = "menu" | "shopping";

type DashboardProps = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  showRecipeGenerator: boolean;
  onToggleRecipeGenerator: () => void;
  onCloseRecipeGenerator: () => void;
};

export function Dashboard({
  activeTab,
  onTabChange,
  showRecipeGenerator,
  onToggleRecipeGenerator,
  onCloseRecipeGenerator,
}: DashboardProps) {
  const [localShowGenerator, setLocalShowGenerator] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [weeklyMenu, setWeeklyMenu] = useState<Record<string, { lunch: string | null; dinner: string | null }>>({
    Lunes: { lunch: null, dinner: null },
    Martes: { lunch: null, dinner: null },
    Miércoles: { lunch: null, dinner: null },
    Jueves: { lunch: null, dinner: null },
    Viernes: { lunch: null, dinner: null },
    Sábado: { lunch: null, dinner: null },
    Domingo: { lunch: null, dinner: null },
  });

  const handleRecipeGenerated = (payload: { day: string; mealType: "lunch" | "dinner"; mode: string; categories: string[]; customIngredients: string }) => {
    let recipeName = "Receta Sorpresa";
    if (payload.categories.length > 0 || payload.customIngredients) {
      const parts = [...payload.categories];
      if (payload.customIngredients) parts.push(payload.customIngredients);
      recipeName = `Plato con ${parts.join(", ")}`;
    }

    setWeeklyMenu((prev) => ({
      ...prev,
      [payload.day]: {
        ...prev[payload.day],
        [payload.mealType]: recipeName,
      },
    }));

    handleClose();
  };

  const handleToggle = onToggleRecipeGenerator || (() => setLocalShowGenerator(true));
  const handleClose = onCloseRecipeGenerator || (() => setLocalShowGenerator(false));

  return (
    <div className="flex min-h-screen flex-col bg-stone-100/70 dark:bg-zinc-950 transition-colors duration-200">
      <Header
        activeTab={activeTab}
        onTabChange={onTabChange}
        onOpenPreferences={() => setIsPreferencesOpen(true)}
      />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {activeTab === "menu" && (
          <div className="mb-8 space-y-6">
            <QuickActions onGenerateClick={handleToggle} />
            {(showRecipeGenerator || localShowGenerator) && (
              <RecipeGenerator
                onClose={handleClose}
                onRecipeGenerated={handleRecipeGenerated}
              />
            )}
          </div>
        )}

        {activeTab === "menu" ? (
          <WeeklyMenuGrid menu={weeklyMenu} />
        ) : (
          <ShoppingListView />
        )}
      </main>
    </div>
  );
}