import { Keyboard } from "vk-io"
import { CarouselParams, carouselParams, props } from "./types"

export class CarouselBuilder {
  private carousel = {
    type: "carousel",
    elements: []
  }

  addElements(params: CarouselParams) {
    this.carousel.elements.push(params)
    return this
  }

  toJSON() {
    return JSON.stringify(this.carousel)
  }
}

export class Carousel {
  static builder() {
    return new CarouselBuilder()
  }
}

console.log(
  Carousel.builder()
    .addElements({
      title: ""
      // buttons: Keyboard.builder()
    })
    .toJSON()
)
