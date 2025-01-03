"use client";

import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarProps {
  startDate: string;
  endDate: string;
  completedDays?: string[];
  pendingDays?: string[];
}

const Calenda: React.FC<CalendarProps> = ({
  startDate,
  endDate,
  completedDays = [],
  pendingDays = [],
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: startOfCurrentMonth,
    end: endOfCurrentMonth,
  });

  const getDayClass = (day: Date): string => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (!isWithinInterval(day, { start, end })) {
      return "text-muted-foreground"; // Fora do intervalo
    }
    if (completedDays.some((d) => isSameDay(new Date(d), day))) {
      return "bg-green-500 text-white"; // Dias concluídos
    }
    if (pendingDays.some((d) => isSameDay(new Date(d), day))) {
      return "bg-red-500 text-white"; // Dias pendentes
    }
    return "text-foreground"; // Dias normais dentro do intervalo
  };

  const changeMonth = (direction: number) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  return (
    <div className="w-full  max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5 text-primary" />
        </button>
        <h2 className="text-lg font-semibold text-center">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <button
          onClick={() => changeMonth(1)}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5 text-primary" />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-2 text-center mb-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2 text-center ">
        {daysInMonth.map((day) => (
          <div
            key={day.toISOString()}
            className={`p-2 rounded-lg text-sm font-medium cursor-pointer ${getDayClass(day)}`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calenda;
