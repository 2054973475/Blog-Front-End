import requests from '../requests';
import { Classify } from './type';
import type { AxiosResponse } from 'axios';
export const getClassify = async(): Promise<Array<Classify>> => {
  const data = <AxiosResponse<Array<Classify>, any>>await requests({
    url: '/getClassify',
    method: 'get',
  });
  return data.data
};
