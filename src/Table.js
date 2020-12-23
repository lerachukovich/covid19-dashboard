class Table {
    constructor() {
        this.container = document.createElement("div");
        this.sliderGallery = document.createElement("div");
        this.sliderItems = document.createElement("div");
        this.buttonsContainer = document.createElement("div");
        this.leftButton = document.createElement("button");
        this.rightButton = document.createElement("button");
        this.casesTitle = document.createElement("p");
        this.deathsTitle = document.createElement("p");
        this.recoveredTitle = document.createElement("p");
        this.lastCasesTitle = document.createElement("p");
        this.lastDeathsTitle = document.createElement("p");
        this.lastRecoveredTitle = document.createElement("p");
        this.casesPer100Title = document.createElement("p");
        this.deathsPer100Title = document.createElement("p");
        this.recoveredPer100Title = document.createElement("p");
        this.lastCasesPer100Title = document.createElement("p");
        this.lastDeathsPer100Title = document.createElement("p");
        this.lastRecoveredPer100Title = document.createElement("p");
        this.casesContainer = document.createElement("div");
        this.deathsContainer = document.createElement("div");
        this.recoveredContainer = document.createElement("div");
        this.lastCasesContainer = document.createElement("div");
        this.lastDeathsContainer = document.createElement("div");
        this.lastRecoveredContainer = document.createElement("div");
        this.casesPer100Container = document.createElement("div");
        this.deathsPer100Container = document.createElement("div");
        this.recoveredPer100Container = document.createElement("div");
        this.lastCasesPer100Container = document.createElement("div");
        this.lastDeathsPer100Container = document.createElement("div");
        this.lastRecoveredPer100Container = document.createElement("div");
        this.data = {};
    }

    render() {
        this.container.classList.add("slider-cases");
        this.sliderGallery.classList.add("slider__gallery");
        this.sliderItems.classList.add("slider__items");
        this.buttonsContainer.classList.add("buttons__container");
        this.casesContainer.classList.add("inner__container");
        this.deathsContainer.classList.add("inner__container");
        this.recoveredContainer.classList.add("inner__container");
        this.lastCasesContainer.classList.add("inner__container");
        this.lastDeathsContainer.classList.add("inner__container");
        this.lastRecoveredContainer.classList.add("inner__container");
        this.casesPer100Container.classList.add("inner__container");
        this.deathsPer100Container.classList.add("inner__container");
        this.recoveredPer100Container.classList.add("inner__container");
        this.lastCasesPer100Container.classList.add("inner__container");
        this.lastDeathsPer100Container.classList.add("inner__container");
        this.lastRecoveredPer100Container.classList.add("inner__container");
        this.leftButton.innerText = `<`;
        this.rightButton.innerText = '>';
        this.leftButton.classList.add("left__btn");
        this.rightButton.classList.add("right__btn");
        this.casesContainer.appendChild(this.casesTitle);
        this.deathsContainer.appendChild(this.deathsTitle);
        this.recoveredContainer.appendChild(this.recoveredTitle);
        this.lastCasesContainer.appendChild(this.lastCasesTitle);
        this.lastDeathsContainer.appendChild(this.lastDeathsTitle);
        this.lastRecoveredContainer.appendChild(this.lastRecoveredTitle);
        this.casesPer100Container.appendChild(this.casesPer100Title);
        this.deathsPer100Container.appendChild(this.deathsPer100Title);
        this.recoveredPer100Container.appendChild(this.recoveredPer100Title);
        this.lastCasesPer100Container.appendChild(this.lastCasesPer100Title);
        this.lastDeathsPer100Container.appendChild(this.lastDeathsPer100Title);
        this.lastRecoveredPer100Container.appendChild(this.lastRecoveredPer100Title);
        this.container.appendChild(this.sliderGallery).appendChild(this.sliderItems);
        this.container.appendChild(this.buttonsContainer);
        this.buttonsContainer.appendChild(this.leftButton);
        this.buttonsContainer.appendChild(this.rightButton);
        this.sliderItems.appendChild(this.casesContainer);
        this.sliderItems.appendChild(this.deathsContainer);
        this.sliderItems.appendChild(this.recoveredContainer);
        this.sliderItems.appendChild(this.lastCasesContainer);
        this.sliderItems.appendChild(this.lastDeathsContainer);
        this.sliderItems.appendChild(this.lastRecoveredContainer);
        this.sliderItems.appendChild(this.casesPer100Container);
        this.sliderItems.appendChild(this.deathsPer100Container);
        this.sliderItems.appendChild(this.recoveredPer100Container);
        this.sliderItems.appendChild(this.lastCasesPer100Container);
        this.sliderItems.appendChild(this.lastDeathsPer100Container);
        this.sliderItems.appendChild(this.lastRecoveredPer100Container);


        this.getData().then(content => {
                content.forEach( (elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");
                    this.casesTitle.innerText = `Total cases`;
                    totalByCountryContainer.classList.add("country__container");
                    casesTotal.classList.add("cases-total");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${elem.cases.toLocaleString()}`;
                    country.innerText = `${elem.country}`;


                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.casesContainer.appendChild(totalByCountryContainer);
                });
                content.forEach((elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");
                    this.deathsTitle.innerText = `Total deaths`;

                    totalByCountryContainer.classList.add("country__container");
                    casesTotal.classList.add("death-cases");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${elem.deaths.toLocaleString()}`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.deathsContainer.appendChild(totalByCountryContainer);
                });
                content.forEach((elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");
                    this.recoveredTitle.innerText = `Total recovered`;

                    totalByCountryContainer.classList.add("country__container");
                    casesTotal.classList.add("recovered-cases");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${elem.recovered.toLocaleString()}`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.recoveredContainer.appendChild(totalByCountryContainer);
                })

                content.forEach((elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");
                    this.lastCasesTitle.innerText = `Last day cases`;

                    totalByCountryContainer.classList.add("country__container");
                    casesTotal.classList.add("cases-total");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${elem.todayCases.toLocaleString()}`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.lastCasesContainer.appendChild(totalByCountryContainer);
                })
                content.forEach((elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");
                    this.lastDeathsTitle.innerText = `Last day deaths`;

                    totalByCountryContainer.classList.add("country__container");
                    casesTotal.classList.add("death-cases");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${elem.todayDeaths.toLocaleString()}`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.lastDeathsContainer.appendChild(totalByCountryContainer);
                })
                content.forEach((elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");
                    this.lastRecoveredTitle.innerText = `Last day recovered`;

                    totalByCountryContainer.classList.add("country__container");
                    casesTotal.classList.add("recovered-cases");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${elem.todayRecovered.toLocaleString()}`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.lastRecoveredContainer.appendChild(totalByCountryContainer);
                })

                content.forEach((elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");
                    this.casesPer100Title.innerText = `Number of cases per 100.000 population`;

                    totalByCountryContainer.classList.add("country__container");
                    casesTotal.classList.add("cases-total");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${Math.round(elem.cases / elem.population * 100000)}`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.casesPer100Container.appendChild(totalByCountryContainer);
                })
                content.forEach((elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");
                    this.deathsPer100Title.innerText = `Number of deaths per 100.000 population`;

                    totalByCountryContainer.classList.add("country__container");
                    casesTotal.classList.add("death-cases");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${Math.round(elem.deaths / elem.population * 100000)}`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.deathsPer100Container.appendChild(totalByCountryContainer);
                })
                content.forEach((elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");
                    this.recoveredPer100Title.innerText = `Number of recovered per 100.000 population`;

                    totalByCountryContainer.classList.add("country__container");
                    casesTotal.classList.add("recovered-cases");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${Math.round(elem.recovered / elem.population * 100000)}`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.recoveredPer100Container.appendChild(totalByCountryContainer);
                })

                content.forEach((elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");
                    this.lastCasesPer100Title.innerText = `Last day cases per 100.000 population`;

                    totalByCountryContainer.classList.add("country__container");
                    casesTotal.classList.add("cases-total");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${Math.round(elem.todayCases / elem.population * 100000)}`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.lastCasesPer100Container.appendChild(totalByCountryContainer);
                })
                content.forEach((elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");
                    this.lastDeathsPer100Title.innerText = `Last day deaths per 100.000 population`;

                    totalByCountryContainer.classList.add("country__container");
                    casesTotal.classList.add("death-cases");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${Math.round(elem.todayDeaths / elem.population * 100000)}`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.lastDeathsPer100Container.appendChild(totalByCountryContainer);
                })

                content.forEach((elem, i) => {
                    const totalByCountryContainer = document.createElement("div");
                    const casesTotal = document.createElement("p");
                    const country = document.createElement("p");
                    this.lastRecoveredPer100Title.innerText = `Last day recovered per 100.000 population`;

                    totalByCountryContainer.classList.add("country__container");
                    casesTotal.classList.add("recovered-cases");
                    country.classList.add("country-name");

                    casesTotal.innerText = `${Math.round(elem.todayRecovered / elem.population * 100000)}`;
                    country.innerText = `${elem.country}`;

                    totalByCountryContainer.appendChild(casesTotal);
                    totalByCountryContainer.appendChild(country);
                    this.lastRecoveredPer100Container.appendChild(totalByCountryContainer);
                })

            }
        );

        this.renderSlider();
        return this.container;
    }

    renderSlider() {
        let widthOfElement = 500;
        let countOfElements = 1;
        let sliderList = this.sliderItems;
        let listItems = this.sliderItems.querySelectorAll('div');
        let position = 0;
        this.leftButton.addEventListener("click", () => {
            position += widthOfElement * countOfElements;
            position = Math.min(position, 0);
            sliderList.style.marginLeft = `${position}px`;
        });
        this.rightButton.addEventListener("click", () => {
            position -= widthOfElement * countOfElements;
            position = Math.max(position, -widthOfElement * (listItems.length - countOfElements));
            sliderList.style.marginLeft = `${position}px`;
        });
    }

    async getData() {
        const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
        this.data = await res.json();
        return this.data;
    }
}

export default Table;
