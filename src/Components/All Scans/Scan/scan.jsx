import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../services/httpService";
import config from "../../../config.json";
import VulnTable from "./vulnTable";
import VulnBox from "../../common/vulnBox";

const Scan = (props) => {
  const [logs, setLogs] = useState([]);
  const { id } = useParams();

  const makeObjects = (logs) => {
    const objFromList = (line) => {
      const chunks = line.split(" ");
      const details = chunks.slice(3).join(" ");
      return {
        vulnarability: chunks[0],
        protocol: chunks[1],
        severity: chunks[2],
        details: details,
      };
    };
    const final = logs.map((line) => objFromList(line));
    console.log(final);
    return final;
  };

  const getLevelNums = (severityLevel) => {
    let count = 0;
    logs.forEach((scan) => {
      if (scan.severity === severityLevel) {
        count += 1;
      }
    });
    return count;
  };

  useEffect(() => {
    async function getScans() {
      const { data } = await http.get(config.apiEndpoint + `logs/${id}`);
      console.log(data);
      const final = makeObjects(data.scanLogs);
      console.log(final);
      setLogs(final);
    }
    getScans();
  }, []);

  const sortColumn = () => {};

  const handleSort = () => {};

  return (
    <>
      <h4>{id}</h4>
      <div
        className="vulnContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <VulnBox
          bgcolor={"rgba(213,62,58,255)"}
          vulnNum={getLevelNums("[critical]")}
          tagname="CRITICAL"
        />
        <VulnBox
          bgcolor={"rgba(238,147,53,255)"}
          vulnNum={getLevelNums("[high]")}
          tagname="HIGH"
        />
        <VulnBox
          bgcolor={"rgba(253,196,49,255)"}
          vulnNum={getLevelNums("[medium]")}
          tagname="MEDIUM"
        />
        <VulnBox
          bgcolor={"rgba(63,174,73,255)"}
          vulnNum={getLevelNums("[low]")}
          tagname="LOW"
        />
        <VulnBox
          bgcolor={"rgba(1,113,186,255)"}
          vulnNum={getLevelNums("[info]")}
          tagname="INFO"
        />
      </div>

      <VulnTable scans={logs} sortColumn={sortColumn} onSort={handleSort} />
    </>
  );
};

export default Scan;
