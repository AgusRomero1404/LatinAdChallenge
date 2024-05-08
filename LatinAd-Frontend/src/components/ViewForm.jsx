import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField, Box, InputAdornment } from '@mui/material';

function ViewForm( selectedItem ) {
  return (
    <Box sx={{ marginX: 'auto', maxWidth: 600 }}>
      <form>
        <TextField
          fullWidth
          variant="standard"
          label='Nombre'
          value={selectedItem.data.name}
          InputProps={{
            readOnly: true,
          }}
          sx={{ marginBottom: 2, marginTop: 2 }}
        />
        <TextField
          fullWidth
          variant='standard'
          label='Descripción'
          value={selectedItem.data.description}
          InputProps={{
            readOnly: true,
          }}
          sx={{ marginBottom: 2, marginTop: 2 }}
        />
        <TextField
          fullWidth
          variant='standard'
          label='Precio por día'
          value={selectedItem.data.price_per_day}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>, // Adorno inicial con el símbolo $
            readOnly: true,
          }}
          sx={{ marginBottom: 2, marginTop: 2 }}
        />
        <TextField
          fullWidth
          variant='standard'
          label='Ancho'
          value={selectedItem.data.resolution_width}
          InputProps={{
            startAdornment: <InputAdornment position="start">px</InputAdornment>, // Adorno inicial con el símbolo $
            readOnly: true,
          }}
          sx={{ marginBottom: 2, marginTop: 2 }}
        />
        <TextField
          fullWidth
          variant='standard'
          label='Largo'
          value={selectedItem.data.resolution_height}
          InputProps={{
            startAdornment: <InputAdornment position="start">px</InputAdornment>, // Adorno inicial con el símbolo $
            readOnly: true,
          }}
          sx={{ marginBottom: 2, marginTop: 2 }}
        />
        <FormControl fullWidth sx={{ minWidth: 120 }}>
          <InputLabel id="type">Tipo</InputLabel>
          <Select
            labelId="type"
            label="Tipo"
            variant="outlined"
            autoWidth
            value={selectedItem.data.type}
            inputProps={{
              readOnly: true,
            }}
            sx={{ marginBottom: 2, marginTop: 2 }}
          >
            <MenuItem value={"outdoor"}>Outdoor</MenuItem>
            <MenuItem value={"indoor"}>Indoor</MenuItem>
          </Select>
        </FormControl>
      </form>
    </Box>
  );
}

export default ViewForm;
