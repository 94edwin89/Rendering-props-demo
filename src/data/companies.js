import { faker } from "@faker-js/faker";

export const companies = Array.from({ length: 15 }, () => {
    return {
      companyName: faker.company.name(),
      phrase: faker.company.catchPhrase(),
    };
  });