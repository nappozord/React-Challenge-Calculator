import React from "react";
// Import Flex and Typography components from Ant Design
import { Flex, Typography } from "antd";
import logo from "../assets/logo.png";
import "../css/Header.css";

// Destructure Typography to get Text component
const { Text } = Typography;

export default function HeaderComponent() {
  return (
    <Flex align="center" justify="center">
      <img src={logo} className="logo" alt="logo" />
      <Text className="header-text">React Challenge: Calculator</Text>
    </Flex>
  );
}
