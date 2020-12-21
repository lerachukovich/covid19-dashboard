class CasesByCountry {
    constructor() {
        this.container = document.createElement("div");
        this.containerText = document.createElement("p");
        this.countriesContainer = document.createElement("div");
        // this.flag = document.createElement("img");
        this.data = {};
    }

    render() {
        this.container.classList.add("cases-by-country");
        this.containerText.classList.add("cases-by-country__text");
        this.containerText.innerText = `Cases By Country`;

        this.countriesContainer.classList.add("cases-by-country__container");

        this.container.appendChild(this.containerText);
        // this.container.appendChild(this.flag);
        this.container.appendChild(this.countriesContainer);


        this.getData().then( content => {

            content.forEach( (elem, i) => {
                const totalByCountryContainer = document.createElement("div");
                const casesTotal = document.createElement("p");
                const country = document.createElement("p");
                const flag = document.createElement("img");

                totalByCountryContainer.classList.add("cases-by-country__total");
                casesTotal.classList.add("cases-total");
                country.classList.add("country-name");
                flag.classList.add("flag__image");

                flag.src = `${elem.countryInfo.flag}`;
                casesTotal.innerText = `${elem.cases.toLocaleString()}`;
                country.innerText = `${elem.country}`;

                totalByCountryContainer.appendChild(casesTotal);
                totalByCountryContainer.appendChild(country);
                totalByCountryContainer.appendChild(flag);
                this.countriesContainer.appendChild(totalByCountryContainer);
            });


            }
        )



        return this.container;
    }
    async getData(){
        const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
        this.data = await res.json();
        return this.data;
    }
}

export default CasesByCountry;
