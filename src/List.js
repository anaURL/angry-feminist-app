import React, { useState } from "react";
import Data from "./Data"
import "./index.css"

const List = () => {
  const [state, setstate] = useState(0);
  const { quote, author } = Data[state];
  //const [hex, setHex] = useState("black");

  const NextQuote = () => {
    setstate(Math.floor(Math.random() * Data.length));
    // setHex("#" + Math.floor(Math.random() * 16777215).toString(16));
  };

  return (
    <>
      <div className="container" >
        <div className="row" id="random">

          <h1 className= "h1 col-12">
            <span> angry </span> feminist wisdom generator
          </h1>

          {/* <div className="col-md-3 col-sm-2"></div>  API*/} 
         
             <div className="col-md-6 col-sm-8" id="quote">
                <div className="quote" >
                 {quote}
              </div>
            
            <div className="author text-end py-3">
                    <div className="author"> </div>
              --- {author}
            </div>

             <div className="text-center my-2">
                             <button id="btn" className="py-2 px-3" onClick={NextQuote}>
                Next
              </button>
            </div>
          </div>
          {/* <footer> *build by <a> Ana Url </a> and hosted on <a> Github</a></footer> */}
        </div>
      </div>
    </>
  );
};

export default List;