import './styles/style.less';
import GlobalCases from "./GlobalCases";
import CasesList from "./CasesList";
import Map from "./Map";
import Table from "./Table";

const leftContainer = document.createElement("div");
const rightContainer = document.createElement("div");
leftContainer.classList.add("left__container");
rightContainer.classList.add("right__container");

window.addEventListener('load', function () {
    let globalCases = new GlobalCases();
    let casesByCountry = new CasesList();
    casesByCountry.getData();
    let map = new Map();
    let table = new Table();
    table.getData();

    document.body.appendChild(leftContainer);
    leftContainer.appendChild(globalCases.render());
    leftContainer.appendChild(casesByCountry.render());
    document.body.appendChild(map.render());
    document.body.appendChild(rightContainer);
    rightContainer.appendChild(table.render());
});

