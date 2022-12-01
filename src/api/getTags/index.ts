import requests from '../requests';
export const getTags = async()=> {
  const data = await requests({
    url: '/getTags',
    method: 'get',
  });
  return data
};
