import { Row, Image, Col, InputNumber } from 'antd'
import React, { useState } from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import ImageProduct from "../../assets/images/ImageDetail.jpg"
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import ImageProductSmall1 from "../../assets/images/ImageDetailSmall1.jpg"
import {WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell,    
WrapperPriceTextProduct,WrapperPriceProduct,WrapperAddressProduct,WrapperQualityProduct,WrapperInputNumber,WrapperBtnQualityProduct
} from "./style"
import * as ProductService from "../../service/ProductService"
import { useQuery } from '@tanstack/react-query';
import Loading from '../LoadingComponent/LoadingComponent';
import { useSelector } from 'react-redux';


const ProductDetailComponent = ({idProduct}) => {
    //address user
     
    const user = useSelector((state) => state.user)

    //change number product
    const [numProduct, setNumProduct] = useState(1) 
    const OnChange = (value)=>{ 
        setNumProduct(value)
    }

    const handleChangeCount = (type) =>{
        if(type === 'increase')
        {
            setNumProduct(numProduct + 1)
        }else{
            setNumProduct(numProduct - 1)
        }
    }
    //get detail product

    const fetchDetailProduct = async(context) =>{
        const id = context?.queryKey && context?.queryKey[1]
        if(id)
        {
            const res = await ProductService.getDetailProduct(id)
            return res.data
        }
      } 
      
    const { data: productDetails, isPending } = useQuery({
        queryKey: ['product-details', idProduct],
        queryFn: fetchDetailProduct,
        enable: !!idProduct
      });

      console.log('pdt', productDetails)

      //render star

      const renderStars = (num) => {
        const stars = [];
        for (let i = 0; i < num; i++) {
          stars.push(<StarFilled key={i} />);
        }
        return stars;
      };

  return (
    <Loading isLoading={isPending}>
        <Row  style={{padding: '16px', background:'#fff', borderRadius:'4px'}}>
            <Col span={10} style={{borderRight: '1px solid #e5e5e5', paddingRight:'10px'}}>
                <Image src={productDetails?.image} alt="image product" preview={false}/>
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
                  {productDetails?.name}
                </WrapperStyleNameProduct>
                <div> 
                    {renderStars(productDetails?.rating)}
                    {/* <StarFilled style={{ fontSize:'12px', color: 'rgb(253, 216, 54)'}}/>
                    <StarFilled style={{ fontSize:'12px', color: 'rgb(253, 216, 54)'}}/>
                    <StarFilled style={{ fontSize:'12px', color: 'rgb(253, 216, 54)'}}/> */}
                    <WrapperStyleTextSell> | +1000 đã bán</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>
                        {productDetails?.price}đ
                    </WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>
                        Giao đến
                    </span>
                    <span className='address'>
                        {user?.address}
                    </span> -
                    <span className='change-address'>Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{margin:'10px 0 20px', padding:'10px 0', borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5'}}>
                    <div style={{marginBottom:'10px'}}>
                        Số lượng
                    </div>
                    <WrapperQualityProduct>
                        <button style={{border: 'none', background: 'transparent', cursor: 'pointer'}} onClick={()=>handleChangeCount('decrease')}>
                            <MinusOutlined style={{color: '#000', fontSize: '20px'}} />
                        </button>
                        <WrapperInputNumber defaultValue={1} onChange={OnChange} value={numProduct} />
                        <button style={{border: 'none', background: 'transparent', cursor: 'pointer'}} onClick={()=>handleChangeCount('increase')}>
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
    </Loading>
  )
}

export default ProductDetailComponent