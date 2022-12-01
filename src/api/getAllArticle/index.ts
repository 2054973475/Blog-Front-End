import requests from '../requests';
import { BlogArticleListType,Params,ReqData } from './type';
import type { AxiosResponse } from 'axios';
export const getAllArticle = async(params:Params,reqData:ReqData={}): Promise<BlogArticleListType> => {
  const data = <AxiosResponse<BlogArticleListType, any>>await requests({
    url: '/getAllArticle',
    method: 'post',
    params,
    data:reqData
  });
  return data.data
};
