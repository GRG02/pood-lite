import { Language, SiteContent } from "./types";
import { thaiContent } from "./th";
import { englishContent } from "./en";

export * from "./types";
export { thaiContent } from "./th";
export { englishContent } from "./en";

export const contentMap: Record<Language, SiteContent> = {
  th: thaiContent,
  en: englishContent,
};
