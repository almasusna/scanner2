import React, { Component } from "react";
import Table from "../common/table";

class TimeTable extends Component {
  state = {};
  columns = [
    {
      path: "ipaddr",
      label: "IP address",
    },
    {
      path: "date",
      label: "Дата",
    },
    {
      path: "time",
      label: "Время",
    },
    {
      path: "period",
      label: "Периодичность",
    },
  ];
  render() {
    return (
      <>
        <Table columns={this.columns} data={[]} sortColumn={0} onSort={0} />
      </>
    );
  }
}

export default TimeTable;
