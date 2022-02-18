import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MasterCountrySearch from './search';

export default function MasterCountry() {
    return (
        <Routes>
            <Route path={'/'} element={<MasterCountrySearch key={'route-search-master-country'}/>} />
        </Routes>
    );
}

