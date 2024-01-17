import React from "react";
import { useNavigate } from "react-router-dom";
import { Countdown } from "@taoyage/react-mobile-ui";

import { Card,Grid,Space  } from "@/base";
import BookCover from "@/components/bookCover";
import { useRequest } from "@/hooks/useRequest";
import { IHomeData } from "../../types";
import api from "../../api";
import { px2rem } from "@/utils/unit";
import styles from './index.module.scss';

const time = 1000 * 60 * 60 * 30;

const LimitedRead: React.FC = React.memo(() => {
    const navigate = useNavigate();
    const { data } = useRequest<IHomeData>({ url: api.getHomeData });

    const header = React.useMemo(() => {
        return <div className={styles.headerLeft}>
            <div className={styles.title}>
                限时免费
            </div>    
            <div className={styles.divider}>|</div>
            <Countdown time={time} format="hh:mm:ss" />
        </div>
    }, [])

    const renderContent = () => {
        return <div>content</div>
    }

    return <div className={styles.limited}>
        <Card title={header} headerClassName={styles.header}>
            <Grid columns={4} gap={px2rem(16)}>
                {renderContent()}
            </Grid>
        </Card>
    </div>
})

export default LimitedRead;