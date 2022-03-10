import { Form, Card, Input, Space, Button } from 'antd';
import React, { useState } from 'react';
import churchService from '../../../services/churchService';


interface ChurchMasterForm {
    AddButton?: any;
    onComplete?: Function;
}

export default function AddMasterChurchForm({ AddButton, onComplete }: ChurchMasterForm) {
    const [isLoading, setLoading] = useState(false);
    async function handleSubmit(data: { name: string }) {
        setLoading(true)
        try {
            await churchService.add(data)
            if (onComplete) {
                onComplete();
            }
            setLoading(false);
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
                        name={'add_address'}
                        onFinish={handleSubmit}
                        onFinishFailed={() => { }}
                    >
                        <Form.Item label={'Church '}
                            name={'name'}
                            rules={[{
                                required: true,
                                message: 'Please Add Church Name'
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