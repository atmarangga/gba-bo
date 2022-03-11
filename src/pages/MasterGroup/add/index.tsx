import { Form, Card, Input, Space, Button, Select, DatePicker } from 'antd';
import React, { useState } from 'react';
import churchService from '../../../services/churchService';

interface AddGroupForm {
    onComplete?: Function;
}

export default function AddMasterGroup({ onComplete }: AddGroupForm) {
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
        <div style={{ padding: 20 }}>
            <h2>Add Group</h2>
            <Space size={'large'} direction='vertical'>
                <Card size='default' >
                    <Form labelCol={{ span: 10 }}
                        wrapperCol={{ span: 20 }}
                        autoComplete={'off'}
                        name={'add_group'}
                        onFinish={handleSubmit}
                        onFinishFailed={() => { }}
                    >
                        <Form.Item label={'Group Name'}
                            name={'name'}
                            rules={[{
                                required: true,
                                message: 'Please Add Group Name'
                            }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label={'Group Type'}
                            name={'group_type'}
                            rules={[{
                                required: true,
                                message: 'Please Add Group Type'
                            }]}>
                            <Select disabled defaultValue={'regular'}>
                                <Select.Option value={'regular'}>Regular</Select.Option>
                                <Select.Option value={'non-regular'}>Regular</Select.Option>
                            </Select>

                        </Form.Item>
                        <Form.Item label={'Reading Plan'}
                            name={'reading_plan'}
                            rules={[{
                                required: true,
                                message: 'Please Add Reading Plan'
                            }]}>
                            <Select defaultValue={'2pasal'}>
                                <Select.Option value={'2pasal'}>2 Pasal / Hari</Select.Option>
                                <Select.Option value={'3pasal'}>3 Pasal / Hari</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label={'Start Date'}
                            name={'start_date'}
                            rules={[{
                                required: true,
                                message: 'Start Date is mandatory'
                            }]}>
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label={'End Date'}
                            name={'end_date'}
                            rules={[{
                                required: true,
                                message: 'Start Date is mandatory'
                            }]}>
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label={'PIC'}
                            name={'pic'}
                            rules={[{
                                required: true,
                                message: 'Please Add PIC name'
                            }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label={'CO - PIC'}
                            name={'co_pic'}
                            rules={[{
                                required: true,
                                message: 'Please Add CO - PIC name.'
                            }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={'status'} label={'Status'}>
                            <Select defaultValue={'active'}>
                                <Select.Option value={'active'}>Active</Select.Option>
                                <Select.Option value={'non-active'}>Non - Active</Select.Option>
                            </Select>
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
        </div>
    );
}


