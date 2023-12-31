import React, { useState, useEffect } from 'react';
import Header  from "../components/Header"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilterComponent from '../components/FilterComponent';
import '../Boutique.css';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  // Ajoutez d'autres champs du produit ici si nécessaire
}

const products: Product[] = [
  {
    id: 1,
    name: "Chocolat blanc",
    category: "Chocolat blanc",
    price: 5.99,
    rating: 4.5,
    image: "./images/produit1.jpg"
  },
  {
    id: 2,
    name: "Chocolat au lait",
    category: "Chocolat au lait",
    price: 4.99,
    rating: 4.2,
    image: "./images/produit2.jpg"
  },
  {
    id: 3,
    name: "Chocolat noir",
    category: "Chocolat noir",
    price: 6.99,
    rating: 4.7,
    image: "./images/produit3.jpg"
  },
  {
    id: 4,
    name: "Noix/Noisette",
    category: "Noix/Noisette",
    price: 7.99,
    rating: 4.7,
    image: "./images/produit4.jpg"
  },
  {
    id: 5,
    name: "Fruit",
    category: "Fruit",
    price: 3.99,
    rating: 4.7,
    image: "./images/produit5.jpg"
  },
  {
    id: 6,
    name: "Caramel",
    category: "Caramel",
    price: 4.49,
    rating: 4.7,
    image: "./images/produit6.jpg"
  },
  {
    id: 7,
    name: "Liqueur",
    category: "Liqueur",
    price: 8.99,
    rating: 4.7,
    image: "./images/produit7.jpg"
  },
  {
    id: 8,
    name: "Love choco",
    category: "Love choco",
    price: 7.49,
    rating: 4.7,
    image: "./images/produit8.jpg"
  },
  {
    id: 9,
    name: "Bulle de perles",
    category: "Bulle de perles",
    price: 9.49,
    rating: 4.7,
    image: "./images/produit9.jpg"
  },
  {
    id: 10,
    name: "Toffee fourré",
    category: "Toffee fourré",
    price: 6.99,
    rating: 4.7,
    image: "./images/produit10.jpg"
  },
  // Ajoutez d'autres produits ici
];



export const Boutique = () => {
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 100 });
  const [ratingFilter, setRatingFilter] = useState({ min: 0, max: 5 });

   // Utiliser useEffect pour initialiser la checkbox "TOUS" lors du premier rendu
   useEffect(() => {
    setCategoryFilter(['TOUS']);
  }, []);


  const filterProducts = (product: Product) => {
    // Logique pour filtrer les produits en fonction des critères sélectionnés
    // Utilisez les états categoryFilter, priceFilter et ratingFilter ici
    // Filtrage par catégorie
    const categoryMatch = categoryFilter.includes('TOUS') || categoryFilter.includes(product.category);

    // Filtrage par prix
    const priceMatch = product.price >= priceFilter.min && product.price <= priceFilter.max;

    // Filtrage par note
    const ratingMatch = product.rating >= ratingFilter.min && product.rating <= ratingFilter.max;

    // Vérifier si toutes les conditions de filtrage sont satisfaites
    return categoryMatch && priceMatch && ratingMatch;
  };

  const filteredProducts = products.filter(filterProducts);

  return (
    <div className="boutique">
      <Header cartItemCount={0}/>

      <div className="col-12 overlay">
      <Container>
          <Row className=''>
          <Col lg={4} className="filter-column">
          <FilterComponent
          categoryFilter={categoryFilter}
          onCategoryFilterChange={setCategoryFilter}
          priceFilter={priceFilter}
          onPriceFilterChange={setPriceFilter}
          ratingFilter={ratingFilter}
          onRatingFilterChange={setRatingFilter}
        />
          </Col>

        
          
            {filteredProducts.map((product) => (
              <Col lg={3} xs key={product.id} >
                <Card style={{ width: '20rem' }} className="m-3">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      <h1>{product.price.toFixed(2)}€</h1>
                    </Card.Text>
                    <Button variant="primary" href={`/Detail${product.id}`}>
                      Voir le produit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
          </div>
          
        </div>

        
    
  );
};

// export default Boutique;
