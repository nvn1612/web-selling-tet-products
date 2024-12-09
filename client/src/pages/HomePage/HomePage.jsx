import React, { useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import Loading from '../../components/LoadingComponent/LoadingComponent'
import { useDebounce } from '../../hooks/useDebounce'
const HomePage = () => {
  const arr = ['Bánh kẹo', 'Quần áo', 'Đồ trang trí' ]
  const refSearch = useRef()
  const [stateProduct,setStateProduct] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const searchProduct = useSelector((state) => state.product?.search)
  const searchDebounce = useDebounce(searchProduct,1000)
  const [limit, setLimit] = useState(6)


  const fetchProductAll = async (context) => {
        const limit = context?.queryKey && context?.queryKey[1]
        const search = context?.queryKey && context?.queryKey[2]

        const res = await ProductService.getAllProduct(search, limit)
        // if(search?.length > 0 || refSearch.current)
        //   {
        //     setStateProduct(res?.data)
        //     return []
        //   }
        //   else{
        //   }
          return res
  }
 

  const { data: products, isPending } = useQuery({
    queryKey: ['products', limit, searchDebounce],
    queryFn: fetchProductAll,
    retry: 3, 
    retryDelay: 1000,
    keepPreviousData: true
  });

  // useEffect(()=>{
  //   if(products?.data?.length > 0){
  //     setStateProduct(products?.data)
  //   }
  // },[products])
  return (
    <Loading isLoading={isPending || isLoading}>
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
                  id={product._id}
                />
              )
          })}
            
        </WrapperProducts>
        <div style={{display:'flex', justifyContent: 'center', marginTop:'10px'}}>
            <ButtonComponent textButton='Xem thêm' styleButton={{width: '240px'}}
            onClick={()=> setLimit((prev) => prev + 6)}
            disabled={products?.total === products?.data?.length || products.totalPage === 1}/>
        </div>
      </div>
    </div>
    </Loading>
  )
}

export default HomePage