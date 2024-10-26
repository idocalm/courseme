import { Category } from "@/types/d";

const categories: Record<string, Category> = {
  math: {
    name: "Math",
  },
  "computer-science": {
    name: "Computer Science",
  },
};

export const defaultCategory: Category = {
  name: "Uncategorized",
};

export default categories;
