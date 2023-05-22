import "../../App.css";
import React, { Component } from "react";
import http from "../../services/httpService";
import config from "../../config.json";
import ListGroup from "../common/listGroup";
import SearchBox from "../common/searchBox";
import ScansTable from "./scansTable";

class AllScans extends Component {
  state = {
    logs: [],
    ipTypes: [
      { _id: "0", name: "All IPs" },
      { _id: "1", name: "Local" },
      { _id: "2", name: "Internet" },
    ],
    sortColumn: {},
    selectedIpType: null,
    sortColumn: { path: "" },
  };

  async componentDidMount() {
    const { data } = await http.get(config.apiEndpoint + "logs");
    this.setState({ logs: data.logs });
  }
  handleIpSelect = (ipType) => {
    this.setState({ selectedIpType: ipType });
  };

  handleDelete = () => {
    return 1;
  };

  handleUpdate = () => {
    return 1;
  };

  handleSort = () => {
    return 1;
  };

  getPagedData = () => {
    return this.state.logs;
  };

  render() {
    const scans = this.getPagedData();
    // const {ipTypes, selectedIpType} = this.state
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.ipTypes}
            selectedItem={this.state.selectedIpType}
            onItemSelect={this.handleIpSelect}
          />
        </div>
        <div className="col">
          <p>Количество просканированых хостов {this.state.logs.length}</p>
          <SearchBox onChange={void 0} />
          <ScansTable
            scans={scans}
            sortColumn={this.state.sortColumn}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
            onUpdate={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}
export default AllScans;
