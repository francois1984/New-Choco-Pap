import { Header } from '../components/Header'; 
import Carousel from 'react-bootstrap/Carousel';

export const Accueil = () => {
    return (
        <main>
            <div>
            <Header/>
            </div>
            
            <div>
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block carousel"
          src="./images/accueil1.jpg"
          alt="First slide"
        />
       
        <Carousel.Caption className='text-light'>
        <img className='w-25' src="./images/logo.png" alt="logo coffee" />
        <h1 className='title'>CHOCO PAP</h1>
          <h5>Le bon goût du chocolat</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel"
          src="./images/accueil2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='text-light'>
        <img className='w-25' src="./images/logo.png" alt="logo coffee" />
        <h1 className='title'>CHOCO PAP</h1>
          <h5>Découvrez nos bonbons fait main </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel"
          src="./images/accueil3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className='text-light'>
        <img className='w-25' src="./images/logo.png" alt="logo coffee" />
        <h1 className='title'>CHOCO PAP</h1>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>
        </main>

    );
} 