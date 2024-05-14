import React from "react";
import { Flex, Tooltip, Typography } from "antd";
import { GithubFilled } from "@ant-design/icons";

const { Text } = Typography;

export default function FooterComponent() {
  return (
    <Flex align="center" justify="center">
      <a target="_blank" href="https://github.com/nappozord" rel="noreferrer">
        <Tooltip title="nappozord">
          <GithubFilled style={{ color: "#fff" }} />
        </Tooltip>
        <Text style={{ color: "#fff", marginLeft: 8 }}>
          Alessandro Napoletano - 2024
        </Text>
      </a>
    </Flex>
  );
}
