type MealSlotProps = {
  label: string;
  dish: string;
};

export function MealSlot({ label, dish }: MealSlotProps) {
  return (
    <div className="rounded-lg bg-sage-50 px-3 py-2.5 ring-1 ring-sage-100">
      <p className="text-xs font-medium uppercase tracking-wide text-sage-500">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-medium leading-snug text-zinc-800">
        {dish}
      </p>
    </div>
  );
}
