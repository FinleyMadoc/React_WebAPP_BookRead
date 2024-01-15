import React from "react";
import Header from "./components/header";

import styles from './index.module.scss';
import { useRequest } from "@/hooks/useRequest";
import api from "./api";

const Home: React.FC = () => {
    const {data, error, response} = useRequest<any>({url: api.getHomeData});
    console.log(data, error, response);

    if(error) {
        return <>error block</>
    }

    if(!data) {
        return <>loading block</>
    }
    
    return (
        <div className={styles.home}>
            <Header/>
            Home
        </div>
    )
    
}

export default Home;