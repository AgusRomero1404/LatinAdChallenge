import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress';
import "../index.css";
import { useForm } from "react-hook-form";
import { postLogin } from "../linker/CallApi";
import { Navigate } from 'react-router-dom';
import { Button } from "@mui/material";
import { enqueueSnackbar } from "notistack";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showError, setShowError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState (false);
  const onSubmit = async (data) => {
    try {
      setLoading(true); 
      const response = await postLogin(data);
      sessionStorage.setItem("Bearer Token", response.data.token);
      console.log(response);
      setRedirect(true)
    } catch (error) {
      enqueueSnackbar("Contraseña/Email incorrecto", {variant:"error"})
      setShowError(true);
    }
    finally{
      setLoading(false); 
    }
  };

  if (redirect) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="loginSectionBackground">
      <Container  maxWidth="md" className="loginSection">
        <div className="loginSection_div">
          <h1>Ingresa con tu email y contraseña</h1>
        </div>
        <div className="loginSection_div_">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email">Email</label>
              <div>
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="loginSectionInput"
                  {...register("email", { required: true })}
                ></input>
                {errors.email && <span>Usuario es requerido</span>}
              </div>
            </div>
            <div>
              <label htmlFor="email">Contraseña</label>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="loginSectionInput"
                  {...register("password", { required: true })}
                ></input>
                {errors.password && <span>Contraseña  es requerido</span>}
              </div>
            </div>
            <div className="loginSection_div_">
              <Button type="submit" variant="contained" className="loginSectionButton">
                Ingresar
              </Button>
            </div>
          </form>
        </div>
      </Container> 
      {loading && <Box sx={{       
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
      <CircularProgress />
    </Box>}

    </div>
  );
}

export default Login;
