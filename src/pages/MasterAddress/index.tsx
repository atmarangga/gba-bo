import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MasterAddressSearch from './search';

export default function MasterAddress() {
    return (
        <Routes>
            <Route path={'/'} element={<MasterAddressSearch />} />
        </Routes>
    );
}

