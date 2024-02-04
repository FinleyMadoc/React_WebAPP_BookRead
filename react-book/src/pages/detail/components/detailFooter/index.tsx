import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cx from 'classnames'

import { Button, Toast } from '@taoyage/react-mobile-ui';
import { useRequest } from '@/hooks/useRequest';
import api from '@/pages/detail/api';
import { IBookInfo } from '@/types/book';

import { isShelf, setShelf } from '@/utils/shelf';

import styles from './index.module.scss';

const DetailFooter: React.FC = React.memo(() => {
    const navigate = useNavigate();
    const id = useParams().id as string;
    const [shelfMode, setShelfMode] = React.useState<boolean>(isShelf(id));
    const { data } = useRequest<IBookInfo>({ url: api.getBook(id) })

    const onRead = () => {
        navigate(`/book/${id}/1`)
    }

    const onShelf = () => {
        const msg = setShelf(data!);
        Toast.show(msg);
        setShelfMode(!shelfMode);
    }

    return <div className={styles.footer}>
        <Button block color="primary" onClick={onRead}>开始阅读</Button>
        <div className={cx(styles.icon, {[styles.active]:shelfMode })} onClick={onShelf}>
            <i className="icon-book"/>
            <p>加入书架</p>
        </div>
    </div>
})

export default DetailFooter;