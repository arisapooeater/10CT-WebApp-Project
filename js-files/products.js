const products = [
    {
        id: 1,
        img: './HTML-graphics/procreate-logo.png',
        title: "Procreate",
        desc: "",
        link: "https://procreate.com/",
        type_category: "",
        price_category: "one-time-payment"
    },
    {
        id: 2,
        img: '',
        title: "Ibis Paint",
        desc: "",
        link: "",
        type_category: "",
        price_category: ""
    },
    {
        id: 3,
        img: '',
        title: "Clip Studio Paint",
        desc: "",
        link: "",
        type_category: "",
        price_category: ""
    },
    {
        id: 4,
        img: '',
        title: "Adobe Fresco",
        desc: "",
        link: "",
        type_category: "",
        price_category: ""
    },
    {
        id: 5,
        img: '',
        title: "Krita",
        desc: "",
        link: "",
        type_category: "",
        price_category: ""
    },
    {
        id: 6,
        img: '',
        title: "Clip Studio Paint ",
        desc: "",
        link: "",
        type_category: "",
        price_category: ""
    },
    {
        id: 3,
        img: '',
        title: "Clip Studio Paint ",
        desc: "",
        link: "",
        type_category: "",
        price_category: ""
    },
    {
        id: 3,
        img: '',
        title: "Clip Studio Paint ",
        desc: "",
        link: "",
        type_category: "",
        price_category: ""
    },
    {
        id: 3,
        img: '',
        title: "Clip Studio Paint ",
        desc: "",
        link: "",
        type_category: "",
        price_category: ""
    },
    {
        id: 3,
        img: '',
        title: "Clip Studio Paint ",
        desc: "",
        link: "",
        type_category: "",
        price_category: ""
    },
    {
        id: 3,
        img: '',
        title: "Clip Studio Paint ",
        desc: "",
        link: "",
        type_category: "",
        price_category: ""
    },
    {
        id: 3,
        img: '',
        title: "Clip Studio Paint ",
        desc: "",
        link: "",
        type_category: "",
        price_category: ""
    },
    {
        id: 3,
        img: '',
        title: "Clip Studio Paint ",
        desc: "",
        link: "",
        type_category: "",
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

const filterSelect = document.querySelector("#categoryFilter");

filterSelect.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;

    let filterProducts;

    if (selectedCategory === 'all') {
        filterProducts = products;
    } else {
        filterProducts = products.filter(prod => prod.price_category === selectedCategory)
    }

    renderProds(filterProducts);
})