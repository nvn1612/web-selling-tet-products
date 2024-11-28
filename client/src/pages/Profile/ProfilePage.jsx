import React, { useEffect, useState } from 'react'
import { WrapperHeader,WrapperContentProfile,WrapperLable,WrapperInput } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { useSelector } from 'react-redux'
import * as UserService from '../../service/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/LoadingComponent'
import * as message from "../../components/Message/Message"


const ProfilePage = () => {
  const user = useSelector((state) => state.user)
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email || '');
      setName(user.name || '');
      setPhone(user.phone || '');
      setAddress(user.address || '');
      setAvatar(user.avatar || '');
    }
  }, [user]);

  const mutation = useMutationHooks(
    (id, data) => UserService.updateUser(id, data)
  )

  const {data, isPending, isSuccess, isError} = mutation
  console.log('data', data)

  const handleOnchangeEmail = (value) =>{
     setEmail(value)
  }
  const handleOnchangeName = (value) =>{
    setName(value) 
  }
  const handleOnchangePhone = (value) =>{
    setPhone(value) 
  }
  const handleOnchangeAddress = (value) =>{
    setAddress(value) 
  }
  const handleOnchangeAvatar = (value) =>{
    setAvatar(value) 
  }
  const handleUpdate = () =>{
    mutation.mutate(user?.id,{ email, name,phone, address, avatar})
    if(isSuccess) {
      message.success()
    }else if (isError) {
      message.error()
    }
  }
  return (
    <div style={{width: '1270px', margin:'0 auto', height:'500px'}} >
        <WrapperHeader >THÔNG TIN NGƯỜI DÙNG</WrapperHeader>
        <Loading isLoading={isPending}>
          <WrapperContentProfile>
            <WrapperInput>
              <WrapperLable htmlFor='name'>Name</WrapperLable>
              <InputForm placeholder={'nambnbn'} style={{width:'300px'}}  value={name} onChange={handleOnchangeName} id="name"/>
              <ButtonComponent textButton={'Cập nhập'} styleButton={{background: 'white' }} onClick={handleUpdate}/>
            </WrapperInput>
            <WrapperInput>
              <WrapperLable htmlFor='email'>Email</WrapperLable>
              <InputForm placeholder={'abc123@gmail.com'} style={{width:'300px'}}  value={email} onChange={handleOnchangeEmail} id="email"/>
              <ButtonComponent textButton={'Cập nhập'} styleButton={{background: 'white' }} onClick={handleUpdate}/>
            </WrapperInput>
            <WrapperInput>
              <WrapperLable htmlFor='phone'>Phone</WrapperLable>
              <InputForm placeholder={'0927384372'} style={{width:'300px'}}  value={phone} onChange={handleOnchangePhone} id="phone"/>
              <ButtonComponent textButton={'Cập nhập'} styleButton={{background: 'white' }} onClick={handleUpdate}/>
            </WrapperInput>
            <WrapperInput>
              <WrapperLable htmlFor='address'>Address</WrapperLable>
              <InputForm placeholder={'thanh xuan ha noi'} style={{width:'300px'}}  value={address} onChange={handleOnchangeAddress} id="address"/>
              <ButtonComponent textButton={'Cập nhập'} styleButton={{background: 'white' }} onClick={handleUpdate}/>
            </WrapperInput>
            <WrapperInput>
              <WrapperLable htmlFor='avatar'>Avatar</WrapperLable>
              <InputForm placeholder={''} style={{width:'300px'}}  value={avatar} onChange={handleOnchangeAvatar} id="avatar"/>
              <ButtonComponent textButton={'Cập nhập'} styleButton={{background: 'white' }} onClick={handleUpdate}/>
            </WrapperInput>
          </WrapperContentProfile>
        </Loading>
    </div>
  )
}

export default ProfilePage