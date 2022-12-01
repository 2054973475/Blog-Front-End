import requests from '../requests';
import { UserInfoType } from './type';
import type { AxiosResponse } from 'axios';
export const getInfo = async(): Promise<UserInfoType> => {
  const data = <AxiosResponse<UserInfoType, any>>await requests({
    url: '/getInfo',
    method: 'get',
  });
  return data.data
};
