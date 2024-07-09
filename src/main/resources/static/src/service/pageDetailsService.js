import {URL} from "./Configuracion.js";

export async function loadUserDetailsValues() {
  try {
    const request = await fetch(URL+"/pageDetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return await request.json();
  } catch (error) {
    throw error;
  }
}

export const guardarPageDetail = async (obj,imageArchivo) => {
  try {
    console.log(imageArchivo)
    const formData = new FormData();
      formData.append("imagenObj", imageArchivo);
      formData.append("id", obj.id);
      formData.append("title", obj.title);
      formData.append("description", obj.description);
      formData.append("frontPageImage", obj.frontPageImage);
      formData.append("nroWhatsapp", obj.nroWhatsapp);
    const request = await fetch(URL + "/pageDetails", {
      method: "PUT",
      body: formData,
    });
  } catch (error) {
    throw error;
  }
};