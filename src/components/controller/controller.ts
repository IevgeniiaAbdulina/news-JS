// eslint-disable-next-line import/extensions, import/no-unresolved
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data: any) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event & { target: Element }, callback: () => void) {
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
