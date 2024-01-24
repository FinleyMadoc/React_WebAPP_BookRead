import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar, SearchBarRef } from '@taoyage/react-mobile-ui';
import { removeUrlParams, setUrlParams } from '@/utils/url';
import { setHistory } from '@/pages/search/utils';
import { useAppSelector, useAppDispatch } from '@/store';
import { setSearchKeyword, setSearchMode } from '@/store/slice/searchSlice';

const BookSearchBar: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const searchKeyword = useAppSelector<string>((state) => state.search.searchKeyword);
    const searchRef = React.useRef<SearchBarRef>(null);

    const onCancel = () => {
        navigate(-1);
    };
    const onSearch = (value:string) => {
        if(!value) return;
        setHistory(value);
        setUrlParams([['keyword', value]],  '/search');
        dispatch(setSearchKeyword(value))
    }

    const onClear = () => {
        removeUrlParams(['keyword'], '/search');
        dispatch(setSearchKeyword(''));
        dispatch(setSearchMode(false));
    }

    const onChange = (value:string) => {
        if(!value) {
            removeUrlParams(['keyword'], '/search');
            dispatch(setSearchKeyword(''));
            dispatch(setSearchMode(false));
        }
    }

    React.useEffect(() => {
        searchRef.current?.focus();
    }, []);

    React.useEffect(() => {
        if(searchKeyword) {
            dispatch(setSearchMode(true));
        }
    }, [dispatch, searchKeyword])

    return <SearchBar 
        value={searchKeyword}
        ref={searchRef}
        placeholder='搜索书名、作者'
        showCancel
        onCancel={onCancel}
        onSearch={onSearch}
        onClear={onClear}
        onChange={onChange}
    />
}

export default BookSearchBar;