import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import "./bootstrap.min.css";
function App() {
  return (
    <div className="container">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
