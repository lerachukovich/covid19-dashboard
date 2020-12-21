import './styles/style.less';
import GlobalCases from "./GlobalCases";
import CasesByCountry from "./CasesByCountry";
import Map from "./Map";
import DeathByCountry from "./DeathByCountry";
import RecoveredByCountry from "./RecoveredByCountry";

const leftContainer = document.createElement("div");
const rightContainer = document.createElement("div");
leftContainer.classList.add("left__container");
rightContainer.classList.add("right__container");

window.addEventListener('load', function () {
    let globalCases = new GlobalCases();
    let casesByCountry = new CasesByCountry();
    casesByCountry.getData();
    let map = new Map();
    let deathByCountry = new DeathByCountry();
    let recoveredByCountry = new RecoveredByCountry();

    document.body.appendChild(leftContainer);
    leftContainer.appendChild(globalCases.render());
    leftContainer.appendChild(casesByCountry.render());
    document.body.appendChild(map.render());
    document.body.appendChild(rightContainer);
    rightContainer.appendChild(deathByCountry.render());
    rightContainer.appendChild(recoveredByCountry.render());
});

