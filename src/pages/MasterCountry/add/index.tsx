import { Form, Card, Input, Space, Button } from 'antd';
import React, { useState } from 'react';

interface AddMasterCountryForm {
    AddButton?: any;
}

export default function AddMasterCountryForm({ AddButton }: AddMasterCountryForm) {

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
                        <Form.Item label={'Country Name'}
                            name={'name'}
                            rules={[{
                                required: true,
                                message: 'Please Add Country Name'
                            }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label={'Phone Code'}
                            name={'code'}
                            rules={[{
                                required: true,
                                message: 'Please Add Phone Code'
                            }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type='primary'
                                htmlType={'submit'}
                                disabled={isLoading}
                                loading={isLoading} >
                                Add
                            </Button>
                        </Form.Item>
                    </Form>

                </Card>


            </Space>
        </>
    );
}