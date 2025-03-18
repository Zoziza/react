import React, { useState, useEffect } from "react";

const App = () => {

  const products = ["Телефон", "Ноутбук","Планшет", "Флешка"];


  const [recentlyViewed, setRecentlyViewed] = useState([]);

 
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(storedData);
  }, []);

  
  const handleClick = (product) => {
 
    console.log(` ${product}`);
    

    setRecentlyViewed((prevViewed) => {

      const updatedList = prevViewed.filter(item => item !== product);
      updatedList.unshift(product); 
      localStorage.setItem("recentlyViewed", JSON.stringify(updatedList)); 
      return updatedList;
    });
  };

  return (
    <div>
      <h1>Өнімдер тізімі</h1>
      <div>
        {products.map((product) => (
          <button
            key={product}
            onClick={() => handleClick(product)}
            style={{ margin: "5px", padding: "10px" }}
          >
            {product}
          </button>
        ))}
      </div>

      <h2>Соңғы қаралғандар</h2>
      <ul>
        {recentlyViewed.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}; 
// не смогла сделать список прошлых выбранных продуктов 😭

export default App;
