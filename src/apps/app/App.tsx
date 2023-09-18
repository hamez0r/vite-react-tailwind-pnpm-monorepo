import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "@feat/page";

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Shell />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;

const Shell: React.FC = () => {
  return (
        <Routes>
          <Route path="/" element={<Page />} />
        </Routes>
  );
};
