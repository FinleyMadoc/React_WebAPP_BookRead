import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import cx from 'classnames';
import { Popup } from "@/base";

import api from '@/pages/chapter/api';

import { useRequest } from "@/hooks/useRequest";
import { useAppSelector } from "@/store";
import { IBookInfo } from "@/types/book";

import styles from './index.module.scss';

const ProgressBar: React.FC = React.memo(() => {
    const {bookId, chapterId} = useParams();
    const navigate = useNavigate();
    const [currentPageIndex, setCurrentPageIndex] = React.useState<number>(Number(chapterId));

    const progressBarVisible = useAppSelector<boolean>((state) => state.chapter.progressBarVisible);
    console.log("progressBarVisible", progressBarVisible);
    
    const {data} = useRequest<IBookInfo>({url: api.getBook(bookId as string)});

    const isFirst = currentPageIndex === 1;
    const isLast = currentPageIndex === data?.chapters!.length;

    const onPrev = () => {
        if(isFirst) return;
        setCurrentPageIndex(currentPageIndex - 1);
        navigate(`/book/${bookId}/${currentPageIndex-1}`, {replace: true});
    }

    const onNext = () => {
        if(isLast) return;
        setCurrentPageIndex(currentPageIndex + 1);
        navigate(`/book/${bookId}/${currentPageIndex+1}`, {replace: true});
    }   

    return (  
        <Popup position="bottom" visible={progressBarVisible} mask={false}>
            <div className={styles.progress}>
                <div className={styles.progressVal}>
                    {`chapter${currentPageIndex}`}
                </div>
                <div className={styles.progressBar}>
                    <div className={cx(styles.prev, {[styles.disable]:isFirst})} onClick={onPrev}>
                        上一章
                    </div>
                    <div className={styles.slider}>slider</div>
                    <div className={cx(styles.next, {[styles.disable]:isLast})} onClick={onNext}>
                        下一章
                    </div>
                </div>
            </div>
        </Popup>
    )
})

export default ProgressBar;