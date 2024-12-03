import React, { useEffect, useState } from 'react'
import { WrapperHeader } from './style'
import { Button, Checkbox, Form, Modal } from 'antd'
import {PlusOutlined,UploadOutlined} from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'
import InputComponent from '../InputComponent/InputComponent'
import { WrapperUploadFile } from './style'
import { getBase64 } from '../../ultis'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/LoadingComponent'
import * as ProductService from "../../service/ProductService"
import * as message from "../../components/Message/Message"

const AdminProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stateProduct, setStateProduct] = useState({
      name: '',
      image: '',
      price: '',
      countInStock: '',
      type: '',
      rating: '',
      description: ''
      
  })
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setStateProduct({
      name: '',
      image: '',
      price: '',
      countInStock: '',
      type: '',
      rating: '',
      description: ''
    })
  };

    
    const handleOnChange = (e) =>{
      setStateProduct({
        ...stateProduct,
        [e.target.name]: e.target.value
      })
    }
  const handleOnchangeAvatar = async({fileList}) =>{
    const file = fileList[0]
    console.log('file',file)
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      image: file.preview
    })
    // setAvatar(file.preview)
  }

    const mutation = useMutationHooks(
      (data) => {
        const {  name,
        image,
        price,
        countInStock,
        type,
        rating,
        description} = data
       const res = ProductService.createProduct({
          name,
          image,
          price,
          countInStock,
          type,
          rating,
          description
      })
      return res
      }
    )
    const {data, isPending, isSuccess, isError} = mutation
  


     useEffect(() => {
      if(isSuccess && data.status ==='OK') {
        message.success()
        handleCancel()
      }else if (isError) {
        message.error()
      }
    }, [isSuccess, isError])

    const onFinish = () => {
      console.log('Success:', stateProduct);
      mutation.mutate(stateProduct)
      
    };

  return (
    <div>
        <WrapperHeader>
            Quản lý sản phẩm 
        </WrapperHeader>
        <div style={{marginTop: '10px'}}>
            <Button style={{height: '150px', width: '150px', borderRadius:'6px', borderStyle:'dashed'}} onClick={showModal}>
                <PlusOutlined style={{fontSize: '60px'}}/>
            </Button>
        </div>
        <div style={{marginTop: '20px'}}>
            <TableComponent/>
        </div>
        <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer='null'>
          <Loading isLoading={isPending}>
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                    required: true,
                    message: 'Please input your name!',
                    },
                ]}
                >
                <InputComponent value={stateProduct.name} onChange={handleOnChange} name='name' />
                </Form.Item>

                <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                    required: true,
                    message: 'Please input your description!',
                    },
                ]}
                >
                <InputComponent value={stateProduct.description} onChange={handleOnChange} name='description'/>

                </Form.Item>
                <Form.Item
                label="Type"
                name="type"
                rules={[
                    {
                    required: true,
                    message: 'Please input your type!',
                    },
                ]}
                >
                <InputComponent value={stateProduct.type} onChange={handleOnChange} name='type'/>
                </Form.Item>

                <Form.Item
                label="Price"
                name="price"
                rules={[
                    {
                    required: true,
                    message: 'Please input your price!',
                    },
                ]}
                >
                <InputComponent  value={stateProduct.price} onChange={handleOnChange} name='price'/>
                </Form.Item>

                <Form.Item
                label="CountInStock"
                name="countInStock"
                rules={[
                    {
                    required: true,
                    message: 'Please input your countInStock!',
                    },
                ]}
                >
                <InputComponent value={stateProduct.countInStock} onChange={handleOnChange} name='countInStock'/>
                </Form.Item>

                <Form.Item
                label="Rating"
                name="rating"
                rules={[
                    {
                    required: true,
                    message: 'Please input your rating!',
                    },
                ]}
                >
                <InputComponent value={stateProduct.rating} onChange={handleOnChange} name='rating' />
                </Form.Item>

                <Form.Item
                label="Image"
                name="image"
                rules={[
                    {
                    required: true,
                    message: 'Please input your image!',
                    },
                ]}
                >
                {/* <InputComponent  value={stateProduct.image} onChange={handleOnChange} name='iamge'/> */}
                <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                  <Button icon={<UploadOutlined/>}>
                  </Button>
                {stateProduct?.image &&(
                  <img src={stateProduct?.image} 
                  style={{height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }} alt="image"/>
                )}
               </WrapperUploadFile>
                

                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" label={null}>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
          </Loading>
        </Modal>
    </div>
  )
}
export default AdminProduct