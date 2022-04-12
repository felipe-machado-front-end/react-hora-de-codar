import React from "react";
import ConditionalRender from "./ConditionalRender";
import ManageDate from "./ManageDate";
import Photo from "./Photo";
import RenderList from "./RenderList";
import ShowUserName from "./ShowUserName";

export const UseComponents2 = () => {
  return (
    <div>
      <h2>Componentes da seção 03 </h2>
      <Photo />
      <ManageDate />
      <RenderList />
      <ConditionalRender />
      <ShowUserName name="Felipe" />
    </div>
  );
};
