// src/App.jsx

import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContainer";
import "./App.css";

export default function App() {
  return (
    <div className="flex h-screen bg-black p-6 text-white" dir="ltr">
      <div>
        <Sidebar />
      </div>

      <div className="ml-6 flex flex-1 flex-col min-w-0">
        <Header />

        <div className="mt-6 flex-1 overflow-hidden">
          <MainContent />
        </div>
      </div>
    </div>
  );
}
