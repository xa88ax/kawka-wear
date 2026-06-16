"use client";

import { useState } from "react";

export default function Home() {
  const products = [
    { id: 1, name: "T-Shirt Basic", price: 49 },
    { id: 2, name: "Bluza Oversize", price: 129 },
    { id: 3, name: "Spodnie Jogger", price: 99 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          background: "#fff",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1>Kawka Wear</h1>
        <p>Premium Streetwear & Casual Clothing</p>
      </header>

      <section
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2>About Us</h2>
        <p>
          Kawka Wear is an online clothing store offering casual and streetwear
          apparel for men and women. We focus on quality, comfort and modern
          design.
        </p>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  height: "180px",
                  background: "#ddd",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />

              <h3>{product.name}</h3>
              <p>{product.price} PLN</p>

              <button
                onClick={() => addToCart(product)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  background: "#000",
                  color: "#fff",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span>{item.name}</span>
                <span>{item.price} PLN</span>
              </div>
            ))}

            <hr />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              <span>Total:</span>
              <span>{total} PLN</span>
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "15px",
                padding: "12px",
                border: "none",
                background: "#000",
                color: "#fff",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Proceed to Payment
            </button>
          </>
        )}
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h2>Contact</h2>
        <p>Email: contact@kawkawear.com</p>
        <p>Phone: +48 500 000 000</p>
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
          fontSize: "14px",
        }}
      >
        <h2>Terms & Privacy Policy</h2>
        <p>
          Orders are processed within 2-5 business days. Customers may return
          products within 14 days. Personal data is processed solely for order
          fulfillment purposes.
        </p>
      </section>
    </main>
  );
}
