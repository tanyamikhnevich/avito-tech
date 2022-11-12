export interface GetByIdResponse {
  by: string;
  id: number;
  kids: Array<number>;
  parent: number;
  time: number;
  text: string;
  type: string;
}
