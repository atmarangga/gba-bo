import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddGroup from './add';
import GroupList from './search';

export default function MasterGroup() {
    return (
        <Routes>
            <Route path={'/'} element={<GroupList />} />
            <Route path={'/add'} element={<AddGroup />} />
        </Routes>
    );
}

