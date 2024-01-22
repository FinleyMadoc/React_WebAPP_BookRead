import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Space, Grid, Tabs } from '@/base';

import BookCover from "@/components/bookCover";
import { useRequest } from "@/hooks/useRequest";

import api from '@/pages/home/api';
import { IRanking, IHomeData } from "../home/types";
import { px2rem } from "@/utils/unit";
import styles from './index.module.scss';


const Ranking: React.FC = React.memo(() => {
    const navigate = useNavigate();
    const { data } = useRequest<IHomeData>({ url: api.getHomeData })

    const renderList = (rank: IRanking) => {
        return rank.books.map((book) => (
            <React.Fragment key={book.bookId}>
                
            </React.Fragment>
        ))
    }

    return <>Ranking</>
})

export default Ranking;