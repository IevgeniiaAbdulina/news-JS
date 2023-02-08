/* eslint-disable import/no-unresolved */
import { ArticleData } from 'src/components/data/responseData';
import './news.css';

export default class News {
    draw = (data: ArticleData[]) => {
        const news = this.getNewsData(data);
        const fragment = this.createFragment(news);
        this.renderNews(fragment);
    };

    private createFragment(news: ArticleData[]): DocumentFragment {
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        if (newsItemTemp) {
            news.forEach((item: ArticleData, idx: number) => {
                const newsClone = this.createNewsClone(newsItemTemp, item, idx);
                fragment.append(newsClone);
            });
        }
        return fragment;
    }

    private createNewsClone = (newsItem: Element, item: ArticleData, idx: number): DocumentFragment => {
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        const newsClone = newsItem.content.cloneNode(true);

        if (idx % 2) {
            newsClone.querySelector('.news__item').classList.add('alt');
        }

        newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
            item.urlToImage || 'img/news_placeholder.jpg'
        })`;
        newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
        newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
            .slice(0, 10)
            .split('-')
            .reverse()
            .join('-');

        newsClone.querySelector('.news__description-title').textContent = item.title;
        newsClone.querySelector('.news__description-source').textContent = item.source.name;
        newsClone.querySelector('.news__description-content').textContent = item.description;
        newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

        return newsClone;
    };

    private getNewsData = (data: ArticleData[]) => data.slice(0, 10);

    private renderNews = (fragment: DocumentFragment) => {
        const textNode = document.querySelector('.news');
        if (textNode) {
            textNode.innerHTML = '';
        }

        const newsList = document.querySelector('.news');
        if (newsList) {
            newsList.appendChild(fragment);
        }
    };
}
