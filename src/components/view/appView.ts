/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// import { DrawSourcesData } from '../data/responseData';
import News from './news/news';
import Sources from './sources/sources';
import { News as NewsModel } from '../models/News';
import { SourceList } from '../models/Source';

export class AppView {
    news: News;

    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews({ articles = [] }: NewsModel) {
        this.news.draw(articles);
    }

    drawSources({ sources = [] }: SourceList) {
        this.sources.draw(sources);
    }
}

export default AppView;
