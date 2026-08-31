import React from "react";

type MealPlan = {
  lunch: string | null;
  dinner: string | null;
};

type WeeklyMenuGridProps = {
  menu: Record<string, MealPlan>;
};

export function WeeklyMenuGrid({ menu }: WeeklyMenuGridProps) {
  const days = Object.keys(menu);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-400">
          Menú Semanal
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Planifica tus comidas de la semana de un vistazo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        {days.map((day) => {
          const plan = menu[day];
          return (
            <div
              key={day}
              className="flex flex-col rounded-2xl border border-stone-200/80 bg-white/80 p-4 shadow-sm transition-colors dark:border-zinc-800 dark:bg-zinc-900/90"
            >
              <h3 className="mb-3 font-semibold text-zinc-800 dark:text-zinc-100">
                {day}
              </h3>

              <div className="flex flex-1 flex-col justify-between space-y-3">
                {/* Almuerzo */}
                <div className="rounded-xl border border-emerald-900/10 bg-emerald-50/50 p-2.5 transition-colors dark:border-emerald-500/20 dark:bg-emerald-950/30">
                  <span className="block text-[10px] font-bold tracking-wider text-emerald-800 dark:text-emerald-400">
                    ALMUERZO
                  </span>
                  <p className="mt-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    {plan?.lunch || "—"}
                  </p>
                </div>

                {/* Cena */}
                <div className="rounded-xl border border-emerald-900/10 bg-emerald-50/50 p-2.5 transition-colors dark:border-emerald-500/20 dark:bg-emerald-950/30">
                  <span className="block text-[10px] font-bold tracking-wider text-emerald-800 dark:text-emerald-400">
                    CENA
                  </span>
                  <p className="mt-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    {plan?.dinner || "—"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}