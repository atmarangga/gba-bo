import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddGroup from './add';

export default function MasterGroup() {
    return (
        <Routes>
            <Route path={'/'} element={<AddGroup/>} />
            <Route path={'/add'} element={<AddGroup />} />
        </Routes>
    );
}

