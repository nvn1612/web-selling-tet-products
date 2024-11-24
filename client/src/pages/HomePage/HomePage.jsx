import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import {WrapperTypeProduct,WrapperProducts} from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import  Slider1  from '../../assets/images/Slider1.jpg'
import  Slider2  from '../../assets/images/Slider2.jpg'
import  Slider3  from '../../assets/images/Slider3.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
const HomePage = () => {
  const arr = ['Bánh kẹo', 'Quần áo', 'Đồ trang trí' ]
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
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>  
            <CardComponent/>  
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