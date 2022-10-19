import requests from '../requests';
import { BlogArticle } from './type';
import type { AxiosResponse } from 'axios';
export const getAllArticle = async(): Promise<Array<BlogArticle>> => {
  const data = <AxiosResponse<Array<BlogArticle>, any>>await requests({
    url: '/getAllArticle',
    method: 'get',
  });
  return data.data
};
