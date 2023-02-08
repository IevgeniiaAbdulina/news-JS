/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { News } from '../models/News';
import { SourceList } from '../models/Source';

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
                this.controller.getNews(e, (data: News) => this.view.drawNews(data))
            );
        this.controller.getSources((data: SourceList) => this.view.drawSources(data));
    }
}

export default App;
