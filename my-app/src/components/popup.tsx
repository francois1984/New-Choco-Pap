import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface PopupProps {
  products: Product[];
  onClose: () => void;
  onRemoveItem: (product: Product) => void;
  onClearCart: () => void;
}

const Popup: React.FC<PopupProps> = ({ products, onClose, onRemoveItem, onClearCart }) => {
  const totalPrice = products.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Mon Panier</h2>
        {products.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <>
            {products.map((item) => (
              <div key={item.id} className="cart-item">
                <Figure>
                  <Figure.Image
                    width={100}
                    height={100}
                    alt={item.name}
                    src={item.image}
                  />
                  <Figure.Caption>{item.name}</Figure.Caption>
                </Figure>
                <div className="cart-item-details">
                  <p>Prix unitaire: {item.price.toFixed(2)}€</p>
                  <p>Quantité: {item.quantity}</p>
                  <p>Total: {(item.price * item.quantity).toFixed(2)}€</p>
                </div>
                <Button variant="danger" onClick={() => onRemoveItem(item)}>
                  Supprimer
                </Button>
              </div>
            ))}
            <p>Prix total: {totalPrice.toFixed(2)}€</p>
            <Button variant="primary" onClick={onClearCart}>
              Vider le panier
            </Button>
            <Button variant="success" disabled={products.length === 0}>
              Valider le panier
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
