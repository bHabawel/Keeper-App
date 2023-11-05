import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

let number = [1, 2, 3, 4];

function createNote(notes){
    return(
        <Note 
            title={notes.title}
            content={notes.content}
        />
    );
}

function App(){
    return(
        <div>
            <Heading />
            {notes.map(createNote)}
            <Footer />
        </div>
    );
};

export default App;