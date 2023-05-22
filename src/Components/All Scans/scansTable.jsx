import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../common/table";

class ScansTable extends Component {
  editDateFormat(dateString) {
    const date = new Date(dateString);
    let options = {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleTimeString("ru-RU", options);
  }
  columns = [
    {
      path: "ip",
      label: "Хост",
      content: (scan) => <Link to={`/scans/${scan.ip}`}>{scan.ip}</Link>,
    },
    {
      path: "scanLogs.length",
      label: "Результаты",
    },
    {
      path: "dateTime",
      label: "Дата&Время",
      content: (scan) => this.editDateFormat(scan.dateTime),
    },
    {
      key: "Update",
      content: (scan) => (
        <button
          onClick={() => this.props.onUpdate(scan)}
          className="btn btn-warning btn-sm"
        >
          Update
        </button>
      ),
    },
    {
      key: "delete",
      content: (scan) => (
        <button
          onClick={() => this.props.onDelete(scan)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
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

export default ScansTable;
