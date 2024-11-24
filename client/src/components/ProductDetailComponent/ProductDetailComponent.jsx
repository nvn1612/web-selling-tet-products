import { Row, Image, Col, InputNumber } from 'antd'
import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import ImageProduct from "../../assets/images/ImageDetail.jpg"
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import ImageProductSmall1 from "../../assets/images/ImageDetailSmall1.jpg"
import {WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell,    
WrapperPriceTextProduct,WrapperPriceProduct,WrapperAddressProduct,WrapperQualityProduct,WrapperInputNumber,WrapperBtnQualityProduct
} from "./style"
const ProductDetailComponent = () => {
    const OnChange = ()=>{ 
        return;
    }
  return (
    <Row  style={{padding: '16px', background:'#fff', borderRadius:'4px'}}>
        <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight:'10px'}}>
            <Image src={ImageProduct} alt="image product" preview={false}/>
            <Row style={{paddingTop:'10px', justifyContent:'space-between'}}>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={ImageProductSmall1} alt="image product" preview={false} />
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={ImageProductSmall1} alt="image product"  preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={ImageProductSmall1} alt="image product"  preview={false}/>
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={ImageProductSmall1} alt="image product"  preview={false}/>   
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={ImageProductSmall1} alt="image product"  preview={false}/>   
                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={ImageProductSmall1} alt="image product"  preview={false}/>   
                </WrapperStyleColImage>
            </Row>
        </Col>
        <Col span={13} style={{marginLeft:'10px'}} >
            <WrapperStyleNameProduct>
                Bánh trưng cổ truyền dân tộc Việt Nam
            </WrapperStyleNameProduct>
            <div>   
                <StarFilled style={{ fontSize:'12px', color: 'rgb(253, 216, 54)'}}/>
                <StarFilled style={{ fontSize:'12px', color: 'rgb(253, 216, 54)'}}/>
                <StarFilled style={{ fontSize:'12px', color: 'rgb(253, 216, 54)'}}/>
                <WrapperStyleTextSell> | +1000 đã bán</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>
                    200.000đ
                </WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
                <span>
                    Giao đến
                </span>
                <span className='address'>
                    Thành phố Bắc Ninh, tỉnh Bắc Ninh
                </span> -
                <span className='change-address'>Đổi địa chỉ</span>
            </WrapperAddressProduct>
            <div style={{margin:'10px 0 20px', padding:'10px 0', borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5'}}>
                <div style={{marginBottom:'10px'}}>
                    Số lượng
                </div>
                <WrapperQualityProduct>
                    <button style={{border: 'none', background: 'transparent'}}>
                        <MinusOutlined style={{color: '#000', fontSize: '20px'}} />
                    </button>
                    <WrapperInputNumber defaultValue={3} onChange={OnChange} />
                    <button style={{border: 'none', background: 'transparent'}}>
                        <PlusOutlined style={{color: '#000', fontSize: '20px'}}/>
                    </button>
                </WrapperQualityProduct>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
                <ButtonComponent textButton={'Chọn mua'} styleButton={{background: 'red', color:'white', border: 'none'}}/>
                <ButtonComponent textButton={'Mua trả sau'} styleButton={{background: 'white' }}/>
                
            </div>
        </Col>
    </Row>
  )
}

export default ProductDetailComponent