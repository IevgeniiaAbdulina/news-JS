/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Articles } from './Article';
import { ResponseStatus } from './ResponseStatus';

export interface News {
    status: ResponseStatus;
    articles: Articles;
}
