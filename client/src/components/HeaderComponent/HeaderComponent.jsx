import React from "react";
import { Col, Badge } from "antd";
import { WrapperHeader, WrapperTextHeader,WrapperHeaderAccount,WrapperHeaderTextSmall } from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate()
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>NVAM</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            placeholder="input search text"
            textButton="Tìm kiếm"
            size="large"
            // onSearch={onSearch}
          />
        </Col>
        <Col span={6} style={{display: 'flex', gap:'54px', alignItems:'center'}}>
          <WrapperHeaderAccount >
            <UserOutlined style={{ fontSize: '30px'}} />
            <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
              <WrapperHeaderTextSmall>Đăng nhập/Đăng kí</WrapperHeaderTextSmall>
              <div>
                <WrapperHeaderTextSmall>Tài khoản

                <CaretDownOutlined />
                </WrapperHeaderTextSmall>
                
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <div>
              <WrapperHeaderTextSmall>
                <Badge size="small" color="#FFD700" count={5}>
                  <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
                </Badge>
                Giỏ hàng
              </WrapperHeaderTextSmall>
            </div>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
