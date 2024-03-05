import React from "react";
import { Routes, Route } from "react-router-dom";
import Services from "./Services";
import Comments from "./Comments";
import Page404 from "../errors/Page404";
const ServicesRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Services />}>
          <Route path="comments" element={<Comments />} />
          <Route path ="*" element = {<Page404/>}/>
        </Route>
      </Routes>
  );
};

export default ServicesRouter;
