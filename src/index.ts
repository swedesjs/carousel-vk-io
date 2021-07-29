import { Keyboard } from "vk-io"
import { carouselParams, props } from "./types"

export class CarouselBuilder {
  private carousel = {
    type: "carousel",
    elements: [] as props[]
  }

  addElements<T extends props>(params: carouselParams<T>) {
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
      buttons: Keyboard.builder(),
      action: {
        type: "open_photo"
      }
    })
    .toJSON()
)
