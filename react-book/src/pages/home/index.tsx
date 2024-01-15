import React from "react";
import Header from "./components/header";
import ErrorBlock from "@/base/error-block";
import Loading from "@/components/loading";
import styles from './index.module.scss';
import { useRequest } from "@/hooks/useRequest";
import api from "./api";

const Home: React.FC = () => {
    const {data, error, response} = useRequest<any>({url: api.getHomeData});
    console.log(data, error, response);

    if(error) {
        return <ErrorBlock />
    }

    if(!data) {
        return <Loading />
    }
    
    return (
        <div className={styles.home}>
            <Header/>
            Home
            
        </div>
    )
    
}

export default Home;