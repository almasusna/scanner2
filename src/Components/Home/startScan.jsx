import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import http from "../../services/httpService";
import config from "../../config.json";
//import { io } from "socket.io-client";

const StartScan = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const onSubmitData = async (ipData) => {
    // const socket = io("ws://localhost:4000");
    // socket.emit("ipAddr", ipData.ipAddr);
    // socket.on("scan response", (msg) => {
    //   console.log(msg);
    // });

    console.log("Sending data:", ipData);
    const resp = await http.post(config.apiEndpoint + "scan", ipData);
    console.log(resp);
  };

  return (
    <div className="col-md-6 mx-auto">
      <Form onSubmit={handleSubmit(onSubmitData)}>
        <Row>
          <Col xs={7}>
            <Form.Control
              {...register("ipAddr")}
              placeholder="Введите деапазон IP адресов для сканирования"
            />
          </Col>
          <Col>
            <Form.Select {...register("scanType")} defaultValue="Basic Scan">
              <option>Basic Scan</option>
              <option>Web Scan</option>
              <option>Network Scan</option>
              <option>Deep scan</option>
            </Form.Select>
          </Col>
          <Col>
            <Button type="submit" variant="outline-primary" id="button-addon2">
              Сканировать
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default StartScan;
