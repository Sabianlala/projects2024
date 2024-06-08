import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src="https://w0.peakpx.com/wallpaper/463/467/HD-wallpaper-pets-pet-kittten-caine-cat-pisici-animal-dog-puppy.jpg" alt="Pet Shop" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">About Our Pet Shop</h2>
            <p>
              Welcome to our pet shop! We are passionate about providing a wide variety of pets to loving homes. 
              Our journey began with a simple love for animals and has grown into a full-fledged commitment to 
              ensuring the happiness and well-being of pets and pet owners alike.
            </p>
            <p>
              At our shop, you'll find everything you need to care for your furry friends, from premium pet food 
              to cozy beds and fun toys. Our knowledgeable staff is here to assist you with any questions and to 
              help you find the perfect pet for your family.
            </p>
            <p>
              Whether you're a seasoned pet owner or considering adding a new member to your family, we invite you 
              to visit our shop and experience the joy of pet ownership with us.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Temporibus nesciunt labore ad similique architecto itaque quos ipsa ratione 
               earum culpa natus, blanditiis laboriosam aliquid, nisi nam delectus modi debitis id,
                consectetur atque nemo velit obcaecati aliquam in? Sint, quod quos!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
