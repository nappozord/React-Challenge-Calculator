import React from "react";
// Import Flex, Tooltip, and Typography components from Ant Design
import { Flex, Tooltip, Typography } from "antd";
import { GithubFilled } from "@ant-design/icons";
import "../css/Footer.css";

// Destructure Typography to get Text component
const { Text } = Typography;

export default function FooterComponent() {
  return (
    <Flex align="center" justify="center">
      {/* Link to GitHub profile with security attributes */}
      <a target="_blank" href="https://github.com/nappozord" rel="noreferrer">
        <Tooltip title="nappozord">
          <GithubFilled className="github-logo" />
        </Tooltip>
        <Text className="developer">Alessandro Napoletano - 2024</Text>
      </a>
    </Flex>
  );
}
