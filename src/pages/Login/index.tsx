import React from "react";
import { Layout, Input, Card, Form, Button } from "antd";
import LoginService from '../../services/loginService';

export default function LoginPage() {

  const { Header, Content } = Layout;

  async function handleLogin(data: { username: string, password: string }) {
    console.log('data :', data);
    const result = await LoginService.login(data);
    console.log('result :: ', result)
  }

  return (
    <Layout>
      <Header>
        <h2 style={{ color: '#fff' }}>Login Page</h2>
      </Header>
      <Layout>
        <Content>
          <Card>
            <Form
              style={{
                marginTop: 20,
              }}
              name='basic'
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 4,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={handleLogin}
              onFinishFailed={() => { }}
              autoComplete='off'
            >
              <Form.Item
                label='Username'
                name='username'
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 4,
                  span: 4,
                }}
              >
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}
