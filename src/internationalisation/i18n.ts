import i18next, {
    TFunction
} from 'i18next';

import _en from "./language/en";

export default async function initialise(): Promise<TFunction> {
    return await i18next.init({
        interpolation: { escapeValue: true },
        lng: 'en',
        resources: {
            en: {
                translation: _en
            }
        }
    });
}
