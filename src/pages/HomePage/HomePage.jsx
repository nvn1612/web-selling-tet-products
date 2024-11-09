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
    <div style={{padding: '0 120px'}}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return (
            <TypeProduct name={item} key={item} />
          )
        })}
      </WrapperTypeProduct>
    </div>
    <div id='container' style={{background: 'rgb(239,239,239)', padding: '0 120px', height: '2000px'}}>
      <SliderComponent arrImages={[Slider1,Slider2,Slider3]} />
      <WrapperProducts style={{display: 'flex', alignItems:'center', marginTop:'20px', gap:'20px', flexWrap: 'wrap'}}>
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
    </>
  )
}

export default HomePage