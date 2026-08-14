"use client";

import { useState } from "react";
import { Dashboard, type Tab } from "@/components/dashboard/Dashboard";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("menu");

  return <Dashboard activeTab={activeTab} onTabChange={setActiveTab} />;
}
