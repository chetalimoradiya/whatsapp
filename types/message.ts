export interface Message {
 id:number;

  user: string;

  text: string;

  room: string;

  time: string;

  replyTo?: string;
  
  type:
    | "user"
    | "system";

  seen?: boolean;

}