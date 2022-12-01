import requests from '../requests';
import { CarouselType } from './type';
import type { AxiosResponse } from 'axios';
export const getCarousel = async(): Promise<Array<CarouselType>> => {
  const data = <AxiosResponse<Array<CarouselType>, any>>await requests({
    url: '/getCarousel',
    method: 'get',
  });
  return data.data
};
