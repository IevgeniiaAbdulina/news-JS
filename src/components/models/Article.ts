// eslint-disable-next-line import/extensions, import/no-unresolved
import { Identifiable } from "./Identifiable";

interface Author {
  author: string;
}

interface Content {
  content: string;
  description: string;
}

interface Details {
  publishedAt: string;
  source: Identifiable;
  title: string;
}

interface Article extends Author, Content, Details {
  url: string;
  urlToImage: string;
}

export type Articles = Article[];
