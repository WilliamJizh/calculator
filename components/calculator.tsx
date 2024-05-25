"use client";
import { Button } from "./ui/button";
import { useState } from "react";
import { Card } from "./ui/card";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [display, setDisplay] = useState<string>("0");
  const [input, setInput] = useState<string>("");

  const handleButtonPress = (value: string) => {
    if (value === "C") {
      setInput((prev) => prev.slice(0, -1));
      setDisplay((prev) => prev.slice(0, -1));
      return;
    } else if (value === "AC") {
      setInput("");
      setDisplay("0");
      return;
    }
    
    if (value === "=") {
      handleCalculate();
      return;
    } else {
      setInput((prev) => prev + value);
      setDisplay((prev) => {
        if (prev === "0") {
          return value;
        } else {
          return prev + value;
        }
      });
    }
  };

  const handleCalculate = () => {
    setDisplay(evaluate(input).toString());
  };

  return (
    <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
      <div className="flex flex-col items-end mb-4">
        <div className="text-gray-700 dark:text-gray-300 text-right text-4xl font-bold p-4 w-full">
          {display}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[
          "(",
          ")",
          "C",
          "AC",
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
        ].map((value) => (
          <Button
            key={value}
            onClick={() => handleButtonPress(value)}
            variant="outline"
          >
            {value}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default Calculator;
