const products = [
    {
        id: 1,
        img: './HTML-graphics/procreate-logo.png',
        title: "Procreate",
        desc: "",
        link: "https://procreate.com/",
        type_category: ["drawing"],
        price_category: "one-time-payment"
    },
    {
        id: 2,
        img: '',
        title: "Ibis Paint",
        desc: "",
        link: "",
        type_category: ["drawing"],
        price_category: "free"
    },
    {
        id: 3,
        img: '',
        title: "Clip Studio Paint",
        desc: "",
        link: "",
        type_category: ["drawing"],
        price_category: ""
    },
    {
        id: 4,
        img: '',
        title: "Adobe Fresco",
        desc: "",
        link: "",
        type_category: [""],
        price_category: ""
    },
    {
        id: 5,
        img: '',
        title: "Krita",
        desc: "",
        link: "",
        type_category: ["drawing", "animation"],
        price_category: "free"
    },
    {
        id: 6,
        img: '',
        title: "Clip Studio Paint ",
        desc: "",
        link: "",
        type_category: [""],
        price_category: ""
    },
    {
        id: 3,
        img: '',
        title: "Clip Studio Paint ",
        desc: "",
        link: "",
        type_category: [""],
        price_category: ""
    },

]

const grid = document.querySelector('.grid')

const renderProds = (arr) => {
    grid.innerHTML = "";

    arr.forEach(prod => {
        grid.innerHTML += `
            <div class="card" data-id="${prod.id}">
                <img src="${prod.img}" alt="Procreate" loading="lazy">
                <div class="card-content"> 
                    <h3>${prod.title}</h3>
                    <p>${prod.desc}</p>
                    <a class="button" href="${prod.link}">Check it out!</a>
                </div>
          </div>`
    })
}

renderProds(products)

const priceSelect = document.querySelector("#priceFilter");
const typeSelect = document.querySelector("#typeFilter");


function filterProducts() {
    const selectedPrice = priceSelect.value;
    const selectedType = typeSelect.value;

    let filteredProducts;

    if (selectedPrice === 'all' && selectedType === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(prod =>
            prod.price_category === selectedPrice&&
            prod.type_category.includes(selectedType));
    }

    renderProds(filteredProducts);
}

priceSelect.addEventListener('change', filterProducts)
typeSelect.addEventListener('change', filterProducts)