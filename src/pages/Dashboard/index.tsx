import React from "react";
import {  Route, Routes, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
  ShopOutlined,

  UserOutlined,
  UploadOutlined,

} from '@ant-design/icons';

import colors from '../../constants/colors';

function DashboardEmpty() {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  )
}

function DashboardMaster() {
  return (
    <div>
      <h2>Dashboard Master</h2>
    </div>
  )
}

export default function Dashboard() {
  
  const { Header, Content, Sider } = Layout;
  return (
    <Layout>

      <Header>
        <h2 style={{ color: colors.textWhite }}>Landing Page</h2>
      </Header>

      <Layout hasSider>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 64,
            bottom: 0,
          }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.SubMenu key="master1" icon={<UploadOutlined />} title="Master">
              <Menu.Item key="country">
                <Link to={"/countries"}> Country</Link>
              </Menu.Item>
              <Menu.Item key="branch">
                <Link to={"/branch"}> Branch</Link>
              </Menu.Item>
              <Menu.Item key="address"><Link to={"/address"}>Address</Link></Menu.Item>
              <Menu.Item key="church">
                <Link to={"/branch"}>Church</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="logout" icon={<ShopOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{
          marginLeft: 200,
          backgroundColor: '#fff'
        }}>
          <Routes>

            <Route path="/countries" element={<DashboardMaster />} />``
            <Route path='*' element={<DashboardEmpty />} />
          </Routes>

        </Content>
      </Layout>
    </Layout>
  )
}
