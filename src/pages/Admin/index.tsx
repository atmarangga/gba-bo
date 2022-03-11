import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddAdmin from './add'

export default function MasterAddress() {
    return (
        <Routes>
            <Route path={'/'} element={<AddAdmin />} />
        </Routes>
    );
}

