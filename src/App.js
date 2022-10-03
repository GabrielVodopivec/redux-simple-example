import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import "./bootstrap.css";

function App() {
  return (
    <div
      className="container d-flex gap-2 flex-column justify-content-center"
      style={{width: 600}}
    >
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
