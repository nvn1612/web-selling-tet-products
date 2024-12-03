import React, { useState } from 'react'
import { WrapperHeader } from './style'
import { Button, Checkbox, Form, Modal } from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'
import InputComponent from '../InputComponent/InputComponent'
const AdminUser = () => {
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
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      
      const handleOnChange = (e) =>{
        console.log('test', e.target, e.target.value)
      }
    
  return (
    <div>
        <WrapperHeader>
            Quản lý người dùng
        </WrapperHeader>
        <div style={{marginTop: '10px'}}>
            <Button style={{height: '150px', width: '150px', borderRadius:'6px', borderStyle:'dashed'}} onClick={showModal}>
                <PlusOutlined style={{fontSize: '60px'}}/>
            </Button>
        </div>
        <div style={{marginTop: '20px'}}>
            <TableComponent/>
        </div>
        <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
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
            <InputComponent value={stateProduct.name} onChange={handleOnChange} />
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
            <InputComponent />

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
            <InputComponent />
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
            <InputComponent />
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
            <InputComponent />
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
            <InputComponent />
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
            <InputComponent />
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
        </Modal>
    </div>
  )
}

export default AdminUser