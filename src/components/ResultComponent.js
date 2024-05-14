import React from "react";
import { Flex, Typography, Carousel, Badge, Tag } from "antd";

const { Title, Text } = Typography;

export default function ResultComponent({ result, operands }) {
  return (
    <Flex align="start" vertical gap="large">
      <Badge
        style={{ marginTop: 4 }}
        status="processing"
        text={<Text strong>{"Result (" + operands + " operands)"}</Text>}
      />
      <Tag>
        <Title style={{ minWidth: 120, margin: 0 }}>{result}</Title>
      </Tag>
      <Flex align="start" gap="small">
        <Text strong>TIP:</Text>
        <Carousel
          style={{ maxWidth: 120 }}
          autoplay
          dotPosition="right"
          dots={false}
          autoplaySpeed={5000}
        >
          <Text>Try to input some long numbers!</Text>
          <Text>Go on and add or delete a row!</Text>
          <Text>You can also disable rows!</Text>
          <Text>Change sign, see what happens!</Text>
          <Text>The calculation is done as you type!</Text>
          <Text>Need more rows? The sky is the limit!</Text>
          <Text>Refresh for some random numbers!</Text>
          <Text>Coming soon: divisions!</Text>
        </Carousel>
      </Flex>
    </Flex>
  );
}
