const products = [
    {
        id: 1,
        img: './HTML-graphics/procreate-logo.png',
        title: "Procreate",
        desc: "Digital illustration app with +300 library of in-built brushes with robust layering, blend modes and filter effects. Widely regarded as the most popular and used drawing app due to its simple interface and extensive features.",
        link: "https://procreate.com/",
        type_category: ["all", "drawing", "animation"],
        price_category: ["all", "one-time-payment"]
    },
    {
        id: 2,
        img: './HTML-graphics/clipstudiopaint_logo.png',
        title: "Clip Studio Paint",
        desc: "",
        link: "https://www.clipstudio.net/en/",
        type_category: ["all", "drawing", "animation"],
        price_category: ["all", "one-time-payment", "subscription-based"]
    },
    {
        id: 3,
        img: './HTML-graphics/adobefresco_logo.webp',
        title: "Adobe Fresco",
        desc: "",
        link: "https://www.adobe.com/au/products/fresco.html",
        type_category: ["all", "drawing", "animation"],
        price_category: ["all", "free"]
    },
    {
        id: 4,
        img: './HTML-graphics/ibispaint-logo.webp',
        title: "Ibis Paint X",
        desc: "",
        link: "https://ibispaint.com/about.jsp?lang=en",
        type_category: ["all", "drawing"],
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
        img: './HTML-graphics/colouradobe-logo.png',
        title: "Colour Adobe",
        desc: "Generate or browse through random 5 colour palette combinations with filters for selecting types of colour harmonies. Features like contrast checker and extracting colour palettes/gradients from imported images are also available.",
        link: "https://color.adobe.com/create/color-wheel",
        type_category: ["all", "other"],
        price_category: ["all", ""]
    },
    {
        id: 7,
        img: './HTML-graphics/coolors-logo.png',
        title: "Coolors",
        desc: "Generate or browse through 5 colour palette combinations through an easy and interactive interface by inputting key words and themes.",
        link: "https://coolors.co/",
        type_category: ["all", "other"],
        price_category: ["all", ""]
    },
    {
        id: 8,
        img: './HTML-graphics/wigglypaint-logo.gif',
        title: "Wiggly Paint",
        desc: "",
        link: "https://internet-janitor.itch.io/wigglypaint",
        type_category: ["all", "drawing"],
        price_category: ["all", ""]
    },
    {
        id: 9,
        img: './HTML-graphics/effectapp-logo.png',
        title: "Effect.App",
        desc: "Apply 40+ professional real-time effects to images and videos including thermal, texture blur, emboss, colour grading etc.",
        link: "https://effect.app/",
        type_category: ["all", "image-video-editing"],
        price_category: ["all", ""]
    },
    {
        id: 10,
        img: './HTML-graphics/salvagednu-logo.jpeg',
        title: "Salvaged.NU",
        desc: "",
        link: "https://salvaged.nu/",
        type_category: ["all", "textures-graphics"],
        price_category: ["all", ""]
    },
    {
        id: 11,
        title: "Character Design References",
        desc: "",
        img: './HTML-graphics/characterdesignreferences-logo.webp',
        link: "https://characterdesignreferences.com/",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
    },
    {
        id: 12,
        title: "SketchDaily Reference",
        desc: "Features a large collection of full body/targeted body parts/animal/structure/vegetation references with filters on sex/clothing and a time button for fast caricature figure drawing to longer study sessions. There is also an option to add your own collection of images.",
        img: './HTML-graphics/sketchdailyreference-logo.png',
        link: "https://www.sketchdaily.net/",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
    },
    {
        id: 13,
        title: "Line of Action",
        desc: "Features real-life images of people in poses/faces/basic shapes and still life/hand feet/animal/environment references that can be censored or uncensored with optional timers to practice fast figure drawing/caricature",
        img: './HTML-graphics/lineofaction-logo.png',
        link: "https://line-of-action.com/",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
    },
    {
        id: 14,
        title: "POSEMANIACS",
        desc: "",
        img: './HTML-graphics/posemaniacs-logo.png',
        link: "https://www.posemaniacs.com/",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
    },
    {
        id: 15,
        title: "Quickposes",
        desc: "",
        img: './HTML-graphics/quickposes-logo.png',
        link: "https://quickposes.com/en",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
    },
    {
        id: 16,
        title: "Adorkastock",
        desc: "",
        img: './HTML-graphics/adorkastock-logo.png',
        link: "https://www.adorkastock.com/pose/",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
    },
    {
        id: 17,
        title: "TrueRef",
        desc: "",
        img: './HTML-graphics/trueref-logo.jpg',
        link: "https://trueref.io/",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
    },
    {
        id: 18,
        title: "Just Sketch Me",
        desc: "3D reference modelling application with vast gallery of models, props and premade poses with lighting and scene tools.",
        img: './HTML-graphics/justsketchme-logo.jpg',
        link: "https://justsketch.me/",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
    },
    {
        id: 19,
        title: "Skelly",
        desc: "3D interactive model of skeleton that is fully poseable with a rotatable camera with variable lighting sources.",
        img: './HTML-graphics/skelly-logo.png',
        link: "https://www.proko.com/skellyapp",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
    },
    {
        id: 20,
        title: "VGen",
        desc: "",
        img: './HTML-graphics/vgen-logo.png',
        link: "https://vgen.co/",
        type_category: ["all", "commissions"],
        price_category: ["all", ""]
    },
    {
        id: 21,
        title: "Dimensions",
        desc: "Features a vast collection of 3D model references and standard measurements for everyday objects and structures for reference when drawing environments and everday spaces",
        img: './HTML-graphics/dimensions-logo.png',
        link: "https://www.dimensions.com/?r=0",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
    },
    {
        id: 22,
        title: "Posemyart",
        desc: "",
        img: './HTML-graphics/posemyart-logo.png',
        link: "https://posemy.art/app/",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
    },
    {
        id: 23,
        title: "Animal Photo Art References by x6ud",
        desc: "",
        img: './HTML-graphics/animalreference-logo.png',
        link: "https://x6ud.github.io/#/",
        type_category: ["all", "croquis-reference"],
        price_category: ["all", ""]
    },
    {
        id: 24,
        title: "Toyhouse",
        desc: "",
        img: './HTML-graphics/toyhouse-logo.webp',
        link: "https://toyhou.se/",
        type_category: ["all", "commissions"],
        price_category: ["all", ""]
    },
    {
        id: 25,
        title: "Ctrl Paint",
        desc: "Large library of comprehensive video tutorials for digital art and illustration in general with slow demos and explanations by professional artist and youtuber Ctrl+Paint.",
        img: './HTML-graphics/ctrlpaint-logo.jpg',
        link: "https://toyhou.se/",
        type_category: ["all", "other"],
        price_category: ["all", ""]
    },
    {
        id: 26,
        title: "Flim",
        desc: "",
        img: './HTML-graphics/flim-logo.png',
        link: "https://app.flim.ai/",
        type_category: ["all", "other"],
        price_category: ["all", ""]
    },
    {
        id: 27,
        title: "Heavy Paint",
        desc: "",
        img: './HTML-graphics/heavypaint-logo.png',
        link: "https://www.heavypaint.com/hp3-3/",
        type_category: ["all", "drawing"],
        price_category: ["all", ""]
    },
    {
        id: 28,
        title: "Online Image Editor",
        desc: "",
        img: './HTML-graphics/onlineimageeditor-logo.png',
        link: "https://toyhou.se/",
        type_category: ["all", "image-video-editing"],
        price_category: ["all", ""]
    },
    {
        id: 29,
        title: "Frutiger Aero Archive",
        desc: "",
        img: './HTML-graphics/frutigeraeroarchive-logo.png',
        link: "https://frutigeraeroarchive.org/resources",
        type_category: ["all", "textures-graphics"],
        price_category: ["all", ""]
    },
    {
        id: 30,
        title: "Texture Labs",
        desc: "",
        img: './HTML-graphics/texturelabs-logo.jpeg',
        link: "https://texturelabs.org/",
        type_category: ["all", "textures-graphics"],
        price_category: ["all", ""]
    },
    {
        id: 31,
        title: "Cosmos",
        desc: "",
        img: './HTML-graphics/cosmos-logo.png',
        link: "https://www.cosmos.so/explore/art",
        type_category: ["all", "other"],
        price_category: ["all", ""]
    },
    {
        id: 32,
        title: "Film Grab",
        desc: "",
        img: './HTML-graphics/filmgrab-logo.png',
        link: "https://film-grab.com/",
        type_category: ["all", "other"],
        price_category: ["all", ""]
    },
    {
        id: 33,
        title: "Blinkies Cafe",
        desc: "Generate customised blinkies (150 x 20-pixel animated gifs) that can be used for personalised websites, blogs and About Me pages in sites like Artfight.",
        img: './HTML-graphics/blinkiescafe-logo.png',
        link: "https://blinkies.cafe/",
        type_category: ["all", "other"],
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