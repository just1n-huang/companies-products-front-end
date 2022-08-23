import { companies, productMap } from "./data.js";
import { render } from "./render";
const companyList = document.querySelector("#company-list");

let curr = window.location.hash.slice(1) * 1;
const _render = () => {
  render({ companyList, companies, productMap, curr });
};

_render();

window.addEventListener("hashchange", () => {
  curr = window.location.hash.slice(1) * 1;
  console.log(curr);
  _render({ companyList, companies, productMap, curr });
});
