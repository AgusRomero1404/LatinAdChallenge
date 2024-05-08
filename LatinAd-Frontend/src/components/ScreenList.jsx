import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  MenuItem,
  Menu,
  Pagination,
  Select,
  Typography,
  IconButton,
  Modal,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Icon,
  Tooltip,
} from "@mui/material";
import { deletePantalla, getListar } from "../linker/CallApi";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FilterListIcon from "@mui/icons-material/FilterList";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
import ViewForm from "./ViewForm";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function ScreenList() {
  const [pantallas, setPantallas] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [offset, setOffset] = useState(0);
  const [pageSize, setPageSize] = useState(2);
  const [totalCount, setTotalCount] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [type, setType] = useState();
  const [utilityType, setUtilityType] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const token = sessionStorage.getItem("Bearer Token");
  const getPantallas = async (pageSize, offset, type) => {
    try {
      const response = await getListar(pageSize, offset, token, type);
      console.log(response.data.data);
      setTotalCount(response.data.totalCount);
      setPantallas(response.data.data);
    } catch (error) {
      console.error("Hubo un error:", error);
    }
  };

  const handlePageChange = (event, page) => {
    let off = (page - 1) * pageSize;
    setOffset(off);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleView = (item) => {
    setSelectedItem(item); // Almacena el elemento seleccionado
    setUtilityType("lectura"); // Asigna 'lectura' como tipo de utilidad
    setIsDialogOpen(true); // Abre el Dialog
  };

  const handleDelete = async (id) => {
    try {
      await deletePantalla(id, token);
      await getPantallas(pageSize, offset, type);
    } catch (error) {
      console.log("error al borrar: ", error);
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item); // Almacena el elemento seleccionado
    setUtilityType("editar");
    setIsDialogOpen(true); // Abre el Dialog
  };

  const handleCreate = () => {
    setUtilityType("crear");
    setIsDialogOpen(true); // Abre el Dialog
  };

  useEffect(() => {
    getPantallas(pageSize, offset, type);
  }, [offset, pageSize, type]);
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        style={{ marginBottom: "20px", marginTop: "30px", fontWeight: "bold" }}
      >
        Pantallas Cargadas
      </Typography>
      <Box display="flex" justifyContent="start" alignItems="center" mb={2}>
        <Typography variant="body1" mr={2}>
          Mostrar:
        </Typography>
        <Select
          value={pageSize}
          onChange={(event) => {
            setPageSize(event.target.value);
            setOffset(0);
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
          <MenuItem
            value={"outdoor"}
            onClick={() => {
              handleMenuClose();
              setType("outdoor");
            }}
          >
            Outdoor
          </MenuItem>
          <MenuItem
            value={"indoor"}
            onClick={() => {
              handleMenuClose();
              setType("indoor");
            }}
          >
            Indoor
          </MenuItem>
          <MenuItem
            value={"indoor"}
            onClick={() => {
              handleMenuClose();
              setType("");
            }}
          >
            Ambos
          </MenuItem>
        </Menu>
      </Box>
      <Grid container spacing={5} style={{ marginTop: "20px" }}>
        {pantallas.map((item, index) => (
          <Grid item xs={12} sm={4} ms={4} key={index}>
            <Card
              sx={{ maxWidth: 345 }}
              style={{ marginbottom: "30px", borderRadius: "10px" }}
            >
              <CardActionArea onClick={() => handleView(item)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.picture_url}
                  alt=""
                  style={{ borderRadius: "5px" }}
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
              <CardActions style={{ flexDirection: "row-reverse" }}>
                <Tooltip title="Borrar">
                  <IconButton
                  variant="outlined"
                  onClick={() => handleDelete(item.id)}
                >
                    <DeleteIcon sx={{ color: "#FF0000" }}></DeleteIcon>
                </IconButton>
                </Tooltip>
                
                <Tooltip title="Editar">

                <IconButton
                  variant="contained"
                  onClick={()=> handleEdit(item)}
                >
                  <EditIcon></EditIcon>
                </IconButton>
                </Tooltip>
                <Tooltip title="Detalles">
                <IconButton
                  variant="contained"
                  onClick={() => handleView(item)}
                >
                  <RemoveRedEyeIcon></RemoveRedEyeIcon>
                </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        sx={{ margin: "20px 0px" }}
      >
        <Pagination
          color="primary"
          count={Math.ceil(totalCount / pageSize)}
          onChange={handlePageChange}
        />
      </Box>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>{utilityType === 'crear' ? 'Crear Pantalla' : utilityType === 'editar' ? 'Editar Pantalla' : 'Ver Pantalla'}</DialogTitle>
        <DialogContent>
          {utilityType === 'crear' && <CreateForm handleClose={handleCloseDialog}/>}
          {utilityType === 'editar' && <EditForm handleClose={handleCloseDialog} data={selectedItem} />}
          {utilityType === 'lectura' && <ViewForm data={selectedItem}/>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cerrar</Button>
        </DialogActions>
      </Dialog>

      <Fab
        color="secondary"
        aria-label="add"
        onClick={handleCreate}
        style={{ position: "fixed", bottom: 40, right: 40 }}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}

export default ScreenList;
