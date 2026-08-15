export type RecipeMode = "surprise" | "categories" | "leftovers";

export type FoodCategory = {
  id: string;
  label: string;
  items: string[];
};

export const foodCategories: FoodCategory[] = [
  {
    id: "proteins",
    label: "Proteínas",
    items: ["Pollo", "Pescado", "Huevos", "Tofu", "Carne", "Pavo"],
  },
  {
    id: "vegetables",
    label: "Verduras y Hortalizas",
    items: ["Tomate", "Espinacas", "Zanahoria", "Pimiento", "Calabacín", "Brócoli"],
  },
  {
    id: "grains",
    label: "Cereales y Carbohidratos",
    items: ["Arroz", "Pasta", "Pan", "Patata", "Quinoa", "Avena"],
  },
  {
    id: "legumes",
    label: "Legumbres",
    items: ["Lentejas", "Garbanzos", "Alubias", "Guisantes", "Soja"],
  },
  {
    id: "nuts",
    label: "Frutos Secos / Semillas",
    items: ["Almendras", "Nueces", "Avellanas", "Chía", "Sésamo", "Piñones"],
  },
];

export const recipeModes: { id: RecipeMode; label: string; description: string }[] = [
  {
    id: "surprise",
    label: "Sorpréndeme",
    description: "Genera una receta al azar sin filtros.",
  },
  {
    id: "categories",
    label: "Por Categorías",
    description: "Elige grupos alimenticios para personalizar la receta.",
  },
  {
    id: "leftovers",
    label: "Aprovechamiento",
    description: "Usa los ingredientes que ya tienes en casa.",
  },
];
