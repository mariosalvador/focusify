"use client";

import Calenda from "./demo";

const Example = () => {


  return (
    <Calenda
      startDate="2025-01-10"
      endDate="2025-01-25"
      completedDays={["2025-01-15", "2025-01-18", "2025-01-19"]}
      pendingDays={["2025-01-20", "2025-01-22"]}
    />

  );
};

export default Example;
