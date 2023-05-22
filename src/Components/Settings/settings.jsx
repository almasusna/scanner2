import React from "react";
import TimeTable from "./timeTable";

export const Settings = () => {
  return (
    <div>
      <h1>Настройки</h1>
      <h4>Автоматическое сканирование </h4>

      <TimeTable />
      <button type="button" className="btn btn-primary">
        Добавить{" "}
      </button>
    </div>
  );
};
