import React from "react";
import "./styles.css";
import { useState } from "react";

const bookList = {
  selfLearning: [
    { name: "Think and grow rich ", writer: "Napoleon Hill", rating: "5" },
    { name: "Rich dad, Poor dad", writer: " Robert Kiyosaki", rating: "4.5" },
    {
      name: "The Power of Positive Thinking",
      writer: "Norman Vincent Peale",
      rating: "4"
    }
  ],

  novel: [
    {
      name: "The immortals of meluha",
      writer: "Amish Tripathi",
      rating: "5"
    },
    {
      name: "Lord of the rings",
      writer: "J. R. R. Tolkien",
      rating: "4"
    },
    {
      name: "Gunaho ka devta",
      writer: "Dharmveer Bharti",
      rating: "4.5"
    }
  ],
  fiction: [
    {
      name: "Game of Thrones ",
      writer: " George R. R. Martin",
      rating: "4"
    },
    {
      name: "13 Reasons why ?",
      writer: "Jay Asher ",
      rating: "5"
    },
    {
      name: "Nirmala",
      writer: "Premchand",
      rating: "4.5"
    }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("novel");
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
          {bookList[genre].map((book) => (
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
              <div style={{ fontWeight: "bold" }}> rating : {book.rating} </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
