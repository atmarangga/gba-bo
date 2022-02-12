import React, { useMemo, useState } from 'react';
import { Space, Table } from 'antd';
import EditCountryForm from '../edit'
import AddCountryForm from '../add';
const mockCountry = [
    {
        id: '1',
        name: 'Indonesia',
        phoneCode: '62'
    },
    {
        id: '2',
        name: 'Indonesia',
        phoneCode: '62'
    },
    {
        id: '3',
        name: 'Indonesia',
        phoneCode: '62'
    }
]


export default function MasterCountryListing() {
    const [selectedCountry, setSelectedCountry] = useState({});


    return (
        <>
            <div style={{ padding: 20 }}>
                <h2>Country Data</h2>

                <div style={{ marginTop: 20, marginBottom: 20 }}>
                    {selectedCountry.toString() !== '{}' ? <AddCountryForm /> : <EditCountryForm />}
                </div>

                {useMemo(() => <Table
                    dataSource={mockCountry}
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
                            key: 'edit-delete-country',
                            render: (text, record) => (
                                <Space size="middle">
                                    <a onClick={() => {
                                        setSelectedCountry(record)
                                        console.log('record : ', record)
                                    }}> Edit</a>
                                    <a>Delete</a>
                                </Space>
                            ),
                        },
                    ]} />, [])}

            </div>

        </>
    );
}