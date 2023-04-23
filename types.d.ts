type Navigation = {
  navigate: (screenName: string, payload?: any) => void;
  setOptions: (object: any) => void;
};

type Meal = {
  id: string;
  categoryIds: string;
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: string;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
  isFavorite: boolean;
};
