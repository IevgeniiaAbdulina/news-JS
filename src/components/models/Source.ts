/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Identifiable } from './Identifiable';
import { ResponseStatus } from './ResponseStatus';

interface NewsSourceBase {
    description: string;
    url: string;
}

interface NewsSourceDetails {
    category: string;
    country: string;
    language: string;
}

interface Source extends NewsSourceDetails, NewsSourceBase, Identifiable {}

export type Sources = Source[];

export interface SourceList {
    status: ResponseStatus;
    sources: Sources;
}
