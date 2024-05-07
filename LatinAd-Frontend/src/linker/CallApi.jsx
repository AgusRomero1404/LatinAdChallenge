import axios from "axios";

const urlBase = "https://challenge-front-7fw1.onrender.com";

export async function postLogin(body) {
  try {
    const response = await axios.post(`${urlBase}/login`, body);
    return response;
  } catch (error) {
    console.log("el error del post es", error);
  }
}

export async function getListar(pageSize, offset, token, type) {
  try {
    const response = await axios.get(`${urlBase}/display?`, {
      params: {
        pageSize: pageSize,
        offset: offset,
        type: type
      },
      headers: {
        Authorization:`Bearer ${token}`,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error("El error en listar es: ", error);
  }
}

export async function getDisplay(id, token) {
  try {
    const response = await axios.get(`${urlBase}/display/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {}
}

export async function postPantalla(body, token) {
  try {
    const response = await axios.post(`${urlBase}/display`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
    return response;
  } catch (error) {
    console.log("el error del post es", error);
  }
}

export async function editPantalla(body, token, id) {
  try {
    const response = await axios.put(`${urlBase}/display/${id}`, body, {
      headers: {
        Authorization: `Bearer${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log("el error del put es", error);
  }
}

export async function deletePantalla(id, token) {
  try {
    const response = await axios.delete(`${urlBase}/display/${id}`, {
      headers: {
        Authorization: `Bearer${token}`,
      },
    });
  } catch (error) {
    console.log("error al borrar: ", error);
  }
}
