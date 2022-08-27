import React from "react";
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

const Data = ({ name, start, end }) => {
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
  return (
    <>
      <Td>{name}</Td>
      <Td>{start}</Td>
      <Td>{end}</Td>
      <Td>{getTotalTime(start, end)}</Td>
    </>
  );
};

export default Data;
