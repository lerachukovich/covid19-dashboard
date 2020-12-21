class RecoveredByCountry {
    constructor() {
        this.container = document.createElement("div");
        this.containerTitle = document.createElement("p");
        this.recoveredCasesContainer = document.createElement("div");
        this.data = {};
    }
    render() {
        this.container.classList.add("recovered-cases__container");
        this.containerTitle.classList.add("cases-by-country__text");
        this.containerTitle.innerText = `Global Recovered`;
        this.recoveredCasesContainer.classList.add("recovered-cases-by-country__container");

        this.container.appendChild(this.containerTitle);
        this.container.appendChild(this.recoveredCasesContainer);

        this.getData().then( content => {
                content.forEach( (elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");

                    totalByCountryContainer.classList.add("recovered-cases-by-country");
                    casesTotal.classList.add("recovered-cases");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${elem.recovered.toLocaleString()} recovered`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.recoveredCasesContainer.appendChild(totalByCountryContainer);
                });
            }
        )
        return this.container;
    }
    async getData() {
        const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
        this.data = await res.json();
        return this.data;
    }
}

export default RecoveredByCountry;
