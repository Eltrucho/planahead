export type MealSlot = {
  label: string;
  dish: string;
};

export type DayMenu = {
  day: string;
  shortDay: string;
  lunch: string;
  dinner: string;
};

export const weeklyMenu: DayMenu[] = [
  {
    day: "Lunes",
    shortDay: "Lun",
    lunch: "Ensalada César",
    dinner: "Pollo al horno",
  },
  {
    day: "Martes",
    shortDay: "Mar",
    lunch: "Sopa de verduras",
    dinner: "Pasta carbonara",
  },
  {
    day: "Miércoles",
    shortDay: "Mié",
    lunch: "Wrap de pollo",
    dinner: "Salmón a la plancha",
  },
  {
    day: "Jueves",
    shortDay: "Jue",
    lunch: "Quinoa con aguacate",
    dinner: "Tortilla española",
  },
  {
    day: "Viernes",
    shortDay: "Vie",
    lunch: "Bowl mediterráneo",
    dinner: "Pizza casera",
  },
  {
    day: "Sábado",
    shortDay: "Sáb",
    lunch: "Paella de marisco",
    dinner: "Hamburguesas caseras",
  },
  {
    day: "Domingo",
    shortDay: "Dom",
    lunch: "Asado familiar",
    dinner: "Crema de calabaza",
  },
];

export const shoppingList = [
  { category: "Verduras", items: ["Lechuga romana", "Tomates", "Calabaza", "Aguacate"] },
  { category: "Proteínas", items: ["Pollo", "Salmón", "Huevos", "Carne picada"] },
  { category: "Despensa", items: ["Pasta", "Arroz", "Aceite de oliva", "Pan"] },
  { category: "Lácteos", items: ["Queso parmesano", "Nata", "Mantequilla"] },
];
