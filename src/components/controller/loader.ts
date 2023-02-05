/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { RequestParam } from '../data/requestParam';
import { DrawNewsData } from '../data/responseData';

class Loader {
    public baseLink: string;

    public options: object;

    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(param: RequestParam, callback: (data: DrawNewsData) => void) {
        this.load('GET', param, callback);
    }

    static errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404) {
                console.error(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            }
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl(param: RequestParam) {
        const urlOptions = { ...this.options, ...param.options };
        let url = `${this.baseLink}${param.endpoint}?`;

        Object.entries(urlOptions).forEach(([key, value]) => {
            url += `${key}=${value}&`;
        });

        return url.slice(0, -1);
    }

    private async load(method: string, param: RequestParam, callback: (data: DrawNewsData) => void) {
        try {
            const response = await fetch(this.makeUrl(param), { method });
            Loader.errorHandler(response);
            const data = await response.json();
            callback(data);
        } catch (err) {
            console.error(err);
        }
    }
}

export default Loader;
