import { api } from "shared/api/api";
import { AxiosResponse } from "axios";
import { CommentsTypes } from ".";

export const getById = (
  id: number
): Promise<AxiosResponse<CommentsTypes.GetByIdResponse>> => {
  return api.get<CommentsTypes.GetByIdResponse>(
    `/item/${id}.json?print=pretty`
  );
};
