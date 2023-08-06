import React, { useState } from 'react';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Popup from '../components/popup';
import '../Popup.css';
import { useCartContext } from '../components/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const Detail4 = () => {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { cartItems, addToCart, removeFromCart, clearCart } = useCartContext(); // Use cartItems and cart-related functions from the context

  const products: Product[] = [
    {
      id: 4,
      name: 'Noix/Noisette',
      price: 7.99,
      image: './images/produit4.jpg',
      quantity: 0,
    },
    // Add other products as needed
  ];

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (product: Product) => {
    removeFromCart(product);
  };

  const handleClearCart = () => {
    clearCart(); // Utilise la fonction clearCart du contexte pour vider le panier
    setShowPopup(false); // Ferme la fenêtre popup après avoir vidé le panier
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="boutique">
      <div className="overlay">
        <div>
          <Button href="/Boutique" className="btnDetail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-bar-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"
              />
            </svg>
          </Button>
        </div>
        <div className="col d-flex justify-content-center mt-5 w-100">
          <Header cartItemCount={cartItemCount} />

          <Figure>
            <Figure.Image
              className="figure"
              width={450}
              height={0}
              alt="171x180"
              src="./images/produit4.jpg"
            />
            <div className="col d-flex justify-content-center m-5 ">
              <Button className="btnDetail d-flex m-2 bg-success" onClick={() => handleAddToCart(products[0])}>
                Ajouter au panier
              </Button>
              <Button className="btnDetail d-flex m-2  bg-secondary" onClick={() => setShowPopup(true)}>Afficher le panier</Button>
            </div>
            <Figure.Caption className="text-center text-light">
              <h1>7.99€</h1>
              <h2> Chocolat noir</h2>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </div>

        <div className="col d-flex justify-content-center m-5 ">
          <>
            <Button className="btnDetail row mb-5"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Voir plus
            </Button>

            <div style={{ minHeight: '150px' }} >
              <Collapse in={open} dimension="width" >
                <div id="example-collapse-text">
                  <Card body style={{ width: '300px' }} className="mb-5">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                    ea proident.
                  </Card>
                </div>
              </Collapse>
            </div>
          </>
        </div>

      </div>
      {/* Afficher le bouton pour ouvrir la popup */}
      {/* Afficher la popup si showPopup est true */}
      {showPopup && (
        <Popup
          products={cartItems}
          onClose={() => setShowPopup(false)}
          onRemoveItem={handleRemoveFromCart}
          onClearCart={handleClearCart} // Utilise la fonction handleClearCart pour vider le panier
        />
      )}
    </div>
  );
};
