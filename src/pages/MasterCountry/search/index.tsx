import React, { useMemo, useState } from 'react';
import { Space, Table, Button } from 'antd';
import EditCountryForm from '../edit'
import AddCountryForm from '../add';
import { TableContext } from '../../../context';

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
    const [selectedCountry, setSelectedCountry] = useState({ id: '', name: '', phoneCode: '' });
    console.log('selectedCountry :: ', selectedCountry)
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
                {useMemo(() => <Table
                    key={'table-country'}
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
                            key: 'edit-delete-country-column',
                            render: (text, record) => (
                                <Space size="middle" key={'edit-delete-action'}>
                                    <Button
                                        type={'link'}
                                        key={`${record?.id}-edit-action`}
                                        onClick={() => {
                                            setSelectedCountry(record)
                                            console.log('record : ', record)
                                        }}> Edit</Button>
                                    <Button
                                        type={'link'} key={`${record?.id}-delete`}>Delete</Button>
                                </Space>
                            ),
                        },
                    ]} />, [])}

            </div>
        </TableContext.Provider>

    );
}