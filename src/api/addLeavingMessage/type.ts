export type AddLeaveMessageItemType = {
    pid: number;
    time: string;
    content: string;
    replycontent: string;
    articleid:number,
    replyid:number,
    name:string,
    email:string,
    replyMessageId:number
  };
  export type addLeavingMessageResult={
    mag:string,
    status:number
  }