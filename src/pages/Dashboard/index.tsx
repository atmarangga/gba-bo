import React from "react";
import { useLocation, Route, Routes, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import colors from '../../constants/colors';
import Text from "antd/lib/typography/Text";

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
  const { key } = useLocation();
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
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to={"/master"}> Master Data </Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<ShopOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{
          marginLeft: 200,
          backgroundColor: '#fff'
        }}>
          <Routes>
            <Route path='*' element={ <DashboardEmpty />} />
            <Route path="/master" element={<DashboardMaster />} />``
          </Routes>

        </Content>
      </Layout>
    </Layout>
  )
}
