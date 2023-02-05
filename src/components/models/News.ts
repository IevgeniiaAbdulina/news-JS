// eslint-disable-next-line import/extensions, import/no-unresolved
import { Articles } from './Article';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { ResponseStatus } from './Response';

export interface News {
    status: ResponseStatus;
    articles: Articles;
}