export type BlogArticleType = {
  id: number;
  title: string;
  classify: string;
  releaseDate: string;
  viewNumber: number;
  tags: Array<string>;
  coverImg: string;
  summary: string;
  content?: string;
  messagesNumber:number
};
export type Params = {
  id: number;
};