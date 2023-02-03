/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import AppController from '../controller/controller';
import { DrawNewsData, DrawSourcesData } from '../data/responseData';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;

    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        document
            .querySelector('.sources')
            .addEventListener('click', (e: Event & { target: Element }) =>
                this.controller.getNews(e, (data: DrawNewsData) => this.view.drawNews(data))
            );
        this.controller.getSources((data: DrawSourcesData) => this.view.drawSources(data));
    }
}

export default App;
