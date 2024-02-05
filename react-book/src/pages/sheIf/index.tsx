import React from "react";

import ShlfNavBar from '@/pages/sheIf/components/NavBar';
import ShelfList from '@/pages/sheIf/components/list';
import createReducer from "@/pages/sheIf/store";
import { useReducer } from "@/store";

const SheIf: React.FC = () => {
    const { reducers } = React.useMemo(() => createReducer('shelf'), []);
    useReducer(reducers);

    return (
        <>
            <ShlfNavBar />
            <ShelfList />
        </>
    )
}

export default SheIf;