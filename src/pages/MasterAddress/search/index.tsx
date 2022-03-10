import React, { useEffect, useState } from 'react';
import { Space, Table, Button } from 'antd';
import { BranchTableContext } from '../../../context';
import adddressService, { AddressDeleteRequest } from '../../../services/addressService';
import AddAddressForm from '../add';
import EditAddressForm from '../edit';
import addressService from '../../../services/addressService';

export default function MasterAddressListing() {
    const [selectedCountry, setSelectedBranch] = useState({ id: '', name: '' });
    const [data, setAllData] = useState([])
    useEffect(() => {
        asyncCallService();
    }, [])
    const asyncCallService = async () => {
        const getData = await adddressService.getAll();
        setAllData(getData)
    }



    const handleDelete = async (data: AddressDeleteRequest) => {
        await addressService.delete(data);
        await asyncCallService();
    }

    return (
        <BranchTableContext.Provider value={selectedCountry}>
            <div style={{ padding: 20 }}>
                <h2>Address Data</h2>

                <div style={{ marginTop: 20, marginBottom: 20 }}>
                    {<BranchTableContext.Consumer>
                        {selectedData =>
                        (selectedCountry && selectedCountry?.id !== '' ?
                            <EditAddressForm data={selectedData} onComplete={asyncCallService} />
                            :
                            <AddAddressForm onComplete={asyncCallService
                            } />)
                        }
                    </BranchTableContext.Consumer>}
                </div>
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
                            title: 'Address',
                            dataIndex: 'address',
                            key: 'address'
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