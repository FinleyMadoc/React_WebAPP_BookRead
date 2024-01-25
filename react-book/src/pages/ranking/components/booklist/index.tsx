import React from "react";

import styles from './index.module.scss';

interface RankingBookListProps {
    gender: 'male' | 'female';
    id: string;
}

const RankingBookList: React.FC<RankingBookListProps> = React.memo(() => {
    return <div className={styles.RankingBookList}>bookList</div>
})

export default RankingBookList;