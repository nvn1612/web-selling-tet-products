import React, { useEffect, useState } from "react";
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


const HeaderComponent = ({isHiddenCart=false, isHiddenSearch=false}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')

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

  useEffect(() => {
    setIsLoading(true)
    setUserName(user?.name)
    setAvatar(user?.avatar)
    setIsLoading(false)
  },[user?.name, user?.avatar])

  const content = (
    <div>
      <WrapperContentPopup onClick={() => {
        navigate('/profile-user')
      }}>Thông tin người dùng</WrapperContentPopup>
      {user?.isAdmin &&(
        <WrapperContentPopup onClick={() => {
          navigate('/system/admin')
        }}>Quản lý hệ thống</WrapperContentPopup>
      )}
      <WrapperContentPopup onClick={handleLogOut}>Đăng xuất</WrapperContentPopup>
    </div>
  );
  return (
    <div>
      <WrapperHeader style={{justifyContent: isHiddenCart && isHiddenSearch ? 'space-between' : 'unset'}}>
        <Col span={6}>
          <WrapperTextHeader>NVAM</WrapperTextHeader>
        </Col>
        {!isHiddenSearch &&(
           <Col span={12}>
           <ButtonInputSearch
             placeholder="input search text"
             textButton="Tìm kiếm"
             size="large"
             // onSearch={onSearch}
           />
         </Col>
        )}
        <Col span={6} style={{display: 'flex', gap:'54px', alignItems:'center'}}>
          <Loading isLoading={isLoading}>
            <WrapperHeaderAccount >
            {avatar ?(
                <img src={avatar} 
                  style={{height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }} alt="avatar"/>
              ) : (
                <UserOutlined style={{ fontSize: '30px'}} />
              )}
              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click">
                    <div style={{cursor: 'pointer'}}>{userName || user?.email || 'User'}</div>
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
            {!isHiddenCart && (
               <div>
               <WrapperHeaderTextSmall>
                 <Badge size="small" color="#FFD700" count={5}>
                   <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}}/>
                 </Badge>
                 Giỏ hàng
               </WrapperHeaderTextSmall>
             </div>
            )}
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
