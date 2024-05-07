import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, MenuItem, Menu, Pagination, Select, Typography, IconButton } from "@mui/material";
import { getListar } from "../linker/CallApi";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FilterListIcon from '@mui/icons-material/FilterList';


function ScreenList() { 
  const [pantallas, setPantallas] = useState([]);
  const [offset, setOffset] = useState(0);
  const [pageSize, setPageSize] = useState(2)
  const [totalCount, setTotalCount] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [type, setType] = useState();

  const getPantallas = async (pageSize, offset, type) => {
    const token = sessionStorage.getItem('Bearer Token');

    try {
      const response = await getListar(pageSize, offset, token, type);
      console.log(response.data.totalCount);
      setTotalCount(response.data.totalCount);
      setPantallas(response.data.data);
    } catch (error) {
      console.error("Hubo un error:", error);
    }
  };

  useEffect(() => {
    getPantallas(pageSize, offset, type);
  }, [offset, pageSize, type]);

  const handlePageChange = (event, page) => {
    let off = (page - 1) * pageSize
    setOffset(off);
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (value) => {
    setType(value);
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" style={{marginBottom: "20px", marginTop:"30px", fontWeight: "bold"}}>
        Pantallas Cargadas
      </Typography>
      <Box display="flex" justifyContent="start" alignItems="center" mb={2}>
        <Typography variant="body1" mr={2}>Mostrar:</Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pageSize}
          onChange={(event) => {
            setPageSize(event.target.value);
            setOffset(0); // Reset offset when changing page size
          }}
          label="Page Size"
          variant="outlined"
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
        <IconButton onClick={handleMenuOpen}>
            <FilterListIcon></FilterListIcon>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem value={"outdoor"} onClick={() => handleMenuClose("outdoor")}>Outdoor</MenuItem>
          <MenuItem value={"indoor"} onClick={() => handleMenuClose("indoor")}>Indoor</MenuItem>
        </Menu>
      </Box>
      <Grid container spacing={5} style={{ marginTop: "20px" }}>
        {pantallas.map((item, index) => (
          <Grid item xs={12} sm={4} ms={4} key={index}>
            <Card sx={{ maxWidth: 345}} style={{marginbottom:"30px",borderRadius:"10px"}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.picture_url}
                  alt="green iguana"
                  style={{borderRadius:"5px"}}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
                <Button variant="contained" endIcon={<EditIcon />}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box justifyContent={"center"} alignItems={"center"} display={"flex"} 
      sx={{margin:"20px 0px"}}
      >
        <Pagination
          color= "primary"
          count={Math.ceil(totalCount / pageSize)}
          onChange={handlePageChange}
        />
      </Box>
    </Container>
  );
}

export default ScreenList;
