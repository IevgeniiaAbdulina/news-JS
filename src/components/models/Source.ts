// eslint-disable-next-line import/extensions, import/no-unresolved
import { Identifiable } from "./Identifiable";
// eslint-disable-next-line import/extensions, import/no-unresolved
import { ResponseStatus } from "./response";

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