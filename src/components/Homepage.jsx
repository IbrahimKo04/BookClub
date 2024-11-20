import React from 'react';
import './Homepage.css'; 
import Navbar from './Navbar';
const Homepage = () => {
  return (
    <div className="homepage">
      
    <Navbar/>

      <section className="hero">
        <div className="welcome-text">
          <h2>Welcome book lovers!</h2>
          <p>
            Dive into the world of timeless classics and magical stories.
            
          </p>
          <button className="sign-up">Sign Up</button>
        </div>
        <div className="featured-book">
          <img
            src="https://m.media-amazon.com/images/I/81DN1723hUL._AC_UF1000,1000_QL80_.jpg"
            alt="Harry Potter"
            className="book-cover"
          />
          <h3>Harry Potter Series</h3>
          <a href = "https://www.amazon.in/Harry-Potter-PAPERBACK-Complete-Collection/dp/B0DLQL7R7F/ref=sr_1_1_sspa?adgrpid=58711671597&dib=eyJ2IjoiMSJ9.N_EZSbwnuQx7q1VjOg2Qxabcgmlu3akQZsIYWUZRouYaUh3rROwhcAVLDyTUH_1W_ZhkMHYVoy0mWtNNF99nuAQV31ysG-hwi9jNs-Dhw0g5Is7OzMThKCUgP7d4ZXDDI_C3T5v_ILAE5k2KseYZW-PAkfX2-DleIdLk0fcoyQHaoJ1hzugADShBMNa0fc_dXOb_E0CHdbrI43B5NzDg_GAsrsYusI34Y1h38l40HXI.4_xC7GIkqDXqYTvjSo7J5cI3M_0WvDdFm-rmvWGPu18&dib_tag=se&ext_vrnc=hi&hvadid=716763516382&hvdev=c&hvlocphy=9062238&hvnetw=g&hvqmt=e&hvrand=16139619863428242342&hvtargid=kwd-299610469639&hydadcr=23844_2402984&keywords=harry+potter+amazon&nsdOptOutParam=true&qid=1732089043&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=10">
          <button className="buy-btn" >Buy Now</button> </a>
        </div>
      </section>

      <section className="genres">
        <h2>Pick a Genre</h2>
        <div className="genre-grid">
          <div className="genre-card">
            <img src="https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/lord_of_the_rings_fellowship_of_the_ring_2000x3000.jpg" alt="Fantasy" />
            <p>Fantasy</p>
          </div>
          <div className="genre-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJLu8kTQbr6YZDYwU9MU780xTB_f2YFIcvg&s" alt="Philosophical Fiction" />
            <p>Philosophical Fiction</p>
          </div>
          <div className="genre-card">
            <img src="https://m.media-amazon.com/images/I/71KcUgYanhL._AC_UF1000,1000_QL80_.jpg" alt="Drama" />
            <p>Drama</p>
          </div>
          <div className="genre-card">
            <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388189325i/43877.jpg" alt="Non-Ficitonal" />
            <p>Non-Fictional</p>
          </div>
          <div className="genre-card">
            <img src="https://m.media-amazon.com/images/I/91dDv9WOcFL._AC_UF350,350_QL50_.jpg" alt="Mystery" />
            <p>Mystery</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Book. All rights reserved.</p>
        
        <nav>
        <div className="foot">
          <a href="#about">About</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#contact">Contact Us</a>
          </div>
        </nav>
        
      </footer>
    </div>
  );
};

export default Homepage;
