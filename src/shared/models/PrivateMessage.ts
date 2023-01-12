import {Message} from "./Message";

export interface PrivateMessage extends Message {
    to: number
}