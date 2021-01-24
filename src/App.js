import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
      {/* 라우트는 주소가 이렇게 되어있을 때, 해당 컴포넌트를 사용하라고 알려주는 것 */}
      {/* 즉 특정 주소에서 특정 컴포넌트를 사용하도록 해주는 것이다. 하지만 특정 주소로 향하는 방법은 다른 방법을 사용해야한다. */}
    </HashRouter>
  );
}

export default App;
