import { Form, Card, Input, Space, Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useEffect, useState } from 'react';
import branchService from '../../../services/branchService';
import churchService from '../../../services/churchService';

interface MasterAddressData {
    id: string;
    name: string;
}
interface EditMasterChurchProps {
    data: MasterAddressData;
    children?: React.ReactNode;
    onComplete?: Function;

}


export default function EditMasterChurch(props: EditMasterChurchProps) {

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
        });
    })

    async function handleSubmit(data: { name: string, id: string }) {
        setLoading(true)
        try {
            await churchService.edit(data)
            if (props && props?.onComplete) { props.onComplete() }
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
                            name={'edit_church'}
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
                            <Form.Item label={'Church Name'}
                                name={'name'}
                                initialValue={props.data?.name}
                                rules={[{
                                    required: true,
                                    message: 'Please Add Church Name'
                                }]}>
                                <Input disabled={!isEditing} />
                            </Form.Item>
                            <Form.Item key={'master-branch-actions'}>
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