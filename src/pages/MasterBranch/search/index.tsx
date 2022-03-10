import React, { useEffect, useState } from 'react';
import { Space, Table, Button } from 'antd';
import { BranchTableContext } from '../../../context';
import BranchService, { BranchDeleteRequest } from '../../../services/branchService';
import EditBranchForm from '../edit'
import AddBranchForm from '../add';
interface MasterCountryData {
    id: string;
    phoneCode: string;
    name: string;
}
export default function MasterCountryListing() {
    const [selectedCountry, setSelectedBranch] = useState({ id: '', name: '' });
    const [data, setAllData] = useState([])
    useEffect(() => {
        asyncCallService();
    }, [])
    const asyncCallService = async () => {
        const getData = await BranchService.getAll();
        setAllData(getData)
    }



    const handleDelete = async (data: BranchDeleteRequest) => {
        await BranchService.delete(data);
        await asyncCallService();
    }

    return (
        <BranchTableContext.Provider value={selectedCountry}>
            <div style={{ padding: 20 }}>
                <h2>Branch Data</h2>

                <div style={{ marginTop: 20, marginBottom: 20 }}>
                    {<BranchTableContext.Consumer>
                        {selectedData =>
                        (selectedCountry && selectedCountry?.id !== '' ?
                            <EditBranchForm data={selectedData} onComplete={async () => {
                                const getData = await BranchService.getAll();
                                setAllData(getData)
                            }} />
                            :
                            <AddBranchForm onComplete={async () => {
                                const getData = await BranchService.getAll();
                                setAllData(getData)
                            }} />)
                        }
                    </BranchTableContext.Consumer>}
                </div>
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
                            title: 'Branch Name',
                            dataIndex: 'name',
                            key: 'name'
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
                                            setSelectedBranch(record)
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