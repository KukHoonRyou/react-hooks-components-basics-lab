import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

//{About}


function App() {
  return (
    <div id = "about">
      <NavBar />
      <Home />
      <h2>About</h2>
    </div>
  );
}

export default App;
