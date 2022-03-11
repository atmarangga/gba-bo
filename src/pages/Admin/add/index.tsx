import React, { useState } from 'react';
import { Card, Space, Form, Input, Button } from "antd";
import adminService from '../../../services/adminService';
export default function AdminAddPage() {

    const [isLoading, setLoading] = useState(false)
    async function handleSubmit(data: { name: string, username: string, password: string, email: string }) {
        setLoading(true)
        try {
            await adminService.add(data)
            setLoading(false);
        } catch (err) {
            console.log('error : ', err)
            setLoading(false)
        }

    }
    return (
        <div style={styles.container}>
            <div>
                <h2>Add Admin</h2>
            </div>
            <Card style={{width: '50%', justifyContent: 'flex-start'}}>
                <Form labelCol={{ span: 10,  }}
                    wrapperCol={{ span: 20 }}
                    autoComplete={'off'}
                    name={'add_address'}
                    onFinish={handleSubmit}

                >
                    <Form.Item label={'Name'}
                        name={'name'}
                        rules={[{
                            required: true,
                            message: 'Please Add Name'
                        }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label={'User Name'}
                        name={'username'}
                        rules={[{
                            required: true,
                            message: 'Please Add User Name'
                        }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label={'Email'}
                        name={'email'}
                        rules={[{
                            required: true,
                            message: 'Please Add valid email'
                        }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label={'Password'}
                        name={'password'}
                        rules={[{
                            required: true,
                            message: 'Please Add a Valid password'
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

        </div>
    )
}
const styles = {
    container: {
        padding: 20,
    }
}