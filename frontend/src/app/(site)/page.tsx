import { routes } from "@/constants/routes";
import { redirect } from "next/navigation";

export default function HomePage() {
  return redirect(routes.recipes);
}
