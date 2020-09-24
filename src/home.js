import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cerva from "./imagem/cerva.jpeg";
import imperio from "./imagem/imperio.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel autoPlay>
          <div>
            <img alt="Cerva" src={cerva} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img alt="Imperio" src={imperio} />
            <p className="legend">Legend 2</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
