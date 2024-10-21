import React from "react";
import "./index.css";
import pizzaData from "./data";
import Pizza from "./Pizza";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :</p>
      )}
    </main>
  );
}
