import React from "react";
// Import components from Ant Design
import { Select, InputNumber, Button, Flex, Tooltip } from "antd";
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import "../css/Row.css";

// Define the options for the sign select dropdown
const signs = [
  {
    value: 1,
    label: <PlusOutlined />, // Plus icon for positive sign
  },
  {
    value: -1,
    label: <MinusOutlined />, // Minus icon for negative sign
  },
];

export default function RowComponent({ row, index, updateRow, deleteRow }) {
  // Handle changes in the InputNumber component
  const handleInputNumberChange = (e) => {
    e = !e ? 0 : e; // Set to 0 if the input is null or undefined
    updateRow(index, {
      ...row,
      value: e, // Update the value in the row object
    });
  };

  // Handle changes in the sign select dropdown
  const handleSignChange = (e) => {
    updateRow(index, {
      ...row,
      sign: e, // Update the sign in the row object
    });
  };

  // Toggle the disabled state of the row
  const disableRow = () => {
    updateRow(index, {
      ...row,
      disabled: !row.disabled, // Toggle the disabled property
    });
  };

  // Define the select element to be displayed before the input number
  const selectBefore = (
    <Select
      className="select"
      value={row.sign}
      onChange={handleSignChange}
      options={signs}
    />
  );

  return (
    <Flex gap="small" align="start">
      <InputNumber
        className="input"
        disabled={row.disabled}
        addonBefore={selectBefore}
        value={row.value}
        onChange={handleInputNumberChange} // Handle changes in the input number
      />
      <Tooltip
        placement="top"
        mouseEnterDelay={0.5}
        title={row.disabled ? "Enable row" : "Disable row"} // Tooltip for the enable/disable button
      >
        <Button
          // Conditional icon based on row disabled state
          icon={row.disabled ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          onClick={disableRow} // Handle click to toggle row disabled state
        />
      </Tooltip>
      <Tooltip placement="top" mouseEnterDelay={0.5} title={"Delete row"}>
        <Button
          danger
          icon={<DeleteOutlined />}
          onClick={() => {
            deleteRow(index); // Handle click to delete the row
          }}
        />
      </Tooltip>
    </Flex>
  );
}
