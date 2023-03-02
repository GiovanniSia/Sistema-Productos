import React, { useState,useContext } from "react";
import "../../../styles/ventana-cliente/articulo.css";
import Button from "react-bootstrap/Button";
import { carritoContext } from "../../../context/ElementosCarritoContext";

const Articulo = ({ imageSource, nombreProducto, nombreCategoria, precio,producto }) => {
  const {agregarProducto,setShowCarrito} = useContext(carritoContext);
  const [imageUrl, setImageUrl] = useState(imageSource);

  const handleImageError = (e) => {
    e.preventDefault();
    setImageUrl("");
  };

  const cargarAnimacion = (e) => {
    let divProd = e.target.closest('.card.text-center.bg-ligth');
    console.log(divProd)
    divProd.classList.add('articulo-pulsado');
    setTimeout(() => {
      divProd.classList.remove('articulo-pulsado')
    },1500)
  }

  const manejarClick = (e) => {
    agregarProducto(producto);
    setShowCarrito(true);
    cargarAnimacion(e)
  }

  return (
    <div className="card text-center bg-ligth">
      <div className="overflow">
        <img
          src={imageUrl}
          alt="a wallpaper"
          className="card-img-top"
          onError={(e) => {
            handleImageError(e);
          }}
        />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{nombreProducto}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{nombreCategoria}</h6>
        <p className="custom-precio card-text text-secondary  display-5 font-weight-bold">
          {precio ? precio : "Sin precio"}
        </p>
      </div>
      <Button variant="dark" onClick={(e)=> manejarClick(e)}>AÑADIR AL CARRITO</Button>
    </div>
  );
};

export default Articulo;

