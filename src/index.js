import './styles/style.less';
import GlobalCases from "./GlobalCases";
import CasesByCountry from "./CasesByCountry";
import Map from "./Map";

window.addEventListener('load', function () {
    let globalCases = new GlobalCases();
    let casesByCountry = new CasesByCountry();
    casesByCountry.getData();
    let map = new Map();
    document.body.appendChild(globalCases.render());
    document.body.appendChild(casesByCountry.render());
    document.body.appendChild(map.render());
});

