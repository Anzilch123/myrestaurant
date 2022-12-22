import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function Header() {
  return (
    <div>  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3VxshCiRPmRUNQQXGfSWtzyQ49d5nJOnPjpg1l7AxZ6NcssW9hO-JuNTmiW8gEv160Y&usqp=CAU"
          width="60"
          height="50"
          className="d-inline-block align-top"
        />{' '}
       CHEF MASTER
      </Navbar.Brand>
    </Container>
    <Breadcrumb style={{float:"right"}}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  </Navbar>
 
  <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>WE LOVE SHARING GOOD FOOD!</h3>
          <p></p>FEEL THE TASTE
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/796/449/290/chicken-legs-close-up-three-plate-wallpaper-preview.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>WE LOVE SHARING GOOD FOOD!</h3>
          <p>FEEL THE TASTE</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/704/827/686/chicken-meat-grill-lemon-wallpaper-preview.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>WE LOVE SHARING GOOD FOOD!</h3>
          <p>
          FEEL THE TASTE
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  
  )
}

export default Header