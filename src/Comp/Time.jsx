import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { PieChart } from "react-minimal-pie-chart";
import Pie from "./Pie";

const Time = () => {
  const [data1, sdata1] = useState({});
  const [data, sdata] = useState([]);

  const getdata = () => {
    axios
      .get(
        "https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ=="
      )
      .then((r) => {
        sdata(
          r.data.sort((a, b) =>
            a.EmployeeName > b.EmployeeName
              ? 1
              : b.EmployeeName > a.EmployeeName
              ? -1
              : 0
          )
        );
        return r.data;
      })
      .catch((e) => {
        console.log(e);
      });
  };

  var robin = {};

  useEffect(() => {
    getdata();
  }, []);
  var robin = {};
  for (var i = 0; i < data.length; i++) {
    const getTotalTime = (start, end) => {
      start = start == undefined ? "0" : start.split("T")[1];
      start = start.split(":").reduce((acc, el, index) => {
        if (index == 0) {
          acc += Number(el);
        }
        if (index == 1) {
          acc += Number(el) / 60;
        }
        if (index == 2) {
          acc += (Number(el) / 60) * 60;
        }
        return Math.floor(acc);
      }, 0);
      end = end == undefined ? "0" : end.split("T")[1];
      end = end.split(":").reduce((acc, el, index) => {
        if (index == 0) {
          acc += Number(el);
        }
        if (index == 1) {
          acc += Number(el) / 60;
        }
        if (index == 2) {
          acc += (Number(el) / 60) * 60;
        }
        return acc;
      }, 0);
      return (end - start).toFixed(2);
    };
    if (robin[data[i].EmployeeName] == undefined) {
      robin[data[i].EmployeeName] = parseFloat(
        getTotalTime(data[i].StarTimeUtc, data[i].EndTimeUtc)
      );
    } else {
      robin[data[i].EmployeeName] =
        robin[data[i].EmployeeName] +
        parseFloat(getTotalTime(data[i].StarTimeUtc, data[i].EndTimeUtc));
    }
  }
  function random(number) {
    return Math.floor(Math.random() * number);
  }
  var ss = [];
  for (var k in robin) {
    var obj = {
      name: k,
      value: robin[k],
      color: "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")",
    };
    ss.push(obj);
  }
  console.log(ss);
  useEffect(() => {
    sdata1(robin);
  }, [data]);
  return (
    <Box display="flex">
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Employee Name</Th>
              <Th>Total Working Hours</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(data1).map(function (key, index) {
              return (
                <Tr key={index}>
                  <Td>{key}</Td>
                  <Td>{(data1[key]).toFixed(2)}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Pie data2={ss} />
    </Box>
  );
};

export default Time;
