// Packages
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// URl for API
let baseUrl = `http://localhost:3004/data`;

// local imports
import LoadingIndicator from "../Components/LoadingIndicator";
import ErrorIndicator from "../Components/ErrorIndicator";

export default function Tickets() {

  let [tickets, setTickets] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  async function getData(baseUrl) {
    setLoading(true);
    try {
      let data = await axios({
        url: baseUrl,
        method: "GET",
      });
      setLoading(false);
      console.log(data?.data);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getData(baseUrl);
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      
    </>
  );
}
