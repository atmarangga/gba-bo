import { Button, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import readingPlanService from '../../../services/readingPlanService';

export default function ReadingPlanSearch() {
    const [isLoading, setLoading] = useState(false);
    const tempData: any[] = [];
    const [data, setAllData] = useState(tempData)

    useEffect(() => {
        getAllReadingPlanData();
    }, []);

    async function getAllReadingPlanData() {
        try {
            setLoading(true)
            const result = await readingPlanService.getAll();
            console.log('result.data :: ', result);
            setAllData(result || []);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    }

    async function deleteReadingPlanData(id: string | number) {
        try {
            setLoading(true);
            const request = { id: Number(id) }
            const result = await readingPlanService.delete(request);
            console.log('result : ', result);
            setLoading(false);
        } catch (err) {
            setLoading(false)
        }
    }


    return (
        <div style={{ padding: 20 }}>
            <h2>Reading Plan List</h2>
            <Table
                key={'table-address'}
                dataSource={data}
                columns={[
                    {
                        title: 'ID',
                        dataIndex: 'id',
                        key: 'id'
                    },
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        key: 'name'
                    },
                    {
                        title: 'Plan Per Day',
                        dataIndex: 'planPerDay',
                        key: 'planPerDay'
                    },
                    {
                        title: 'Edit / Delete',
                        key: 'edit-delete-address-column',
                        render: (text, record) => (
                            <Space size="middle" key={`edit-delete-action ${record}`}>
                                <Button
                                    type={'link'}
                                    key={`rec-edit-action`}
                                    onClick={() => {

                                    }}> Edit</Button>
                                <Button
                                    onClick={(event) => {
                                        console.log('text : ', text);
                                        console.log('record : ', record);
                                        deleteReadingPlanData(record?.id);
                                    }}
                                    type={'link'} key={`rec-delete`}>Delete</Button>
                            </Space>
                        ),
                    },
                ]} />

        </div>
    );
}