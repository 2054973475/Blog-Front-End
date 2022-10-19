export type BlogArticle = {
  id: number;
  title: string;
  classify: string;
  releaseDate: string;
  viewNumber: number;
  tags: Array<string>;
  coverImg: string;
  summary: string;
  content?: string;
};
export type Params = {
  id: number;
};