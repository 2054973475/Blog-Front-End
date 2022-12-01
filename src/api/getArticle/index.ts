import requests from '../requests';
import { BlogArticleType, Params } from './type';
import type { AxiosResponse } from 'axios';
export const getArticle = async (params: Params): Promise<Array<BlogArticleType>> => {
  const data = <AxiosResponse<Array<BlogArticleType>, any>>await requests({
    url: '/getArticle',
    method: 'get',
    params,
  });
  return data.data;
};
