import requests from '../requests';
import { LeaveMessageItemType, Params } from './type';
import type { AxiosResponse } from 'axios';
export const getLeavingMessage = async (params: Params): Promise<Array<LeaveMessageItemType>> => {
  const data = <AxiosResponse<Array<LeaveMessageItemType>, any>>await requests({
    url: '/getLeavingMessage',
    method: 'get',
    params,
  });
  return data.data;
};
