import requests from '../requests';
import { LinkType } from './type';
import type { AxiosResponse } from 'axios';
export const getLinks = async(): Promise<Array<LinkType>> => {
  const data = <AxiosResponse<Array<LinkType>, any>>await requests({
    url: '/getLinks',
    method: 'get',
  });
  return data.data
};
