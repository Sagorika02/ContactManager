import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ContactList from "./Components/ContactList/ContactList";

function App() {
  return (
    <div>
      <Header title="React Js" />
      <ContactList />
      <Footer />
    </div>
  );
}

export default App;
