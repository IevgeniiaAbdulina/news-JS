/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { DrawSourcesData } from '../data/responseData';
import News from './news/news';
import Sources from './sources/sources';
import { News as NewsModel } from '../models/News';

export class AppView {
    news: News;

    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews({ articles = [] }: NewsModel) {
        // const values = data?.articles ? data?.articles : [];
        this.news.draw(articles);
    }

    drawSources(data: DrawSourcesData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
