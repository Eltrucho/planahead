import { weeklyMenu } from "@/lib/mock-data";
import { MealSlot } from "./MealSlot";

export function WeeklyMenuGrid() {
  return (
    <section aria-labelledby="weekly-menu-heading">
      <div className="mb-5">
        <h2
          id="weekly-menu-heading"
          className="text-lg font-semibold text-sage-700 sm:text-xl"
        >
          Menú Semanal
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          Planifica tus comidas de la semana de un vistazo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7">
        {weeklyMenu.map((day) => (
          <article
            key={day.day}
            className="flex flex-col gap-3 rounded-2xl border border-sage-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <header className="border-b border-sage-100 pb-2">
              <p className="text-xs font-medium uppercase tracking-wider text-sage-500 sm:hidden">
                {day.shortDay}
              </p>
              <p className="text-base font-semibold text-sage-700">{day.day}</p>
            </header>

            <div className="flex flex-col gap-2">
              <MealSlot label="Almuerzo" dish={day.lunch} />
              <MealSlot label="Cena" dish={day.dinner} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
