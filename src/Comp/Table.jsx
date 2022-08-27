import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
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
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Data from "./Data";
import Time from "./Time";
import { Link } from "react-router-dom";

const Tablee = () => {
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
  return (
    <Box>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Employee Name</Th>
              <Th>Star Time Utc</Th>
              <Th>End Time Utc</Th>
              <Th>Total Working Hours</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length > 0 &&
              data.map((item) => {
                return (
                  <Tr key={item.Id}>
                    <Data
                      name={item.EmployeeName}
                      start={item.StarTimeUtc}
                      end={item.EndTimeUtc}
                    />
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Tablee;
