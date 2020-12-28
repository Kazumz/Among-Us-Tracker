type ReturnType = any;
type Method = 'PUT' | 'POST' | 'DEL' | 'GET';
type DataType = {};

export async function post(url: string, data: DataType): Promise<ReturnType> {
    return await performFetch(url, 'POST', data);
}

export async function get(url: string): Promise<ReturnType> {
    return await performFetch(url, 'GET');
}

async function performFetch(url: string, method: Method, data?: DataType): Promise<ReturnType> {
    try {
        const response: Response = await fetch(url, {
            method: method,
            body: data !== null && data !== undefined ? JSON.stringify(data) : undefined,
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const textResponse = await response.text();
        const deserialisedResponse: ReturnType = textResponse !== null && textResponse !== undefined ? JSON.parse(textResponse) : undefined;
        if (!response.ok) {
            throw new Error(`An error occurred during the ${method} to ${url} with body ${data !== null && data !== undefined ? JSON.stringify(data) : ''}. Returned ${response.status} with text ${response.statusText}.`)
        }

        console.info(`HttpUtils.performFetch: ${textResponse}`);
        return deserialisedResponse;
    }
    catch (e) {
        const error: Error = e;
        console.error(`HttpUtils.performFetch.error: ${error.message}`);

        throw e;
    }
}