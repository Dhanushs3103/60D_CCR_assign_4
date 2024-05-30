// Packages
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Card,
  Stack,
  ButtonGroup,
  Divider,
  Heading,
  CardBody,
  Text,
  CardFooter,
} from "@chakra-ui/react"; // importing button from @chakra-ui/react

// local imports
import LoadingIndicator from "../Components/LoadingIndicator"; // import LoadingIndicator.jsx
import ErrorIndicator from "../Components/ErrorIndicator"; // import ErrorIndicator.jsx

// URl for API
let API_URL = `http://localhost:3004/data`; // Base url for fetching data.

export default function TicketView() {
  let { ticketId } = useParams(); // getting ticketId from URL
  let [ticket, setTicket] = useState([]); // state for storing tickets data.
  let [loading, setLoading] = useState(false); // state for loading ticket.status.
  let [error, setError] = useState(false); // state for error ticket.status.

  async function getData(ticketId) {
    // function for fetching data.
    setLoading(true);

    try {
      let data = await axios({
        method: "GET",
        url: API_URL,
        params: { id: ticketId },
      });
      setLoading(false);
      setTicket(data?.data[0]);
      console.log(data?.data[0]);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getData(ticketId);
  }, [ticketId]);

  if (loading) {
    // if loading is true then show LoadingIndicator.
    return <LoadingIndicator />;
  }
  if (error) {
    // if error is true then show ErrorIndicator.
    return <ErrorIndicator />;
  }

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "30px", paddingTop: "20px" }}>
        Ticket View Page
      </h1>
      {ticket && (
        <Card
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={"20px"}
          maxW={"350px"}
          boxShadow={
            "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
          }
        >
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md" id="title">
                {ticket.title}
              </Heading>
              <hr />
              <Text id="description" fontSize={"18px"} fontWeight={"500"}>
                {ticket.description}
              </Text>
              <Text id="ticket.status" fontSize={"18px"} fontWeight={"500"}>
                Status:{" "}
                <span
                  style={{
                    color:
                      ticket.status == "Pending"
                        ? "red"
                        : ticket.status == "Progress"
                        ? "orange"
                        : "green",
                    fontWeight:
                      ticket.status == "Pending"
                        ? "bolder"
                        : ticket.status == "Progress"
                        ? "500"
                        : "600",
                  }}
                >
                  {ticket.status} {ticket.status == "Completed" ? "✅" : ""}
                </span>
              </Text>
              <Text id="priority" fontSize={"18px"} fontWeight={"500"}>
                Priority: {ticket.priority}
              </Text>
              <Text id="assignee" fontSize={"18px"} fontWeight={"500"}>
                Assignee: {ticket.assignee}
              </Text>
            </Stack>
          </CardBody>
          <hr />
          <CardFooter>
            <ButtonGroup spacing="5">
              <Button
                variant="solid"
                colorScheme="green"
                p={"15px 25px"}
                fontSize={"18px"}
              >
                Edit
              </Button>
              <Button
                variant="solid"
                colorScheme="red"
                p={"15px 25px"}
                fontSize={"18px"}
              >
                Delete
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
