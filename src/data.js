import { faker } from "@faker-js/faker";

let companies, productMap;
companies = JSON.parse(window.localStorage.getItem("companies"));
productMap = JSON.parse(window.localStorage.getItem("productMap"));

if (!companies || !productMap) {
  companies = new Array(50).fill("").map(() => {
    return faker.company.companyName();
  });
  window.localStorage.setItem("companies", JSON.stringify(companies));

  productMap = companies.reduce((acc, company) => {
    acc[company] = new Array(Math.ceil(Math.random() * 3))
      .fill("-")
      .map(() => faker.commerce.productName());
    return acc;
  }, {});
  window.localStorage.setItem("productMap", JSON.stringify(productMap));
}

export { companies, productMap };
