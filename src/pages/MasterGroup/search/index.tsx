import { Button, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { IS_DEV } from '../../../constants/config';
import groupService from '../../../services/groupService'

export default function SearchMasterGroup() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getAllGroupData();
    }, []);

    async function getAllGroupData() {
        try {
            setLoading(true)
            if (IS_DEV) {

            } else {
                const dataReturned = await groupService.getAll();
                setData(dataReturned);
            }

        } catch (err) {
            setLoading(false)
        }
    }

    async function handleDelete(record: any) {
        try {
            setLoading(true);
            console.log('record : ', record);
            setLoading(false);
        } catch (err) {
            setLoading(false)
        }
    }

    return (<div style={{ padding: 20 }}>
        <h2>Group List</h2>
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
                    title: 'Group Name',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: 'Reading Plan',
                    render: (data) => {
                        return (
                            <div>{data?.readingPlanEntity?.name}</div>)
                    }
                },

                {
                    title: 'Edit / Delete',
                    key: 'edit-delete-address-column',
                    render: (text, record) => (
                        <Space size="middle" key={'edit-delete-action'}>
                            <Button
                                type={'link'}
                                key={`rec-edit-action`}
                                onClick={() => {
                                    // setSelectedBranch(record)
                                }}> Edit</Button>
                            <Button
                                onClick={() => {
                                    handleDelete(record)
                                }}
                                type={'link'} key={`rec-delete`}>Delete</Button>
                        </Space>
                    ),
                },
            ]} />
    </div>)
}