class CasesList {
    constructor() {
        this.casesTitle = document.createElement("p");
        this.deathsTitle = document.createElement("p");
        this.recoveredTitle = document.createElement("p");

        this.container = document.createElement("div");
        this.sliderGallery = document.createElement("div");
        this.sliderItems = document.createElement("div");

        this.buttonsContainer = document.createElement("div");
        this.leftButton = document.createElement("button");
        this.rightButton = document.createElement("button");

        this.casesContainer = document.createElement("div");
        this.deathsContainer = document.createElement("div");
        this.recoveredContainer = document.createElement("div");
        this.data = {};
    }

    render() {
        //общий большой контейнер
        this.container.classList.add("slider-cases");
        //название элемента слайдера
        this.sliderGallery.classList.add("slider__gallery");
        this.sliderItems.classList.add("slider__items");
        this.casesTitle.classList.add("cases__title");
        this.deathsTitle.classList.add("deaths__title");
        this.recoveredTitle.classList.add("recovered__title");

        //контейнер для всех стран
        this.casesContainer.classList.add("slider-cases__inner__container");
        this.deathsContainer.classList.add("slider-deaths__inner__container");
        this.recoveredContainer.classList.add("slider-recovered__inner__container");
        this.leftButton.innerText = `<`;
        this.rightButton.innerText = '>';
        this.leftButton.classList.add("left__btn");
        this.rightButton.classList.add("right__btn");

        this.casesContainer.appendChild(this.casesTitle);
        this.deathsContainer.appendChild(this.deathsTitle);
        this.recoveredContainer.appendChild(this.recoveredTitle);

        this.container.appendChild(this.sliderGallery).appendChild(this.sliderItems);
        this.container.appendChild(this.buttonsContainer);
        this.buttonsContainer.appendChild(this.leftButton);
        this.buttonsContainer.appendChild(this.rightButton);
        this.sliderItems.appendChild(this.casesContainer);
        this.sliderItems.appendChild(this.deathsContainer);
        this.sliderItems.appendChild(this.recoveredContainer);


        this.getData().then(content => {
            content.forEach( (elem, i) => {
                const totalByCountryContainer = document.createElement("div");
                const casesTotal = document.createElement("p");
                const country = document.createElement("p");
                const flag = document.createElement("img");
                //контейнер для каждой страны
                totalByCountryContainer.classList.add("slider-cases__country__container");
                casesTotal.classList.add("cases-total");
                country.classList.add("country-name");
                flag.classList.add("flag__image");

                flag.src = `${elem.countryInfo.flag}`;
                casesTotal.innerText = `${elem.cases.toLocaleString()}`;
                country.innerText = `${elem.country}`;
                this.casesTitle.innerText = `Total cases`;


                totalByCountryContainer.appendChild(casesTotal);
                totalByCountryContainer.appendChild(country);
                totalByCountryContainer.appendChild(flag);
                this.casesContainer.appendChild(totalByCountryContainer);
            });
            content.forEach((elem, i) => {
                const totalByCountryContainer = document.createElement("div");
                const casesTotal = document.createElement("p");
                const country = document.createElement("p");
                const flag = document.createElement("img");
                //контейнер для каждой страны
                totalByCountryContainer.classList.add("slider-deaths__country__container");
                casesTotal.classList.add("death-cases");
                country.classList.add("country-name");
                flag.classList.add("flag__image");
                this.deathsTitle.innerText = 'Total deaths';

                flag.src = `${elem.countryInfo.flag}`;
                casesTotal.innerText = `${elem.deaths.toLocaleString()}`;
                country.innerText = `${elem.country}`;

                totalByCountryContainer.appendChild(casesTotal);
                totalByCountryContainer.appendChild(country);
                totalByCountryContainer.appendChild(flag);
                this.deathsContainer.appendChild(totalByCountryContainer);
            });
            content.forEach((elem, i) => {
                const totalByCountryContainer = document.createElement("div");
                const casesTotal = document.createElement("p");
                const country = document.createElement("p");
                const flag = document.createElement("img");
                this.recoveredTitle.innerText = 'Total recovered';

                //контейнер для каждой страны
                totalByCountryContainer.classList.add("slider-recovered__country__container");
                casesTotal.classList.add("recovered-cases");
                country.classList.add("country-name");
                flag.classList.add("flag__image");

                flag.src = `${elem.countryInfo.flag}`;
                casesTotal.innerText = `${elem.recovered.toLocaleString()}`;
                country.innerText = `${elem.country}`;

                totalByCountryContainer.appendChild(casesTotal);
                totalByCountryContainer.appendChild(country);
                totalByCountryContainer.appendChild(flag);
                this.recoveredContainer.appendChild(totalByCountryContainer);
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

export default CasesList;
