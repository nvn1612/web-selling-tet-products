import React, { useState } from 'react';
import { AppstoreOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
const items = [
    {
      key: 'sub1',
      label: 'Nguời dùng',
      icon: <UserOutlined />,
     
    },
    {
      key: 'sub2',
      label: 'Sản phẩm',
      icon: <AppstoreOutlined />,
    
    },
  ];

const AdminPage = () => {
   
      const [current, setCurrent] = useState('1');
      const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };
  return (
    <>
        <HeaderComponent isHiddenCart isHiddenSearch/>
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
        <div>
        {current ==='sub1' &&
         (<span>day la 2</span>)
        }
         
        </div>
  </>
  )
}

export default AdminPage