import { Button, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { IS_DEV } from '../../../constants/config';
import groupService from '../../../services/groupService'
import userService from '../../../services/userService';

export default function SearchUserRegistered() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getAllUsers();
    }, []);

    async function getAllUsers() {
        try {
            setLoading(true)
            if (IS_DEV) {

            } else {
                const dataReturned = await userService.getAll();
                setData(dataReturned);
            }
            setLoading(false)
        } catch (err) {
            setLoading(false)
        }
    }

    async function handleActivate(record: any) {
        try {
            setLoading(true);
            const { id } = record;
            const result = await userService.activate(id);
            console.log('result ::: ', result);
            setLoading(false);
        } catch (err) {
            setLoading(false)
        }
    }

    return (<div style={{ padding: 20 }}>
        <h2>Unregistered User List</h2>
        <Table
            key={'table-branch'}
            dataSource={data}
            columns={[
                {
                    title: 'ID',
                    dataIndex: 'id',
                    key: 'id'
                },
                {
                    title: 'Full Name',
                    dataIndex: 'fullname',
                    key: 'fullname'
                },
                {
                    title: 'Email',
                    dataIndex: 'email',
                    key: 'email'
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address'
                },
                {
                    title: 'Country',
                    dataIndex: 'country',
                    key: 'country'
                },
                {
                    title: 'Church',
                    dataIndex: 'church',
                    key: 'church'
                },


                {
                    title: 'Action',
                    key: 'action-register-column',
                    render: (text, record) => (
                        <Space size="middle" key={'edit-delete-action'}>
                            <Button
                                type={'link'}
                                key={`rec-edit-action`}
                                onClick={() => {
                                    console.log('id :', record);
                                    handleActivate(record);
                                }}> Activate </Button>
                        </Space>
                    ),
                },
            ]} />
    </div>)
}