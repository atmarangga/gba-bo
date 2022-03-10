import React, { useEffect, useState } from 'react';
import { Space, Table, Button } from 'antd';
import { BranchTableContext } from '../../../context';
import AddMasterChurchForm from '../add';
import EditMasterChurch from '../edit';
import churchService, { ChurchDeleteRequest } from '../../../services/churchService';

export default function MasterChurchListing() {
    const [selectedChurch, setSelectedChurch] = useState({ id: '', name: '' });
    const [data, setAllData] = useState([])
    useEffect(() => {
        asyncCallService();
    }, [])
    const asyncCallService = async () => {
        const getData = await churchService.getAll();
        setAllData(getData)
    }



    const handleDelete = async (data: ChurchDeleteRequest) => {
        await churchService.delete(data);
        await asyncCallService();
    }

    return (
        <BranchTableContext.Provider value={selectedChurch}>
            <div style={{ padding: 20 }}>
                <h2>Address Data</h2>

                <div style={{ marginTop: 20, marginBottom: 20 }}>
                    {<BranchTableContext.Consumer>
                        {selectedData =>
                        (selectedChurch && selectedChurch?.id !== '' ?
                            <EditMasterChurch data={selectedData} onComplete={asyncCallService} />
                            :
                            <AddMasterChurchForm onComplete={asyncCallService
                            } />)
                        }
                    </BranchTableContext.Consumer>}
                </div>
                <Table
                    key={'table-church'}
                    dataSource={data}
                    columns={[
                        {
                            title: 'ID',
                            dataIndex: 'id',
                            key: 'id'
                        },
                        {
                            title: 'Church',
                            dataIndex: 'name',
                            key: 'name'
                        },
                        {
                            title: 'Edit / Delete',
                            key: 'edit-delete-name-column',
                            render: (text, record) => (
                                <Space size="middle" key={'edit-delete-action'}>
                                    <Button
                                        type={'link'}
                                        key={`rec-edit-action`}
                                        onClick={() => {
                                            setSelectedChurch(record)
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

            </div>
        </BranchTableContext.Provider>
    );
}