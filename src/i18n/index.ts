import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'User Dashboard': 'User Dashboard',
      'Search by name or email': 'Search by name or email',
      'All Companies': 'All Companies',
      'All Locations': 'All Locations',
      'User List with Pagination': 'User List with Pagination',
      'User Analytics Chart': 'User Analytics Chart',
      'User Detail Modal': 'User Detail Modal',
      'Toggle dark mode': 'Toggle dark mode',
    },
  },
  // Add more languages here
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 