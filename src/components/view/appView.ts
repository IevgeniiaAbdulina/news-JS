/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { DrawNewsData, DrawSourcesData } from '../data/responseData';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;

    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DrawNewsData) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DrawSourcesData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
