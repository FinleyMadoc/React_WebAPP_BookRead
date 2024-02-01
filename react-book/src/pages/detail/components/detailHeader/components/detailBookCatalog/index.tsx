import React from 'react';

import { useParams } from 'react-router-dom';
import { Space, Popup } from '@/base';
// import { Popup } from '@taoyage/react-mobile-ui';
import { useRequest } from '@/hooks/useRequest';
import api from '@/pages/detail/api';
import { IBookInfo } from '@/types/book';
import BookCatalogList from '@/components/bookCatalogList';

import styles from './index.module.scss';

const DetailBookCatalog: React.FC = React.memo(() => {
    const [visible, setVisible] = React.useState<boolean>(false);

    const id = useParams().id as string;
    const { data } = useRequest<IBookInfo>({ url: api.getBook(id) });

    const threeChapters = React.useMemo(() => {
        return data!.chapters!.slice(-3).reverse();
    }, [data]);

    const onShow = () => {
        setVisible(true);
    }

    const onCancel = () => {
        setVisible(false);
    }

    return <div className={ styles.catalog }>
        <Space direction='vertical'>
            {
                threeChapters.map((name: string) => (
                    <div className={styles.catalogItem} key={name}>
                        {name}
                    </div>
                ))
            }
        </Space>

        <div className={styles.catalogBtn} onClick={onShow}>
            <div className={styles.icon}>
                <i className="icon-menu" />
            </div>
            <div>
                目录
            </div>
        </div>

        <Popup visible={visible} onMaskClick={onCancel}>
            <BookCatalogList 
                catalogList={data!.chapters!}
                author={data!.author}
                title={data!.title}
                imgUrl={data!.coverImg}
                bookId={data!.bookId}
            />
        </Popup>
    </div>
})

export default DetailBookCatalog;