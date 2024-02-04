import storage from "@/utils/storage";
import { IBookInfo } from "@/types/book";

export const isShelf = (bookId: string) => {
    let arr:IBookInfo[] = storage.get('shelf') || [];

    const index = arr.findIndex((item) => item.bookId === bookId);

    if(index !== -1) {
        return true;
    }

    return false;
}

export const setShelf = (value: IBookInfo): string => {
    let arr:IBookInfo[] = storage.get('shelf') || [];
    const index = arr.findIndex((item) => item.bookId === value.bookId);

    if(index !== -1) {
        arr.slice(index, 1);
        storage.set('shelf', arr);
        return '已从书架中移除';
    }

    arr.unshift(value);
    storage.set('shelf', arr);
    return "已加入书架";
}