class Loader {
    baseLink: string;

    options: object;

    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp({ endpoint, options = {} }: any, callback: (payload: object) => void) {
        function internalCallback(payload: object) {
            console.error('No callback for GET response');
            callback(payload);
        }

        this.load('GET', endpoint, internalCallback, options);
    }

    // eslint-disable-next-line class-methods-use-this
    errorHandler(res: Response) {
        // error case
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.error(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: { sources: string }, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.entries(urlOptions).forEach(([key, value]) => {
            url += `${key}=${value}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: (payload: object) => void, options: { sources: string }) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
