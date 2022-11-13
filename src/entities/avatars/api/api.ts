import axios, { AxiosResponse } from "axios";
import { AvatarTypes } from ".";

export const getAvatar = (): Promise<
  AxiosResponse<AvatarTypes.GetAvaResponse>
> => {
  return axios.get<AvatarTypes.GetAvaResponse>(
    `https://api.thecatapi.com/v1/images/search`
  );
};
