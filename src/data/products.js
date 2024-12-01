import { faker } from "@faker-js/faker";

export const products = Array.from({ length: 20 }, () => {
    return {
      productName: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
    };
  });
  