"use client";

import { useState } from "react";
import { Dashboard, type Tab } from "@/components/dashboard/Dashboard";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("menu");
  const [showRecipeGenerator, setShowRecipeGenerator] = useState(false);

  return (
    <Dashboard
      activeTab={activeTab}
      onTabChange={setActiveTab}
      showRecipeGenerator={showRecipeGenerator}
      onToggleRecipeGenerator={() => setShowRecipeGenerator((prev) => !prev)}
      onCloseRecipeGenerator={() => setShowRecipeGenerator(false)}
    />
  );
}
