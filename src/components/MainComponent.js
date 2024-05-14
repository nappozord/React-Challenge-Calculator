import React, { useEffect, useState } from "react";
import { Button, Flex, Tooltip, Divider, Card } from "antd";
import { InsertRowBelowOutlined } from "@ant-design/icons";
import RowComponent from "./RowComponent";
import ResultComponent from "./ResultComponent";

const defaultValues = [
  { sign: 1, value: Math.floor(Math.random() * 1000), disabled: false },
  { sign: 1, value: Math.floor(Math.random() * 1000), disabled: false },
  { sign: -1, value: Math.floor(Math.random() * 1000), disabled: false },
];

export default function MainComponent({ openNotification }) {
  const [rowList, setRowList] = useState(defaultValues);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const sum = rowList.reduce(
      (total, row) => (!row.disabled ? total + row.value * row.sign : total),
      0
    );
    setResult(sum);
  }, [rowList]);

  const updateRow = (index, row) => {
    rowList[index] = row;
    setRowList([...rowList]);
  };

  const deleteRow = (index) => {
    if (rowList.length > 2) {
      rowList.splice(index, 1);
      setRowList([...rowList]);
    } else
      openNotification(
        "STOP DELETING!",
        "A proper calculation requires at least two operands.",
        "warning"
      );
  };

  const addRow = () => {
    if (rowList.length === 9)
      openNotification(
        "ANOTHER ROW ADDED!",
        "But do you really need all these rows?",
        "success"
      );
    if (rowList.length === 14)
      openNotification(
        "ONE MORE ROW!",
        "Well, I guess you really need all those rows...",
        "success"
      );
    setRowList([...rowList, { sign: 1, value: 0, disabled: false }]);
  };

  return (
    <div style={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(255, 255, 255, 0.85)",
        }}
      >
        <Flex gap="large">
          <Flex gap="middle" vertical align="start">
            <Tooltip
              placement="top"
              mouseEnterDelay={0.5}
              title={"Insert a new calculation row"}
            >
              <Button
                icon={<InsertRowBelowOutlined />}
                onClick={addRow}
                style={{ width: 230 }}
              >
                Add Operand
              </Button>
            </Tooltip>
            {rowList.map((row, index) => (
              <div key={index}>
                <RowComponent
                  row={row}
                  index={index}
                  updateRow={updateRow}
                  deleteRow={deleteRow}
                />
              </div>
            ))}
          </Flex>
          <Flex gap="large" align="start">
            <Divider type="vertical" style={{ height: "100%" }} />
            <ResultComponent
              result={result}
              operands={rowList.filter((item) => !item.disabled).length}
            />
          </Flex>
        </Flex>
      </Card>
    </div>
  );
}
