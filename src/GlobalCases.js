class GlobalCases {
    constructor() {
        this.container = document.createElement("div");
        this.amountText = document.createElement("div");
    }

    render() {
        const casesText = document.createElement("div");
        this.container.classList.add("global__container");
        this.amountText.classList.add("global__container__amount");
        casesText.classList.add("global__container__text");
        casesText.innerText = `Global Cases`;
        this.container.appendChild(casesText);
        this.container.appendChild(this.amountText);

        this.getData();
        return this.container;
    }

    async getData() {
        const res = await fetch(`https://disease.sh/v3/covid-19/all`);
        const data = await res.json();
        this.amountText.textContent = `${data.cases.toLocaleString()}`;
    }
}

export default GlobalCases;
