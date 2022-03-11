import React from "react";
import { Route, Routes, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
  ShopOutlined,
  UserOutlined,
  UploadOutlined,
  FileOutlined

} from '@ant-design/icons';
import { MasterCountry, MasterBranch, MasterAddress, MasterChurch, Admin, MasterGroup } from "..";
import colors from '../../constants/colors';

function DashboardEmpty() {
  return (
    <div style={{ display: "flex", padding: 20 }}>
      <h2>Welcome - Admin</h2>
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
                <Link to={"/countries"}>Country</Link>
              </Menu.Item>
              <Menu.Item key="branch">
                <Link to={"/branch"}>Branch</Link>
              </Menu.Item>
              <Menu.Item key="address"><Link to={"/address"}>Address</Link></Menu.Item>
              <Menu.Item key="church">
                <Link to={"/church"}>Church</Link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="admin" icon={<FileOutlined />} title="Admin Config">
              <Menu.Item key="admin-config"><Link to={'/admin'}>Add Admin</Link></Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="group" icon={<FileOutlined />} title="Reading Group">
              <Menu.Item key="group-add"><Link to={'/group'}>Add Group</Link></Menu.Item>
            </Menu.SubMenu>


            <Menu.Item key="logout" icon={<ShopOutlined />} onClick={() => {
              localStorage.clear();
              window.location.reload();
            }} >
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{
          marginLeft: 200,
          backgroundColor: '#fff'
        }}>
          <Routes>
            <Route path={'/address'} element={<MasterAddress />} />
            <Route path={'/branch'} element={<MasterBranch />} />
            <Route path={'/countries'} element={<MasterCountry />} />
            <Route path={'/church'} element={<MasterChurch />} />
            <Route path={'/admin'} element={<Admin />} />
            <Route path={'/group'} element={<MasterGroup />} />
            <Route path='*' element={<DashboardEmpty />} />
          </Routes>

        </Content>
      </Layout>
    </Layout>
  )
}
