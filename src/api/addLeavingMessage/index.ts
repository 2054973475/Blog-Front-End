import requests from '../requests';
import { AddLeaveMessageItemType,addLeavingMessageResult } from './type';
import type { AxiosResponse } from 'axios';
export const addLeavingMessage = async (params: AddLeaveMessageItemType):Promise<addLeavingMessageResult> => {
  const data = <AxiosResponse<addLeavingMessageResult, any>>await requests({
    url: '/addLeavingMessage',
    method: 'post',
    data:params,
  });
  return data.data;
};
