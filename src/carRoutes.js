import React from 'react'
import { useRoutes } from "react-router-dom";
import AddCars from './component/addCars';
import ListCars from './component/listCars';


const CarRou = () => {
  let routes = useRoutes([
    { path: "/", element: <ListCars /> },
    { path: "add-car", element: <AddCars /> },
  ]);
  return routes;
};

export default CarRou