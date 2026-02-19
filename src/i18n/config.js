import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importe tes fichiers de traduction
import frTranslation from './locales/fr.json';
import enTranslation from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'fr',
    fallbackLng: 'fr',
    resources: {
      fr: { translation: frTranslation },
      en: { translation: enTranslation }
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;