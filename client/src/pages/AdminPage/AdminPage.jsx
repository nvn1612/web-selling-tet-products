import React, { useState } from 'react';
import { AppstoreOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import AdminUser from '../../components/AdminUser/AdminUser';
import AdminProduct from '../../components/AdminProduct/AdminProduct';
const items = [
    {
      key: 'user',
      label: 'Nguời dùng',
      icon: <UserOutlined />,
     
    },
    {
      key: 'product',
      label: 'Sản phẩm',
      icon: <AppstoreOutlined />,
    
    },
  ];


  const renderPage = (key) => {
    switch(key) {
      case 'user': 
        console.log('current', key)
        return (
          <AdminUser/>
        )
      case 'product': 
        return (
          <AdminProduct/>
        )
        default:
          return <></>
    }

  }

const AdminPage = () => {

      const [current, setCurrent] = useState('');
      const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };
  return (
    <>
        <HeaderComponent isHiddenCart isHiddenSearch/>
        <div style={{display: 'flex'}}>
            <Menu
            onClick={onClick}
            style={{
                width: 256,
                height: '100vh',
                boxShadow: '1px 1px 2px #ccc'

            }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            items={items}
            />
            <div style={{flex: 1, padding: '15px'}}>
              {renderPage(current)} 
            </div>
        </div>
  </>
  )
}

export default AdminPage