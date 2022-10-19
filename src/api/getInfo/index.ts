import requests from '../requests';
import { UserInfo } from './type';
import type { AxiosResponse } from 'axios';
export const getInfo = async(): Promise<UserInfo> => {
  const data = <AxiosResponse<UserInfo, any>>await requests({
    url: '/getInfo',
    method: 'get',
  });
  return data.data
};
