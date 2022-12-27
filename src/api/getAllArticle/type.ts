export type BlogArticleItemType = {
  id: number;
  title: string;
  classify: string;
  releaseDate: string;
  viewNumber: number;
  tags: Array<string>;
  coverImg: string;
  summary: string;
  content?: string;
  messagesNumber:number,
};
export type BlogArticleListType={
  data:Array<BlogArticleItemType>,
  total:Number
}
export type Params={
  page?:number;
  pageCount?:number;
}
export type ReqData={
  classify?:string
  tags?:string,
  title?:string
}
