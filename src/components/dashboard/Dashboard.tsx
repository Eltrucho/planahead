"use client";

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
  return (
    <div className="flex min-h-full flex-col">
      <Header activeTab={activeTab} onTabChange={onTabChange} />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {activeTab === "menu" && (
          <div className="mb-8 space-y-6">
            <QuickActions onGenerateClick={onToggleRecipeGenerator} />
            {showRecipeGenerator && (
              <RecipeGenerator onClose={onCloseRecipeGenerator} />
            )}
          </div>
        )}

        {activeTab === "menu" ? <WeeklyMenuGrid /> : <ShoppingListView />}
      </main>
    </div>
  );
}
