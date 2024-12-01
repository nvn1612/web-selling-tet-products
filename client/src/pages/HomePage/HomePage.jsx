import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import {WrapperTypeProduct,WrapperProducts} from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import  Slider1  from '../../assets/images/Slider1.jpg'
import  Slider2  from '../../assets/images/Slider2.jpg'
import  Slider3  from '../../assets/images/Slider3.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import * as ProductService from '../../service/ProductService'
import {useQuery} from '@tanstack/react-query'
const HomePage = () => {
  const arr = ['Bánh kẹo', 'Quần áo', 'Đồ trang trí' ]

  const fetchProductAll = async () => {
    const res = await ProductService.getAllProduct()
    return res
  }
  // const [isFetching, data] = useQuery(['products'],fetchProductAll)
  const { data: products, isFetching } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProductAll,
    retry: 3, 
    retryDelay: 1000
  });
  return (
    <>
    <div style={{width: '1270px',  margin:'0 auto'}}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return (
            <TypeProduct name={item} key={item} />
          )
        })}
      </WrapperTypeProduct>
    </div>
    <div className='abc' style={{ width: '100%', backgroundColor: '#efefef' }}>
      <div id='container' style={{height: '100%', width: '1270px', margin:'0 auto'}}>
        <SliderComponent arrImages={[Slider1,Slider2,Slider3]} />
        <WrapperProducts>
          {products?.data?.map((product) => {
              return (
                <CardComponent
                  key={product._id}
                  countInStock={product.countInStock}
                  description={product.description}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  type={product.type}
                  discount={product.discount}
                  selled={product.selled}
                />
              )
          })}
            
        </WrapperProducts>
        <div style={{display:'flex', justifyContent: 'center', marginTop:'10px'}}>
            <ButtonComponent textButton='Xem thêm' styleButton={{width: '240px'}}/>
        </div>
        {/* <NavbarComponent></NavbarComponent> */}
      </div>
    </div>
    </>
  )
}

export default HomePage