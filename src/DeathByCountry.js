class DeathByCountry {
    constructor() {
        this.container = document.createElement("div");
        this.containerTitle = document.createElement("p");
        this.deathCasesContainer = document.createElement("div");
        this.data = {};
    }
    render() {
        this.container.classList.add("death-cases__container");
        this.containerTitle.classList.add("cases-by-country__text");
        this.containerTitle.innerText = `Global Deaths`;
        this.deathCasesContainer.classList.add("death-cases-by-country__container");

        this.container.appendChild(this.containerTitle);
        this.container.appendChild(this.deathCasesContainer);

        this.getData().then( content => {
                content.forEach( (elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");

                    totalByCountryContainer.classList.add("death-cases-by-country");
                    casesTotal.classList.add("death-cases");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${elem.deaths.toLocaleString()} deaths`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.deathCasesContainer.appendChild(totalByCountryContainer);
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

export default DeathByCountry;
