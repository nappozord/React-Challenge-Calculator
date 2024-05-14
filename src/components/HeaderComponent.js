import React from "react";
import { Flex, Typography } from "antd";
import logo from "../assets/logo.png";

const { Text } = Typography;

const headerStyle = {
  color: "#fff",
  height: 64,
  lineHeight: "64px",
  fontSize: 32,
};

export default function HeaderComponent() {
  return (
    <Flex align="center" justify="center">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ height: 44, marginRight: 8 }}
      />
      <Text style={headerStyle}>React Challenge: Calculator</Text>
    </Flex>
  );
}
