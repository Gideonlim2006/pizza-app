import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


function Header() {
  const currentHour = new Date().getHours();
  return (
    <div className="header">
      <h1>Gideon's Pizza Co.</h1>
      <p>
        {currentHour >= 10 && currentHour <= 22
          ? "Authentic Italian Cuisine"
          : ""}
      </p>
      <h2>Our menu</h2>
    </div>
  )
}

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.photoName} />
            <h2>{props.name}</h2>
            <p>{props.ingredients}</p>
            <p>{props.price}</p>
            <p>{props.soldOut}</p>
        </div>
    )
}

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  
  function Menu() {
    return (
        <div className="pizzas">
            {pizzaData.map((pizza) => (
                <Pizza
                    key={pizza.name}
                    name={pizza.name}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                    photoName={pizza.photoName}
                    soldOut={pizza.soldOut}
                />
            ))}
        </div>
    );
}

function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour <= 22;
  return (
    <footer className="order">
      <p>{isOpen ? "We're currently open" : "Sorry, we're closed"}</p>
      {isOpen && <button className="btn">Order</button>}
    </footer>
  );
}


function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<App />);