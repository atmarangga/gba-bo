import React, { useEffect, useState } from 'react';
import { Space, Table, Button } from 'antd';
import EditCountryForm from '../edit'
import AddCountryForm from '../add';
import { TableContext } from '../../../context';
import CountryService from '../../../services/countryService';

interface MasterCountryData {
    id: string;
    phoneCode: string;
    name: string;
}
export default function MasterCountryListing() {
    const [selectedCountry, setSelectedCountry] = useState({ id: '', name: '', phoneCode: '' });
    const [data, setAllData] = useState([])
    useEffect(() => {
        asyncCallService();
    }, [])

    const asyncCallService = async () => {
        const getData = await CountryService.getAll();
        setAllData(getData)
    }

    const handleDelete = async (data: MasterCountryData) => {
        await CountryService.delete(data)
    }

    return (
        <TableContext.Provider value={selectedCountry}>
            <div style={{ padding: 20 }}>
                <h2>Country Data</h2>

                <div style={{ marginTop: 20, marginBottom: 20 }}>
                    {<TableContext.Consumer>
                        {selectedData =>
                        (selectedCountry && selectedCountry?.id !== '' ?
                            <EditCountryForm data={selectedData} />
                            :
                            <AddCountryForm />)
                        }
                    </TableContext.Consumer>}
                </div>
                <Table
                    
                    key={'table-country'}
                    dataSource={data}
                    columns={[
                        {
                            title: 'ID',
                            dataIndex: 'id',
                            key: 'id'
                        },
                        {
                            title: 'Country Name',
                            dataIndex: 'name',
                            key: 'name'
                        },
                        {
                            title: 'Phone Code',
                            dataIndex: 'phoneCode',
                            key: 'phoneCode'
                        },
                        {
                            title: 'Edit / Delete',
                            key: 'edit-delete-country-column',
                            render: (text, record) => (
                                <Space size="middle" key={'edit-delete-action'}>
                                    <Button
                                        type={'link'}
                                        key={`rec-edit-action`}
                                        onClick={() => {
                                            setSelectedCountry(record)
                                            console.log('record : ', record)
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
        </TableContext.Provider>

    );
}