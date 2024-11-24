import React from "react";
import { Col, Pagination, Row } from "antd";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { WrapperProducts, WrapperNavbar } from "./style";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div style={{ width: "100%", background: "#efefef" }}>
      <div style={{ padding: "0 120px", background: "#efefef" }}>
        <Row style={{ flexWrap: "nowrap", paddingTop: "10px" }}>
          <WrapperNavbar span={4}>
            <NavbarComponent />
          </WrapperNavbar>
          <Col span={20}>
            <WrapperProducts>
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </WrapperProducts>
            <Pagination
              defaultCurrent={2}
              total={100}
              onChange={onChange}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TypeProductPage;
