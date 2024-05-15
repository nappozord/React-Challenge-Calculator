import React from "react";
// Import Flex, Typography, Carousel, Badge, and Tag components from Ant Design
import { Flex, Typography, Carousel, Badge, Tag } from "antd";
import "../css/Result.css";

// Destructure Typography to get Title and Text components
const { Title, Text } = Typography;

// A really useful set of tips
const tips = [
  "Try to input some long numbers!",
  "Go on and add or delete a row!",
  "You can also disable rows!",
  "Change sign, see what happens!",
  "The calculation is done as you type!",
  "Need more rows? The sky is the limit!",
  "Refresh for some random numbers!",
  "Coming soon: divisions!",
];

export default function ResultComponent({ result, operands }) {
  return (
    <Flex align="start" vertical gap="large">
      {/* The processing badge gives a sense of "live" to the design */}
      <Badge
        className="badge"
        status="processing"
        text={<Text strong>{"Result (" + operands + " operands)"}</Text>}
      />
      {/* The Tag wrap gives more of a calculator vibe to the design */}
      <Tag>
        <Title className="result">{result}</Title>
      </Tag>
      <Flex align="start" gap="small">
        <Text strong>TIP:</Text>
        {/* Carousel items providing very useful tips */}
        <Carousel
          className="carousel"
          autoplay // Carousel with autoplay enabled
          dotPosition="right" // Set vertical scrolling
          dots={false} // Do not display the dots
          autoplaySpeed={5000}
        >
          {tips.map((tip) => (
            <Text>{tip}</Text>
          ))}
        </Carousel>
      </Flex>
    </Flex>
  );
}
