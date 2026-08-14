"use client";

import { useState } from "react";
import { shoppingList } from "@/lib/mock-data";

function itemKey(category: string, item: string) {
  return `${category}:${item}`;
}

export function ShoppingListView() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  function toggleItem(key: string) {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  return (
    <section aria-labelledby="shopping-list-heading">
      <div className="mb-5">
        <h2
          id="shopping-list-heading"
          className="text-lg font-semibold text-sage-700 sm:text-xl"
        >
          Lista de la Compra
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          Ingredientes agrupados por categoría para esta semana.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {shoppingList.map((group) => (
          <article
            key={group.category}
            className="rounded-2xl border border-sage-200 bg-white p-5 shadow-sm"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-sage-600">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => {
                const key = itemKey(group.category, item);
                const isChecked = checkedItems.has(key);

                return (
                  <li key={key}>
                    <label className="flex cursor-pointer items-center gap-3 text-sm">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleItem(key)}
                        className="h-4 w-4 shrink-0 rounded border-sage-300 text-sage-600 focus:ring-sage-500"
                      />
                      <span
                        className={
                          isChecked
                            ? "text-gray-400 line-through"
                            : "text-zinc-700"
                        }
                      >
                        {item}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
