import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../../common/table";

class VulnTable extends Component {
  setBgColor = (severity) => {
    if (severity === "[info]") return "primary";
    if (severity === "[low]") return "success";
    if (severity === "[medium]") return "warning";
    if (severity === "[high]") return "danger";
    if (severity === "[critical]") return "danger";
  };

  createLinks = (line) => {
    const arr = line.split(" ");
    const leftovers = arr.slice(1).join(" ");
    if (arr[0].includes("https://")) {
      return (
        <>
          <a href={arr[0]}>{arr[0]}</a>
          {leftovers}
        </>
      );
    } else {
      return line;
    }
  };

  columns = [
    {
      path: "severity",
      label: "Уровень",
      content: (scan) => (
        <span className={`badge text-bg-${this.setBgColor(scan.severity)}`}>
          {scan.severity.replace("[", "").replace("]", "")}
        </span>
      ),
    },
    {
      path: "protocol",
      label: "Протокол",
      content: (scan) => (
        <>{scan.protocol.replace("[", "").replace("]", "").toUpperCase()}</>
      ),
    },
    {
      path: "vulnarability",
      label: "Уязвимости",
    },
    {
      path: "details",
      label: "Детали",
      content: (scan) => this.createLinks(scan.details),
    },
  ];
  render() {
    const { scans, sortColumn, onSort } = this.props;
    return (
      <>
        <Table
          columns={this.columns}
          data={scans}
          sortColumn={sortColumn}
          onSort={onSort}
        />
      </>
    );
  }
}

export default VulnTable;
