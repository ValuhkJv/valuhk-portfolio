import { redirect } from "next/navigation";

// The portfolio now lives at "/"; keep old /portfolio links working.
export default function PortfolioRedirect() {
  redirect("/");
}
