import type { Tab } from "./Dashboard";

type HeaderProps = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
};

const tabs: { id: Tab; label: string }[] = [
  { id: "menu", label: "Menú Semanal" },
  { id: "shopping", label: "Lista de la Compra" },
];

export function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-sage-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-600 text-sm font-bold text-white">
              PA
            </div>
            <h1 className="text-xl font-semibold tracking-tight text-sage-700 sm:text-2xl">
              PlanAhead
            </h1>
          </div>

          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sm font-semibold text-sage-700 ring-2 ring-sage-200"
            title="María García"
            aria-label="Avatar de usuario: María García"
          >
            MG
          </div>
        </div>

        <nav
          className="flex gap-1 rounded-xl bg-sage-100/80 p-1 sm:inline-flex sm:w-fit"
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
                    : "font-medium text-zinc-500 hover:bg-sage-50 hover:text-sage-700"
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
