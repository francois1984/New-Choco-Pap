import { Header } from "../components/Header";
import { useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';



export const Detail9 = () => {
  const [open, setOpen] = useState(false);
    return (
<div className="boutique" >

  <div className="overlay">
<div>
    <Button href="/Boutique" className="btnDetail">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
</svg>
    </Button>
    </div>
    <div className="col d-flex justify-content-center mt-5 w-100">
    <Header/>
     
    <Figure>
      <Figure.Image
        className="figure"
        width={450}
        height={0}
        alt="171x180"
        src="./images/produit9.jpg"
      />
      <div className="col d-flex justify-content-center m-5 " >
      <Button className="btnDetail d-flex">Ajouter au panier</Button>
     
      </div>
      <Figure.Caption className="text-center text-light">
      <h1>9.49€</h1>
        <h2>bulle de perles</h2>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
    </div>

    <div className="col d-flex justify-content-center m-5 ">
    <>
      <Button className="btnDetail row mb-5 "
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
</div>
    );
};




