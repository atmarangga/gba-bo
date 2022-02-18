import { Form, Card, Input, Space, Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useEffect, useState } from 'react';
import countryService from '../../../services/countryService';

interface MasterCountryData {
    id: string;
    name: string;
    phoneCode: string;
}
interface EditMasterCountryProps {
    data: MasterCountryData
    children?: React.ReactNode
}


export default function EditMasterCountry(props: EditMasterCountryProps) {

    const [isEditing, setEdit] = useState(false);
    const [form] = useForm();
    const [isLoading, setLoading] = useState(false);
    const handleEdit = () => {
        setEdit(true);
    }

    useEffect(() => {
        form.setFieldsValue({
            id: props.data.id,
            name: props.data.name,
            phoneCode: props.data.phoneCode
        });
    })

    async function handleSubmit(data: { name: string, phoneCode: string, id: string }) {
        setLoading(true)
        try {
            await countryService.edit(data)
            setLoading(false);
        } catch (err) {
            console.log('error : ', err)
            setLoading(false)
        }
    }
    return (
        <>
            {<Space size={'large'} direction='vertical'>
                {
                    <Card size='default' >
                        <Form labelCol={{ span: 10 }}
                            wrapperCol={{ span: 20 }}
                            form={form}
                            autoComplete={'off'}
                            name={'add_country'}
                            onFinish={handleSubmit}
                            onFinishFailed={() => { }}
                        >
                            <Form.Item label={'ID'}
                                name={'id'}
                                initialValue={props.data?.id}
                                rules={[{
                                    required: true,
                                    message: 'ID Could not be empty.'
                                }]}>
                                <Input disabled />
                            </Form.Item>
                            <Form.Item label={'Country Name'}
                                name={'name'}
                                initialValue={props.data?.name}
                                rules={[{
                                    required: true,
                                    message: 'Please Add Country Name'
                                }]}>
                                <Input disabled={!isEditing} />
                            </Form.Item>
                            <Form.Item label={'Phone Code'}
                                name={'code'}
                                initialValue={props.data?.phoneCode}
                                rules={[{
                                    required: true,
                                    message: 'Please Add Phone Code'
                                }]}>
                                <Input disabled={!isEditing} />
                            </Form.Item>
                            <Form.Item key={'master-country-actions'}>
                                <Space>
                                    <Button
                                        type='primary'
                                        htmlType={'button'}
                                        onClick={handleEdit}
                                        disabled={isLoading || isEditing}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        type='primary'
                                        htmlType={'submit'}
                                        disabled={!isEditing}
                                        loading={isLoading} >
                                        Submit
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Form>

                    </Card>}
            </Space>}
        </>
    );
}