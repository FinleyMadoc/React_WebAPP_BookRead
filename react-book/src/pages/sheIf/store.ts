import { combineReducers, ActionCreatorWithPayload, createAction } from "@reduxjs/toolkit";
import { createTempSlice } from "@/store";
import { IBookInfo } from "@/types/book";
import { AppThunk } from "@/store/store";

interface IActions {
    setEditMode: ActionCreatorWithPayload<boolean, string>;
    setSelectedBook: (book: IBookInfo) => AppThunk<void>;
}

export const shelfAction: IActions = {
    setEditMode: createAction('INIT'),
    setSelectedBook: () => () => {}
}

const createReducer = (key: string) => {
    const {set: setEditMode, reducer: editMode} = createTempSlice<boolean>('editMode', false, key);
    const {set: setSelectedBook, reducer: selectedBook} = createTempSlice<IBookInfo[]>('selectedBook', [], key);

    shelfAction.setEditMode = setEditMode;
    shelfAction.setSelectedBook = (book:IBookInfo) => (dispatch, getState) => {
        const state = getState();
        let books = [...state.shelf.selectedBook];
        const index = books.findIndex((item) => book.bookId === item.bookId);
        if(index !== -1) {
            books.splice(index, 1);
        }else {
            books.push(book);
        }
        dispatch(setSelectedBook(books));
    }

    return {
        reducers: {
            [key]:combineReducers({
                editMode,
                selectedBook
            })
        }
    }
}

export default createReducer;