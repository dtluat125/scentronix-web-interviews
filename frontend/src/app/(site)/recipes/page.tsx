import { routes } from "@/constants/routes";
import { redirect } from "next/navigation";

export default function RecipesPage() {
  return redirect(`${routes.recipes}/bread-recipe`);
}
