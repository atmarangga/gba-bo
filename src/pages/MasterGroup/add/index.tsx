import { Form, Card, Input, Space, Button, Select, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import groupService, { AddGroupRequest } from '../../../services/groupService';
import readingPlanService from '../../../services/readingPlanService';

interface AddGroupForm {
    onComplete?: Function;
}

export default function AddMasterGroup({ onComplete }: AddGroupForm) {
    const [isLoading, setLoading] = useState(false);
    const tempData: any[] = [];
    const [dataReading, setDataReading] = useState(tempData);
    useEffect(() => {
        getAllReadingPlan();
    }, [])

    async function getAllReadingPlan() {
        try {
            const result = await readingPlanService.getAll();
            console.log('result', result);
            setDataReading(result);

        } catch (ex) {
            console.log('err :: ', ex);
        }
    }

    async function handleSubmit(data: AddGroupRequest) {
        setLoading(true)
        try {
            const requestBody = {
                ...data,
                startDate: new Date(data.startDate).toISOString(),
                endDate: new Date(data.endDate).toISOString(),
                groupType: 'regular'
            }

            console.log('data', data);
            console.log('requestBody : ', requestBody);
            const response = await groupService.add(requestBody);
            console.log('response : ', response);
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
        <div style={{ padding: 20, width: 500 }}>
            <h2>Add Group</h2>
            <Space size={'large'} direction='vertical'>
                <Card size='default' style={{ minWidth: 500 }} >
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
                            name={'groupType'}
                            rules={[{
                                message: 'Please Add Group Type'
                            }]}>
                            <Select defaultValue={'regular'}>
                                <Select.Option value={'regular'}>Regular</Select.Option>
                                <Select.Option value={'non-regular'} disabled>Non Regular</Select.Option>
                            </Select>

                        </Form.Item>
                        <Form.Item label={'Reading Plan'}
                            name={'readingPlanId'}
                            rules={[{
                                required: true,
                                message: 'Please Add Reading Plan'
                            }]}>
                            <Select>
                                {/* <Select.Option value={'2pasal'}>2 Pasal / Hari</Select.Option>
                                <Select.Option value={'3pasal'}>3 Pasal / Hari</Select.Option> */}
                                {dataReading?.map(item =>
                                    <Select.Option value={item?.id}>{item?.name}</Select.Option>
                                )}
                            </Select>
                        </Form.Item>
                        <Form.Item label={'Start Date'}
                            name={'startDate'}
                            rules={[{
                                required: true,
                                message: 'Start Date is mandatory'
                            }]}>
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label={'End Date'}
                            name={'endDate'}
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
                            name={'coPic'}
                            rules={[{
                                required: true,
                                message: 'Please Add CO - PIC name.'
                            }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item initialValue={'active'} name={'status'} label={'Status'}>
                            <Select  disabled>
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


