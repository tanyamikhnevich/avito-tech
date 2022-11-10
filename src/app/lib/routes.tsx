import * as Pages from "pages";
import { PUBLIC_PATH } from "shared/config";
import type { IRoute } from "features/routing";

export const publicRoutes: IRoute[] = [
  {
    path: PUBLIC_PATH.NEWS_LIST,
    component: <Pages.NewsList />,
    default: true,
    exact: true,
  },
  { path: PUBLIC_PATH.NEWS_ITEM, component: <Pages.NewsItem />, exact: true },
];
