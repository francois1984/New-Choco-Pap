
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import '../FilterComponent.css';

interface FilterComponentProps {
  categoryFilter: string[]; // Changez le type selon vos besoins
  onCategoryFilterChange: (selectedCategories: string[]) => void;
  priceFilter: { min: number; max: number };
  onPriceFilterChange: (priceFilter: { min: number; max: number }) => void;
  ratingFilter: { min: number; max: number };
  onRatingFilterChange: (ratingFilter: { min: number; max: number }) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  categoryFilter,
  onCategoryFilterChange,
  priceFilter,
  onPriceFilterChange,
  ratingFilter,
  onRatingFilterChange,
}) => {
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCategories = event.target.value.split(','); // Convertir la chaîne en tableau
    onCategoryFilterChange(selectedCategories);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    onPriceFilterChange({
      ...priceFilter,
      [name]: Number(value)
    });
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    onRatingFilterChange({
      ...ratingFilter,
      [name]: Number(value)
    });
  };

  const [isSticky, setIsSticky] = useState(false);

  // Fonction pour mettre à jour l'état isSticky en fonction de la position de défilement
  const handleScroll = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      const { top } = footer.getBoundingClientRect();
      setIsSticky(top > window.innerHeight);
    }
  };

  // Utilisez useEffect pour ajouter l'événement de défilement au chargement du composant
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`filter-component ${isSticky ? 'filter-sticky' : ''}`}>
    <div className="filter-component container pt-5 mb-5">
      <h3 className='filterTitle text-light'>Catégorie:</h3>
      <Form.Group controlId="categoryFilter ">
        <Form.Check
          className='text-light'
          type="checkbox"
          label="TOUS"
          value="TOUS"
          checked={categoryFilter.includes('TOUS')}
          onChange={handleCategoryChange}
        />
        <Form.Check
          className='text-light'
          type="checkbox"
          label="Chocolat blanc"
          value="Chocolat blanc"
          checked={categoryFilter.includes('Chocolat blanc')}
          onChange={handleCategoryChange}
        />

          <Form.Check
          className='text-light'
          type="checkbox"
          label="Chocolat au lait"
          value="Chocolat au lait"
          checked={categoryFilter.includes('Chocolat au lait')}
          onChange={handleCategoryChange}
        />

          <Form.Check
          className='text-light'
          type="checkbox"
          label="Chocolat noir"
          value="Chocolat noir"
          checked={categoryFilter.includes('Chocolat noir')}
          onChange={handleCategoryChange}
        />

          <Form.Check
          className='text-light'
          type="checkbox"
          label="Noix/Noisette"
          value="Noix/Noisette"
          checked={categoryFilter.includes('Noix/Noisette')}
          onChange={handleCategoryChange}
        />

          <Form.Check
          className='text-light'
          type="checkbox"
          label="Fruit"
          value="Fruit"
          checked={categoryFilter.includes('Fruit')}
          onChange={handleCategoryChange}
        />

          <Form.Check
          className='text-light'
          type="checkbox"
          label="Caramel"
          value="Caramel"
          checked={categoryFilter.includes('Caramel')}
          onChange={handleCategoryChange}
        />

          <Form.Check
          className='text-light'
          type="checkbox"
          label="Liqueur"
          value="Liqueur"
          checked={categoryFilter.includes('Liqueur')}
          onChange={handleCategoryChange}
        />

          <Form.Check
          className='text-light'
          type="checkbox"
          label="Love choco"
          value="Love choco"
          checked={categoryFilter.includes('Love choco')}
          onChange={handleCategoryChange}
        />

          <Form.Check
          className='text-light'
          type="checkbox"
          label="Bulle de perles"
          value="Bulle de perles"
          checked={categoryFilter.includes('Bulle de perles')}
          onChange={handleCategoryChange}
        />

          <Form.Check
          className='text-light'
          type="checkbox"
          label="Toffee fourré"
          value="Toffee fourré"
          checked={categoryFilter.includes('Toffee fourré')}
          onChange={handleCategoryChange}
        />
        {/* Ajoutez d'autres catégories ici */}
      </Form.Group>

      <h3 className='filterTitle text-light mt-4'>Prix:</h3>
      <Form.Group controlId="priceFilter" className='col-2'>
        <Form.Label className='text-light'>Min:</Form.Label>
        <Form.Control
          type="number"
          name="min"
          value={priceFilter.min}
          onChange={handlePriceChange}
        />
        <Form.Label className='text-light'>Max:</Form.Label>
        <Form.Control
          type="number"
          name="max"
          value={priceFilter.max}
          onChange={handlePriceChange}
        />
      </Form.Group>

      <h3 className='filterTitle text-light mt-4'>Notes:</h3>
      <Form.Group controlId="ratingFilter" className='col-lg-3 col-sm-6'>
        <Form.Label className='text-light'>Min:</Form.Label>
        <RangeSlider
          value={ratingFilter.min}
          onChange={handleRatingChange}
          min={0}
          max={5}
          step={0.1}
        />
        <Form.Label className='text-light'>Max:</Form.Label>
        <RangeSlider
          value={ratingFilter.max}
          onChange={handleRatingChange}
          min={0}
          max={5}
          step={0.1}
        />
      </Form.Group>
    </div>
    </div>
  );
};

export default FilterComponent;
