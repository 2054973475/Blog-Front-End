export type LeaveMessageItemType = {
    id?: number;
    pid: number;
    name: string;
    time: string;
    email: string;
    content: string;
    replyname: string;
    replycontent: string;
    articleid:number,
    replyid:number,
    userid:number,
    replyidentity:number,
    useridentity:number,
  };
  export type Params = {
    id: number;
  };