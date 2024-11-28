import React, { useState } from "react";
import { Col, Badge, Button, Popover } from "antd";
import { WrapperHeader, WrapperTextHeader,WrapperHeaderAccount,WrapperHeaderTextSmall,
  WrapperContentPopup
 } from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from '../../service/UserService'
import { resetUser } from "../../redux/slides/userSlide";
import Loading from "../LoadingComponent/LoadingComponent";


const HeaderComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }
  const user = useSelector((state) => state.user)

  const handleLogOut = async () => {
    setIsLoading(true)
    await UserService.logoutUser()
    dispatch(resetUser())
    setIsLoading(false)
  }

  const content = (
    <div>
      <WrapperContentPopup onClick={handleLogOut}>Đăng xuất</WrapperContentPopup>
      <WrapperContentPopup onClick={() => {
        navigate('/profile-user')
      }}>Thông tin người dùng</WrapperContentPopup>
    </div>
  );

  

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
          <Loading isLoading={isLoading}>
            <WrapperHeaderAccount >
              <UserOutlined style={{ fontSize: '30px'}} />
              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click">
                    <div style={{cursor: 'pointer'}}>{user?.name || user?.email || 'User'}</div>
                  </Popover>
                </>
              ):(
              <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
                <WrapperHeaderTextSmall>Đăng nhập/Đăng kí</WrapperHeaderTextSmall>
                <div>
                  <WrapperHeaderTextSmall>Tài khoản

                  <CaretDownOutlined />
                  </WrapperHeaderTextSmall>
                  
                </div>
              </div>
              )}
            </WrapperHeaderAccount>
          </Loading>
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
