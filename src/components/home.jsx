import React from "react";
import { Component } from "react";
import { useState } from "react";
import Drawer from "./Drawer";
import HomeBody from "./HomeBody";
import PaperBody from "./pages/paper_page/PaperBody";

function Home() {
  const [page, setPage] = useState(0);
  return (
    <div className="App" style={{ display: "flex" }}>
      <Drawer page={page} onChange={setPage} />
      {page === 0 ? <HomeBody /> : <div />}
      {page === 1 ? <PaperBody /> : <div />}
      {page === 2 ? <div /> : <div />}
      {page === 3 ? <div /> : <div />}
      {page === 4 ? <div /> : <div />}
    </div>
  );
}

export default Home;
