// @ts-ignore
import {v4 as uuid} from 'uuid/dist';

export interface IMenu {
    id: uuid
    title: string;
    description: string;
    icon?: string;
    path: string;
}

export interface IMenuData {
    data:IMenu
}

export interface IUser {
    API: string;
    Description: string;
    HTTPS: string;
    Cors: string;
    Link: string;
    Category: string;
}

export interface IResponse {
    count: number;
    entries: Array<IUser>
}
