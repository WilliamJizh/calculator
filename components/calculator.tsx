"use client";
import { Button } from "./ui/button";
import { useState } from "react";
import { Card } from "./ui/card";
import { evaluate } from "mathjs";
import { ThemeSwitch } from "./ui/themeSwitch";

const Calculator = () => {
  const [display, setDisplay] = useState<string>("0");

  const handleButtonPress = (value: string) => {
    if (value === "C") {
      setDisplay((prev) => {
        prev.slice(0, -1);
        if (prev.length === 1) {
          return "0";
        } else {
          return prev.slice(0, -1);
        }
      });
      return;
    } else if (value === "AC") {
      setDisplay("0");
      return;
    }

    if (value === "=") {
      handleCalculate();
      return;
    } else {
      setDisplay((prev) => {
        if (prev === "0" || prev === "Error") {
          return value;
        } else {
          return prev + value;
        }
      });
    }
  };

  const handleCalculate = () => {
    try {
      setDisplay(evaluate(display).toString());
    }
    catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <Card className="rounded-lg shadow-lg p-6 w-full max-w-md">
      <ThemeSwitch />
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
