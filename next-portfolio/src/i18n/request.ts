import { getRequestConfig } from 'next-intl/server';

const locales = ['es', 'en'] as const;
const defaultLocale = 'es';

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale =
    locale && (locales as readonly string[]).includes(locale)
      ? locale
      : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default
  };
});
