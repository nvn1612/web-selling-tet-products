import React from "react";
import { WrapperCardStyle,StyleNameProduct, WrapperPriceText, WrapperReportText, WrapperDiscountText } from "./style";
import {lled} from '@ant-design/icons'
import Logo from '../../assets/images/logo.jpg'
const CardComponent = () => {
  return (
      <WrapperCardStyle
        hoverable
        style={{ width: 200 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <img src={Logo} alt="" style={{width: '50px', height: '50px', position: 'absolute', top: '0', left: '0'}}/>
        <StyleNameProduct>Bánh trưng</StyleNameProduct>
        <WrapperReportText>
            <span style={{marginRight: '4px'}}>
                <span>5</span>
                <lled style={{fontSize: '12px', color: 'yellow'}}/>
                <span> | Đã bán 1000+</span>
            </span>
        </WrapperReportText>
        <WrapperPriceText>1.000.000đ
            <WrapperDiscountText> -5%</WrapperDiscountText>
        </WrapperPriceText>
      </WrapperCardStyle>
  );
};

export default CardComponent;
