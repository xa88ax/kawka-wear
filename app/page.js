import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "T-shirt Basic", price: 49 },
  { id: 2, name: "Bluza Oversize", price: 129 },
  { id: 3, name: "Spodnie Jogger", price: 99 },
];

export default function ClothingStorePremium() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="bg-white shadow-sm p-6 text-center">
        <h1 className="text-4xl font-bold">Kawka Wear</h1>
        <p className="text-gray-600">Nowoczesna odzież streetwear i casual</p>
      </header>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">O firmie</h2>
        <p className="text-gray-600">
          Kawka Wear to sklep internetowy zajmujący się sprzedażą odzieży dla kobiet i mężczyzn.
          Oferujemy produkty wysokiej jakości, inspirowane nowoczesnym stylem miejskim.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Produkty</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="rounded-2xl shadow-md">
              <CardContent className="p-4">
                <div className="h-40 bg-gray-200 rounded-xl mb-4" />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.price} zł</p>
                <Button className="mt-4 w-full" onClick={() => addToCart(product)}>
                  Dodaj do koszyka
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CART */}
      <section className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Koszyk</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Koszyk jest pusty</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <span>{item.price} zł</span>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-4">
              <span>Suma:</span>
              <span>{total} zł</span>
            </div>

            <Button className="w-full mt-4">Przejdź do płatności</Button>
          </div>
        )}
      </section>

      {/* CONTACT */}
      <section className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Kontakt</h2>
        <p className="text-gray-600">Email: kontakt@kawkawear.pl</p>
        <p className="text-gray-600">Telefon: +48 500 000 000</p>
      </section>

      {/* LEGAL */}
      <section className="max-w-4xl mx-auto p-6 text-sm text-gray-500">
        <h3 className="font-semibold mb-2">Regulamin</h3>
        <p className="mb-4">
          Sklep Kawka Wear prowadzi sprzedaż odzieży online. Realizacja zamówień do 5 dni roboczych.
          Zwrot możliwy w ciągu 14 dni bez podania przyczyny.
        </p>

        <h3 className="font-semibold mb-2">Polityka prywatności</h3>
        <p>
          Dane klientów przetwarzane są wyłącznie w celu realizacji zamówień zgodnie z RODO.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-6 text-gray-500">
        © {new Date().getFullYear()} Kawka Wear
      </footer>
    </div>
  );
}
