import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-2"
    >
      <Globe className="w-4 h-4" />
      <span className="font-semibold text-sm">{language === 'en' ? 'हिन्दी' : 'English'}</span>
    </Button>
  );
};

export default LanguageToggle;
