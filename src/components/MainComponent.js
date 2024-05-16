import React, { useEffect, useState } from "react";
// Import components from Ant Design
import { Button, Flex, Tooltip, Divider, Card } from "antd";
import { InsertRowBelowOutlined } from "@ant-design/icons";
import RowComponent from "./RowComponent";
import ResultComponent from "./ResultComponent";
import "../css/Main.css";

// Random default values for the rows
const defaultValues = [
  { sign: 1, value: Math.floor(Math.random() * 1000), disabled: false },
  { sign: 1, value: Math.floor(Math.random() * 1000), disabled: false },
  { sign: -1, value: Math.floor(Math.random() * 1000), disabled: false },
];

export default function MainComponent({ openNotification }) {
  const [rowList, setRowList] = useState(defaultValues); // State for the list of rows
  const [result, setResult] = useState(0); // State for the result

  // Effect to calculate the sum whenever rowList changes
  useEffect(() => {
    // Calculate the sum based on sign and disabled state
    const sum = rowList.reduce(
      (total, row) => (!row.disabled ? total + row.value * row.sign : total),
      0
    );
    setResult(sum); // Set the result state
  }, [rowList]);

  // Function to update a specific row
  const updateRow = (index, row) => {
    rowList[index] = row; // Update the row at the specified index
    // Use of the spread operator for shallow copy: ensure re-render
    setRowList([...rowList]); // Set the updated rowList state
  };

  // Function to delete a specific row
  const deleteRow = (index) => {
    if (rowList.length > 2) {
      rowList.splice(index, 1); // Remove the row at the specified index
      // Use of the spread operator for shallow copy: ensure re-render
      setRowList([...rowList]); // Set the updated rowList state
    } else {
      // Show a warning notification
      openNotification(
        "STOP DELETING!",
        "A proper calculation requires at least two operands.",
        "warning"
      );
    }
  };

  // Function to add a new row
  const addRow = () => {
    if (rowList.length === 9)
      openNotification(
        "ANOTHER ROW ADDED!",
        "But do you really need all these rows?",
        "success"
      ); // Show a success notification
    if (rowList.length === 14)
      openNotification(
        "ONE MORE ROW!",
        "Well, I guess you really need all those rows...",
        "success"
      ); // Show another success notification

    // Add a new row to the rowList state
    // Use of the spread operator for shallow copy: ensure re-render
    setRowList([...rowList, { sign: 1, value: 0, disabled: false }]);
  };

  return (
    <div className="main">
      <Card className="card">
        <Flex gap="large">
          <Flex gap="middle" vertical align="start">
            <Tooltip
              placement="top"
              mouseEnterDelay={0.5}
              title={"Insert a new calculation row"} // Tooltip for the add row button
            >
              <Button
                className="add-row-button"
                icon={<InsertRowBelowOutlined />}
                onClick={addRow} // Handle click to add a new row
              >
                Add Operand
              </Button>
            </Tooltip>
            {rowList.map((row, index) => (
              <div key={index}>
                {/* Map through rowList to render RowComponent for each row */}
                <RowComponent
                  row={row}
                  index={index}
                  updateRow={updateRow} // Pass updateRow function as a prop
                  deleteRow={deleteRow} // Pass deleteRow function as a prop
                />
              </div>
            ))}
          </Flex>
          <Flex gap="large" align="start">
            <Divider type="vertical" className="divider" />{" "}
            {/* Vertical divider */}
            <ResultComponent
              result={result} // Pass result state as a prop
              operands={rowList.filter((item) => !item.disabled).length} // Calculate and pass the number of enabled operands
            />
          </Flex>
        </Flex>
      </Card>
    </div>
  );
}
