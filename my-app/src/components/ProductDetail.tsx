import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart }) => {
  return (
    <div>
      <Figure>
        <Figure.Image
          className="figure"
          width={450}
          height={0}
          alt="171x180"
          src={product.image}
        />
        <div className="col d-flex justify-content-center m-5 " >
          <Button className="btnDetail d-flex" onClick={() => onAddToCart(product)}>
            Ajouter au panier
          </Button>
        </div>
        <Figure.Caption className="text-center text-light">
          <h1>{product.price.toFixed(2)}€</h1>
          <h2>{product.name}</h2>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>
    </div>
  );
};

export default ProductDetail;
