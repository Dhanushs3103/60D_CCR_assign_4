// Packages
import React from "react";
import { Container, Input, Select, Button } from "@chakra-ui/react";

// local imports

export default function TicketCreate() {
  return (
    <>
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        Create Ticket
      </h1>
      {/*Ticket create section*/}

      <Container borderRadius={10} marginBottom={7} boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"} padding={5} marginTop={2}>
        {/*Title section*/}
        <label htmlFor="title" style={{ fontSize: "20px", fontWeight: "500" }}>
          Enter the title <span style={{ color: "red" }}>*</span>
          <Input
            id="title"
            placeholder="Enter the title of the ticket"
            size="lg"
            marginTop={1}
            marginBottom={2}
          />
        </label>

        {/*Description section*/}
        <label
          htmlFor="description"
          style={{ fontSize: "20px", fontWeight: "500" }}
        >
          Enter title Description <span style={{ color: "red" }}>*</span>
          <textarea
            id="description"
            name=""
            rows="1"
            cols="51"
            style={{
              border: "1px solid lightGray",
              borderRadius: "5px",
              marginTop: "5px",
              padding: "10px 17px",
              fontSize: "18px",
            }}
            placeholder="Enter the description"
          ></textarea>
        </label>

        {/*Assignee section*/}
        <label
          htmlFor="assignee"
          style={{ fontSize: "20px", fontWeight: "500" }}
        >
          Select the Assignee <span style={{ color: "red" }}>*</span>
          <Select
            size="lg"
            id="assignee"
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginTop: "5px",
              marginBottom: "8px",
            }}
          >
            <option value="">Select the assignee</option>
            <option value="Rocky">Rocky</option>
            <option value="Sophia">Sophia</option>
            <option value="Liam">Liam</option>
            <option value="Emma">Emma</option>
            <option value="Olivia">Olivia</option>
            <option value="Noah">Noah</option>
            <option value="Ava">Ava</option>
            <option value="William">William</option>
            <option value="James">James</option>
            <option value="Mia">Mia</option>
          </Select>
        </label>

        {/*Status Section*/}
        <label htmlFor="status" style={{ fontSize: "20px", fontWeight: "500" }}>
          Select the Status <span style={{ color: "red" }}>*</span>
          <Select
            size="lg"
            id="status"
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginTop: "5px",
              marginBottom: "10px",
            }}
          >
            <option value="">Select the status</option>
            <option value="Pending">Pending</option>
            <option value="Progress">Progress</option>
            <option value="Completed">Completed</option>
          </Select>
        </label>

        {/*Priority section*/}
        <label
          htmlFor="priority"
          style={{ fontSize: "20px", fontWeight: "500" }}
        >
          Select the Priority <span style={{ color: "red" }}>*</span>
          <Select
            size="lg"
            id="priority"
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginTop: "5px",
              marginBottom: "8px",
            }}
          >
            <option value="">Select the priority</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </Select>
        </label>
        <Button colorScheme="green" variant="solid" fontSize={"20px"} marginTop={4} padding={"25px 180px"}>
          Create Ticket
        </Button>
      </Container>
    </>
  );
}
