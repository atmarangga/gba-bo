import { Form, Card, Input, Space, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

import readingPlanService from '../../../services/readingPlanService';

interface AddGroupForm {
    onComplete?: Function;
}



export default function AddMasterGroup({ onComplete }: AddGroupForm) {
    const [isLoading, setLoading] = useState(false);
    const arr: any[] = [];
    const [dataReading, setDataReading] = useState(arr);
    useEffect(() => {

    })

    const propsModif = {
        onRemove: (file: any) => {
            if (dataReading !== null || dataReading !== undefined) {
                setDataReading([]);
            }
        },
        beforeUpload: (file: any) => {
            setDataReading([file])
            return false;
        }
    }


    async function handleSubmit(data: { name: string, plainPerDay: string }) {
        setLoading(true)
        try {

            let formData = new FormData();
            formData.append('name', data?.name);
            formData.append('plainPerDay', data?.plainPerDay)
            formData.append('file', dataReading[0].originFileObj);
            const result = await readingPlanService.add(formData);
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
            <h2>Add Reading Plan</h2>
            <Space size={'large'} direction='vertical'>
                <Card size='default' >
                    <Form labelCol={{ span: 10 }}
                        wrapperCol={{ span: 20 }}
                        autoComplete={'off'}
                        name={'add_group'}
                        onFinish={handleSubmit}
                        onFinishFailed={() => { }}
                    >
                        <Form.Item label={'Plan Name'}
                            name={'name'}
                            rules={[{
                                required: true,
                                message: 'Please Add Plan Name'
                            }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label={'Plan per day'}
                            name={'plainPerDay'}
                            rules={[{
                                required: true,
                                message: 'Please Add plan per days'
                            }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label={'Upload File'}>
                            <Upload {...propsModif}>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
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





// import { Upload, message, Button } from 'antd';


// const props = {
//     name: 'file',
//     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//     headers: {
//         authorization: 'authorization-text',
//     },
//     onChange(info) {
//         if (info.file.status !== 'uploading') {
//             console.log(info.file, info.fileList);
//         }
//         if (info.file.status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully`);
//         } else if (info.file.status === 'error') {
//             message.error(`${info.file.name} file upload failed.`);
//         }
//     },
// };

// ReactDOM.render(
//     <Upload {...props}>
//         <Button icon={<UploadOutlined />}>Click to Upload</Button>
//     </Upload>,
//     mountNode,
// );