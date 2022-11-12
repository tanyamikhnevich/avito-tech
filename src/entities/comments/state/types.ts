import { NewsTypes } from "..";

export type INewsItem = NewsTypes.GetByIdResponse;

export interface INewsState {
  news: INewsItem[];
  displayedNewsItem: INewsItem | null;
}
