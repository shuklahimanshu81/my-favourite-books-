import React from "react";
import "./styles.css";
import { useState } from "react";

const bookList = {
  selfLearning: [
    { name: "Think and grow rich ",writer: "Napoleon Hill" },
    { name: "Rich dad, Poor dad",writer: " Robert Kiyosaki" }
  ],

  novel: [
    {
      name: "The immortals of meluha",
    writer: "Amish Tripathi"
    },
    {
      name: "Lord of the rings",
    writer: "J. R. R. Tolkien"
    }
  ],
  fiction: [
    {
      name: "Game of Thrones ",
    writer: " George R. R. Martin"
    },
    {
      name: "13 Reasons why ?",
    writer: "Jay Asher "
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("novel");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> My favourite books </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        These are my favourite , check them out and read them{" "}
      </p>

      <div>
        {Object.keys(bookList).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "aquamarine",
              borderRadius: "0.5rem",
              padding: "1rem  1rem",
              margin: "0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ol>
          {bookList[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                
                padding: "1rem",
                border: "1px solid #D1D5DB",
                backgroundColor: "darkgray",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "medium" }}> {book.writer} </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
