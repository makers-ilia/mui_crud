import { Button, TextField } from "@mui/material";
import React from "react";

const AddPage = () => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        alignItems: "center",
        margin: "auto",
        border: "1px solid black",
        borderRadius: "15px",
        padding: "20px",
        marginTop: "40px",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>Add form</h2>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant="contained">Create</Button>
    </form>
  );
};

export default AddPage;
