import { Form, Card, Input, Space, Button } from 'antd';
import React, { useState } from 'react';


export default function EditMasterCountry() {
    const [isEditing, setEdit] = useState(false);
    const [isLoading, setLoading] = useState(false);
    async function handleSubmit(data: { name: string, code: string }) {
        setLoading(true)
        try {
            setTimeout(() => { setLoading(false) }, 2500)
        } catch (err) {
            console.log('error : ', err)
            setLoading(false)
        }

    }
    return (
        <>
            <Space size={'large'} direction='vertical'>
                <Card size='default' >
                    <Form labelCol={{ span: 10 }}
                        wrapperCol={{ span: 20 }}
                        autoComplete={'off'}
                        name={'add_country'}
                        onFinish={handleSubmit}
                        onFinishFailed={() => { }}
                    >
                        <Form.Item label={'ID'}
                            name={'id'}
                            rules={[{
                                required: true,
                                message: 'ID Could not be empty.'
                            }]}>
                            <Input disabled />
                        </Form.Item>
                        <Form.Item label={'Country Name'}
                            name={'name'}
                            rules={[{
                                required: true,
                                message: 'Please Add Country Name'
                            }]}>
                            <Input disabled={!isEditing} />
                        </Form.Item>
                        <Form.Item label={'Phone Code'}
                            name={'code'}
                            rules={[{
                                required: true,
                                message: 'Please Add Phone Code'
                            }]}>
                            <Input disabled={!isEditing} />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type='primary'
                                htmlType={'submit'}
                                disabled={isLoading}
                                loading={isLoading} >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                </Card>


            </Space>
        </>
    );
}