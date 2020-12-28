import i18next from 'i18next';

const URN: string = 'urn';

export function addSessionIdToUrl(value: string): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    urlParams.delete(URN);
    urlParams.set(URN, value);

    const newUrl = `${window.location.origin}?${urlParams.toString()}`;

    console.log(newUrl);
    window.history.replaceState(null, i18next.t('app.title'), newUrl);
}

export function getSessionIdFromUrl(): string | undefined {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has(URN)) {
        const sessionId: string | null = urlParams.get(URN)
        return sessionId !== null && sessionId !== undefined ? sessionId : undefined;
    }

    return undefined;
}