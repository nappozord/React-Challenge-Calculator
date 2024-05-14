import React from "react";
import { Select, InputNumber, Button, Flex, Tooltip } from "antd";
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";

const signs = [
  {
    value: 1,
    label: <PlusOutlined />,
  },
  {
    value: -1,
    label: <MinusOutlined />,
  },
];

export default function RowComponent({ row, index, updateRow, deleteRow }) {
  const handleInputNumberChange = (e) => {
    e = !e ? 0 : e;
    updateRow(index, {
      ...row,
      value: e,
    });
  };

  const handleSignChange = (e) => {
    updateRow(index, {
      ...row,
      sign: e,
    });
  };

  const disableRow = () => {
    updateRow(index, {
      ...row,
      disabled: !row.disabled,
    });
  };

  const selectBefore = (
    <Select
      value={row.sign}
      onChange={handleSignChange}
      options={signs}
      style={{ width: 60 }}
    />
  );

  return (
    <Flex gap="small" align="start">
      <InputNumber
        disabled={row.disabled}
        addonBefore={selectBefore}
        value={row.value}
        onChange={handleInputNumberChange}
        style={{ width: 150 }}
      />
      <Tooltip
        placement="top"
        mouseEnterDelay={0.5}
        title={row.disabled ? "Enable row" : "Disable row"}
      >
        <Button
          icon={row.disabled ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          onClick={disableRow}
        />
      </Tooltip>
      <Tooltip placement="top" mouseEnterDelay={0.5} title={"Delete row"}>
        <Button
          danger
          icon={<DeleteOutlined />}
          onClick={() => {
            deleteRow(index);
          }}
        />
      </Tooltip>
    </Flex>
  );
}
