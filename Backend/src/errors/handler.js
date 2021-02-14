const express = require("express");
const connection = require("../database/connection");

module.exports = (error, request, response, next) => {
  console.error({ error });

  //message
  //stack
  //constructor

  const a = connection("error").insert({
    errorMessage: error.toString(),
    request,
    response,
  });

  return response.status(500).json({ message: "Internal Server Error" });
};
