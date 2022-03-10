import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MasterSearch from './search';

export default function MasterBranch() {
    return (
        <Routes>
            <Route path={'/'} element={<MasterSearch />} />
        </Routes>
    );
}

