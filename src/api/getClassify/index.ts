import requests from '../requests';
import { ClassifyType } from './type';
import type { AxiosResponse } from 'axios';
export const getClassify = async(): Promise<Array<ClassifyType>> => {
  const data = <AxiosResponse<Array<ClassifyType>, any>>await requests({
    url: '/getClassify',
    method: 'get',
  });
  return data.data
};
