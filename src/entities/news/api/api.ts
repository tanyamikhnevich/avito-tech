import { AxiosResponse } from "axios";

import { NewsTypes } from ".";
import { api } from "shared/api/api";

export const getById = (
  id: number
): Promise<AxiosResponse<NewsTypes.GetByIdResponse>> => {
  return api.get<NewsTypes.GetByIdResponse>(`/item/${id}.json?print=pretty`);
};

export const getNewsIds = (): Promise<
  AxiosResponse<NewsTypes.GetNewsIdsResponse>
> => {
  return api.get<NewsTypes.GetNewsIdsResponse>("/newstories.json?print=pretty");
};
