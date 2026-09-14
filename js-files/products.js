const products = [
    {
        id: 1,
        img: './HTML-graphics/procreate-logo.png',
        title: "Procreate",
        desc: "",
        link: "https://procreate.com/",
        type_category: ["all", "drawing", "animation"],
        price_category: ["all", "one-time-payment"]
    },
    {
        id: 2,
        img: './HTML-graphics/ibispaint-logo.webp',
        title: "Ibis Paint X",
        desc: "",
        link: "https://ibispaint.com/about.jsp?lang=en",
        type_category: ["all", "drawing"],
        price_category: ["all", "free"]
    },
    {
        id: 3,
        img: './HTML-graphics/clipstudiopaint_logo.png',
        title: "Clip Studio Paint",
        desc: "",
        link: "https://www.clipstudio.net/en/",
        type_category: ["all", "drawing", "animation"],
        price_category: ["all", "one-time-payment", "subscription-based"]
    },
    {
        id: 4,
        img: './HTML-graphics/adobefresco_logo.webp',
        title: "Adobe Fresco",
        desc: "",
        link: "https://www.adobe.com/au/products/fresco.html",
        type_category: ["all", "drawing", "animation"],
        price_category: ["all", "free"]
    },
    {
        id: 5,
        img: './HTML-graphics/krita_logo.webp',
        title: "Krita",
        desc: "",
        link: "https://krita.org/en/",
        type_category: ["all", "drawing", "animation"],
        price_category: ["all", "free"]
    },
    {
        id: 6,
        img: '',
        title: "Colour Adobe",
        desc: "",
        link: "https://color.adobe.com/create/color-wheel",
        type_category: ["all", ""],
        price_category: ["all", ""]
    },
    {
        id: 3,
        img: '',
        title: "Coolors",
        desc: "",
        link: "https://coolors.co/",
        type_category: ["all", ],
        price_category: ["all", ""]
    },
    {
        id: 3,
        img: '',
        title: "Wiggly Paint",
        desc: "",
        link: "https://internet-janitor.itch.io/wigglypaint",
        type_category: ["all", ],
        price_category: ["all", ""]
    },
    {
        id: 3,
        img: '',
        title: "Effect.App",
        desc: "",
        link: "https://effect.app/",
        type_category: ["all", ],
        price_category: ["all", ""]
    },
    {
        id: 3,
        img: '',
        title: "Salvaged.NU",
        desc: "",
        link: "https://salvaged.nu/",
        type_category: ["all", ],
        price_category: ["all", ""]
    },
    {
        id: 3,
        img: '',
        title: "Character Design References",
        desc: "",
        link: "https://characterdesignreferences.com/",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
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