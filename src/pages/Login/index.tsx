import React, { useState } from "react";
import Text from "antd/lib/typography/Text";
import { useNavigate } from 'react-router-dom';
import { Layout, Input, Card, Form, Button } from "antd";
import LoginService from '../../services/loginService';
import { _IS_ERROR, _TOKEN } from "../../constants";
import { IS_DEV } from '../../constants/config'

export default function LoginPage() {

  const [isError, changeError] = useState(false);
  const [message, changeMessage] = useState('');
  const [isLoading, changeLoading] = useState(false);
  let navigation = useNavigate();
  const { Header, Content } = Layout;

  async function handleLogin(data: { username: string, password: string }) {
    changeError(false)
    changeLoading(true);
    changeMessage('');
    if (IS_DEV) {
      window.location.reload();
      localStorage.setItem(_TOKEN, "tokenRandom");
      navigation('/', { replace: true });
    } else {
      const result = await LoginService.login(data);
      const { errorMsg, isError } = result;
      if (isError === _IS_ERROR.No) {
        window.location.reload();
        navigation('/', { replace: true });
      } else {
        changeMessage(errorMsg);
        changeError(true);
      }
    }

    changeLoading(false);
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
                <Button type='primary' htmlType='submit' loading={isLoading} >
                  Submit
                </Button>

              </Form.Item>
              <Form.Item wrapperCol={{
                offset: 4,
                span: 8
              }}>
                {isError &&
                  <Text>{message}</Text>}
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}
