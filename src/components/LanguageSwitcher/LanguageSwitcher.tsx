import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: "en", label: t("language.en") },
    { code: "ua", label: t("language.ua") },
  ];

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  // Ensure we have a valid language code
  const currentLanguage = i18n.language === "en" || i18n.language === "ua" ? i18n.language : "en";

  return (
    <Select value={currentLanguage} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[140px] bg-transparent border-white/30 text-white hover:bg-white/10 focus-visible:ring-white/50">
        <Languages className="size-4 mr-2" />
        <SelectValue placeholder={t("language.en")} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;

