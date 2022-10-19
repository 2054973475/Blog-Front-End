import requests from '../requests';
import { BlogArticle, Params } from './type';
import type { AxiosResponse } from 'axios';
export const getArticle = async (params: Params): Promise<BlogArticle> => {
  const data = <AxiosResponse<BlogArticle, any>>await requests({
    url: '/getArticle',
    method: 'get',
    params,
  });
  return data.data;
};
