import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export const WalletForm = () => {
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center"}}>
      <Box
        component={"h4"}
        sx={{
          fontFamily: "Monaco",
          color:"white",
          marginBottom:-2,
        }}
      >
        Enter wallet address:
      </Box>
      <TextField
       sx={{ input: { color: 'white' },marginTop:3, width:"500px",fontFamily:"Monaco" }}
        required
        autoFocus
        {...register1("wallet", { required: true })}
        id="wallet"
        label="Wallet Address"
        variant="outlined"
      />
      <Button sx={{marginTop:3, fontFamily:"Monaco"}}type="submit" variant="contained" color="success">
        Submit
      </Button>
    </Box>
  );
};
