import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, FormControl, InputLabel, MenuItem, Select, Box, InputAdornment, Button } from '@mui/material';
import { editPantalla } from '../linker/CallApi';

function EditForm(selectedItem, handleClose) {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm(); 
  const token = sessionStorage.getItem("Bearer Token"); 

  const onSubmit = async (formData) => {
    try {
      const response = await editPantalla(formData, token, selectedItem.data.id);
      console.log(response.data)
    } catch (error) {
      console.log("el error del post es", error);
    }
    finally{
      selectedItem.handleClose()
    }
     
  };

useEffect(() => {
    if (selectedItem) {
      setValue('id', selectedItem.data.id)
      setValue('name', selectedItem.data.name);
      setValue('description', selectedItem.data.description);
      setValue('price_per_day', selectedItem.data.price_per_day);
      setValue('resolution_width', selectedItem.data.resolution_width);
      setValue('resolution_height', selectedItem.data.resolution_height);
      setValue('type', selectedItem.data.type);
    }
  }, [selectedItem, setValue]);
  return (
<Box sx={{ marginX: 'auto', maxWidth: 600 }}
>
  <form onSubmit={handleSubmit(onSubmit)}>
    <TextField
      {...register('name')}
      fullWidth
      variant='outlined'
      label='Nombre'
      defaultValue={selectedItem.data.name}
      sx={{ marginBottom: 2, marginTop: 2 }} // Agregar margen inferior
    />
    <TextField
      {...register('description')}
      fullWidth
      variant='outlined'
      label='Descripción'
      defaultValue={selectedItem.data.description}
      sx={{ marginBottom: 2, marginTop: 2 }} // Agregar margen inferior
    />
    <TextField
      {...register('price_per_day', {})}
      fullWidth
      type="number"
      variant='outlined'
      label='Precio por día'
      defaultValue={selectedItem.data.price_per_day}
      InputProps={{startAdornment: <InputAdornment putAdornment position="start">$</InputAdornment>,
}}
      sx={{ marginBottom: 2, marginTop: 2 }}
    />
    <TextField
      {...register('resolution_width')}
      fullWidth
      type="number"
      variant='outlined'
      label='Ancho'
      defaultValue={selectedItem.data.resolution_width}
      InputProps={{startAdornment: <InputAdornment putAdornment position="start">px:</InputAdornment>}}
      sx={{ marginBottom: 2, marginTop: 2 }}
    />
    <TextField
      {...register('resolution_height')}
      fullWidth
      type="number"
      variant='outlined'
      label='Largo'
      defaultValue={selectedItem.data.resolution_height}
      InputProps={{startAdornment: <InputAdornment putAdornment position="start">px:</InputAdornment>}}
      sx={{ marginBottom: 2, marginTop: 2 }}
    />
    <FormControl fullWidth sx={{ minWidth: 120, marginBottom: 2 }}>
      <InputLabel id="type">Tipo</InputLabel>
      <Select
        {...register('type')}
        labelId="type"
        label="Tipo"
        variant="outlined"
        autoWidth
      >
        <MenuItem value={"outdoor"}>Outdoor</MenuItem>
        <MenuItem value={"indoor"}>Indoor</MenuItem>
      </Select>
    </FormControl>
    <Button type="submit" variant="contained" style={{ width: '100%' }}>Crear</Button>
  </form>
</Box>
  );
}

export default EditForm;
