import React from 'react'
import {WrapperContainerRight,WrapperContainerLeft,WrapperTextLight} from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import {Image} from 'antd'
import ImageLogo from '../../assets/images/logo-tet.png'
const SignUpPage = () => {
  return (
    <div style={{display: 'flex', alignItems:'center', justifyContent:'center', background:'rgba(0,0,0,0.53)', height: '100vh'}}>
      <div style={{width: '800px', height:'445px', borderRadius:'6px', background:'#fff', display: 'flex'}}>
          <WrapperContainerLeft>
              <h1>Xin chào</h1>
              <p>Đăng kí tài khoản</p>
              <InputForm placeholder={'abc123@gmail.com'}/>
              <InputForm placeholder={'password'} type="password"/>
              <InputForm placeholder={'Confirm password'} type="password"/>
              <ButtonComponent textButton={'Đăng kí'} styleButton={{background: 'red', color:'white', border: 'none', width:'100%', margin:'26px 0 10px'}}/>
              <p>Bạn đã có tài khoản ? <WrapperTextLight>Đăng nhập</WrapperTextLight></p>
          </WrapperContainerLeft>
        <WrapperContainerRight>
            <Image src={ImageLogo} preview={false} alt='Image-logo' height='203px' width='203px'/>
            <h4>Mua sắm tại Nvam</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage