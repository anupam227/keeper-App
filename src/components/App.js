import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function create(noteitem) {
  return <Note
    title={noteitem.title}
    content={noteitem.content}
    />
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(create)}
      <Footer />
    </div>
  );
}

export default App;
