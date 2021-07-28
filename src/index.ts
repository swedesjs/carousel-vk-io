import { Keyboard } from "vk-io"
import { carouselParams } from "./types"

export class CarouselBuilder {
  private carousel = {
    type: "carousel",
    elements: [] as carouselParams[]
  }

  addElements(params: carouselParams) {
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
  Carousel.builder().addElements({
    buttons: Keyboard.builder().textButton({
      label: "text"
    })
  })
)
