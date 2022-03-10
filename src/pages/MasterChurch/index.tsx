import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MasterCountrySearch from './search';

export default function MasterChurch() {
    return (
        <Routes>
            <Route path={'/'} element={<MasterCountrySearch/>} />
        </Routes>
    );
}

