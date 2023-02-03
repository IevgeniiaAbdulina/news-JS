/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { DrawNewsData, DrawSourcesData } from '../data/responseData';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data: DrawSourcesData) => void) {
        function internalCallback(dataAsObject: object) {
            callback(dataAsObject as DrawSourcesData);
        }

        super.getResp({ endpoint: 'sources' }, internalCallback);
    }

    getNews(e: Event & { target: Element }, callback: (data: DrawNewsData) => void) {
        let { target } = e;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer !== null) {
                    if ((newsContainer as HTMLElement).getAttribute('data-source') !== sourceId && sourceId !== null) {
                        (newsContainer as HTMLElement).setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
            }
            target = target.parentNode as Element;
        }
    }
}

export default AppController;
