import { CommentsTypes } from "..";

export type IComment = CommentsTypes.GetByIdResponse;

export interface ICommentsState {
  comments: Record<string, IComment[]>;
}

export interface GetByIdActionReturnT {
  id: number;
  comments: IComment[];
}
