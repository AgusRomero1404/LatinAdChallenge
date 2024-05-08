  import React from 'react';
  import { useForm } from 'react-hook-form';
  import { FormControl, InputLabel, MenuItem, Select, TextField, Box, FormHelperText, Button } from '@mui/material';
  import { postPantalla } from '../linker/CallApi';

  function CreateForm(handleClose) {
    console.log("handleClose es", handleClose)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const token = sessionStorage.getItem("Bearer Token");

    const onSubmit = async (formData) => {
      try {
        const response = await postPantalla(formData, token);
        console.log(response.data);
      } catch (error) {
        console.log("el error del post es", error);
      } finally{
        handleClose.handleClose();
      }
    };

    return (
      <Box sx={{ marginX: 'auto', maxWidth: 600 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('name', { required: 'El nombre es requerido' })}
            fullWidth
            variant='outlined'
            label='Nombre'
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
          {errors.name && <FormHelperText sx={{ minWidth: 350 }} error>{errors.name.message}</FormHelperText>}

          <TextField
            {...register('description', { required: 'La descripción es requerida' })}
            fullWidth
            variant='outlined'
            label='Descripción'
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
          {errors.description && <FormHelperText sx={{ minWidth: 350 }} error>{errors.description.message}</FormHelperText>}

          <TextField
            {...register('price_per_day', { required: 'El precio por día es requerido' })}
            type="number"
            fullWidth
            variant='outlined'
            label='Precio por día'
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
          {errors.price_per_day && <FormHelperText sx={{ minWidth: 350 }} error>{errors.price_per_day.message}</FormHelperText>}

          <TextField
            {...register('resolution_width', { required: 'El ancho es requerido' })}
            type="number"
            fullWidth
            variant='outlined'
            label='Ancho'
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
          {errors.resolution_width && <FormHelperText sx={{ minWidth: 350 }} error>{errors.resolution_width.message}</FormHelperText>}

          <TextField
            {...register('resolution_height', { required: 'El largo es requerido' })}
            type="number"
            fullWidth
            variant='outlined'
            label='Largo'
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
          {errors.resolution_height && <FormHelperText sx={{ minWidth: 350 }} error>{errors.resolution_height.message}</FormHelperText>}

          <FormControl fullWidth sx={{ minWidth: 120 }}>
            <InputLabel id="type">Tipo</InputLabel>
            <Select
              {...register('type', { required: 'El tipo es requerido' })}
              labelId="type"
              label="Tipo"
              variant="outlined"
              autoWidth
              sx={{ marginBottom: 2, marginTop: 2 }}
            >
              <MenuItem value={"outdoor"}>Outdoor</MenuItem>
              <MenuItem value={"indoor"}>Indoor</MenuItem>
            </Select>
            {errors.type && <FormHelperText  sx={{ minWidth: 350 }} error>{errors.type.message}</FormHelperText>}
          </FormControl>

          <Button type="submit" variant="contained" style={{ width: '100%' }}>Crear</Button>
        </form>
      </Box>
    );
  }

  export default CreateForm;
