import React from "react";
import CarDetails from "./CarDetails";
import { Carros } from "./CarrosData";
import ConditionalRender from "./ConditionalRender";
import Container from "./Container";
import ExecutarFuncao from "./ExecutarFuncao";
import ManageDate from "./ManageDate";
import Photo from "./Photo";
import RenderList from "./RenderList";
import ShowUserName from "./ShowUserName";

export const UseComponents2 = () => {
  function showMessage() {
    alert("Executando do pai");
  }
  return (
    <div>
      <h2>Componentes da seção 03 </h2>
      <Photo />
      <ManageDate />
      <RenderList />
      <ConditionalRender />
      {/* PROPS NORMAL */}
      <ShowUserName name="Felipe" />
      {/* DECOMPOSIÇÃO DE PROPS*/}
      <CarDetails brand="Ford" km={0} cor="Verde" novo={true} />
      <CarDetails brand="Gol" km={10000} cor="Azul" novo={false} />
      <CarDetails brand="Palio" km={0} cor="Vermelho" novo={true} />
      <hr />
      <div>
        <h2>Lista renderizada por um array de dados</h2>
        {Carros.map(({ id, brand, km, cor, newCar }) => (
          <CarDetails key={id} brand={brand} km={km} cor={cor} novo={newCar} />
        ))}
      </div>
      <Container>
        <p>Texto dentro do container</p>
      </Container>
      <ExecutarFuncao fn={showMessage} />
    </div>
  );
};
