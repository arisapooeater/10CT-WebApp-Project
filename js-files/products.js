const products = [
    {
        id: 1,
        img: './HTML-graphics/procreate-logo.png',
        title: "Procreate",
        desc: "Digital illustration app with +300 library of in-built brushes with robust layering, blend modes and filter effects. Widely regarded as the most popular and used drawing app due to its simple interface and extensive features.",
        link: "https://procreate.com/",
        type_category: ["drawing", "animation"],
        price_category: ["one-time-payment"]
    },
    {
        id: 2,
        img: './HTML-graphics/clipstudiopaint_logo.png',
        title: "Clip Studio Paint",
        desc: "Professional-grade illustration, animation and design app with 3D modelling, vector layering, collaboration, comic-making capabilities with inbuilt premade effects, graphics and reference tools.",
        link: "https://www.clipstudio.net/en/",
        type_category: ["drawing", "animation"],
        price_category: ["one-time-payment", "subscription-based"]
    },
    {
        id: 3,
        img: './HTML-graphics/adobefresco_logo.webp',
        title: "Adobe Fresco",
        desc: "Digital illustration and animation app with thousands of raster and vector brushes with inbuilt motion tools for adding movement to illustration, as well as frame-by-frame animation functions. It's advantageous in that it is highly convertible between other Adobe apps like Illustrator and Photoshop.",
        link: "https://www.adobe.com/au/products/fresco.html",
        type_category: ["drawing", "animation"],
        price_category: ["free"]
    },
    {
        id: 4,
        img: './HTML-graphics/ibispaint-logo.webp',
        title: "Ibis Paint X",
        desc: "Illustration app with library of premade objects and backgrounds, and manga or comic-making tools such as screen-tone and frame divider. It also has a community page where you can share your own art processes and custom brushes. It is popular among beginner digital artists, or artists who need an application with capabilities similar to a paid application.",
        link: "https://ibispaint.com/about.jsp?lang=en",
        type_category: ["drawing"],
        price_category: ["free"]
    },
    {
        id: 5,
        img: './HTML-graphics/krita_logo.webp',
        title: "Krita",
        desc: "Professional opensource painting and animation app with extensive brushes, packages, texture packs and plug-ins with powerful 2D animation capabilities including layering, adding audio and fine tuning frames.  Includes a customisable keyboard short-cuts and workspace layout with over 30 dockers. It also has a supportive online community of Krita artists to share artworks and tips.",
        link: "https://krita.org/en/",
        type_category: ["drawing", "animation"],
        price_category: ["free"]
    },
    {
        id: 6,
        img: './HTML-graphics/colouradobe-logo.png',
        title: "Colour Adobe",
        desc: "Generate or browse through random 5 colour palette combinations with filters for selecting types of colour harmonies. Features like contrast checker and extracting colour palettes/gradients from imported images are also available.",
        link: "https://color.adobe.com/create/color-wheel",
        type_category: ["other"],
        price_category: ["free"]
    },
    {
        id: 7,
        img: './HTML-graphics/coolors-logo.png',
        title: "Coolors",
        desc: "Generate or browse through 5 colour palette combinations through an easy and interactive interface by inputting key words and themes.",
        link: "https://coolors.co/",
        type_category: ["other"],
        price_category: ["free", "subscription-based"]
    },
    {
        id: 8,
        img: './HTML-graphics/wigglypaint-logo.gif',
        title: "Wiggly Paint",
        desc: "Experimental drawing program with 8 unique brushes for creating doodles and illustration with a animated 'wiggly' effect with interactive sound effects. Please note that this application was stolen from the original creator Internet Janitor, who created it using Decker on itch.io, and any official websites that are featured from searching it up are stolen versions that support AI.",
        link: "https://internet-janitor.itch.io/wigglypaint",
        type_category: ["drawing"],
        price_category: ["free"]
    },
    {
        id: 9,
        img: './HTML-graphics/effectapp-logo.png',
        title: "Effect.App",
        desc: "Apply 40+ professional real-time effects to images and videos including thermal, texture blur, emboss, colour grading etc.",
        link: "https://effect.app/",
        type_category: ["image-video-editing"],
        price_category: ["free", "subscription-based"]
    },
    {
        id: 10,
        img: './HTML-graphics/salvagednu-logo.jpeg',
        title: "Salvaged.NU",
        desc: "Extensive gallery of recovered brushes and textures for digital art and scrapbooking from lost personal blogs from the mid-2000s. These can be used in your creative works and illustrations!",
        link: "https://salvaged.nu/",
        type_category: ["textures-graphics"],
        price_category: ["free"]
    },
    {
        id: 11,
        title: "Character Design References",
        desc: "Vast collection of real artist portfolios, production art, illustrations in the industry, animation and drawing reference sheet and video tutorials to inspire creative character design, animation and illustration.",
        img: './HTML-graphics/characterdesignreferences-logo.webp',
        link: "https://characterdesignreferences.com/",
        type_category: ["croquis-reference"],
        price_category: ["free"]
    },
    {
        id: 12,
        title: "SketchDaily Reference",
        desc: "Features a large collection of full body/targeted body parts/animal/structure/vegetation references with filters on sex/clothing and a time button for fast caricature figure drawing to longer study sessions. There is also an option to add your own collection of images.",
        img: './HTML-graphics/sketchdailyreference-logo.png',
        link: "https://www.sketchdaily.net/",
        type_category: ["croquis-reference"],
        price_category: ["free"]
    },
    {
        id: 13,
        title: "Line of Action",
        desc: "Features real-life images of people in poses/faces/basic shapes and still life/hand feet/animal/environment references that can be censored or uncensored with optional timers to practice fast figure drawing/caricature",
        img: './HTML-graphics/lineofaction-logo.png',
        link: "https://line-of-action.com/",
        type_category: ["croquis-reference"],
        price_category: ["free"]
    },
    {
        id: 14,
        title: "Alight Motion",
        desc: "",
        img: '',
        link: "",
        type_category: ["animation, image-video-editing"],
        price_category: ["free"]
    },
    {
        id: 15,
        title: "Quickposes",
        desc: "",
        img: './HTML-graphics/quickposes-logo.png',
        link: "https://quickposes.com/en",
        type_category: ["croquis-reference"],
        price_category: ["frew"]
    },
    {
        id: 16,
        title: "Adorkastock",
        desc: "",
        img: './HTML-graphics/adorkastock-logo.png',
        link: "https://www.adorkastock.com/pose/",
        type_category: ["croquis-reference"],
        price_category: [""]
    },
    {
        id: 17,
        title: "TrueRef",
        desc: "",
        img: './HTML-graphics/trueref-logo.jpg',
        link: "https://trueref.io/",
        type_category: ["croquis-reference"],
        price_category: [""]
    },
    {
        id: 18,
        title: "Just Sketch Me",
        desc: "3D reference modelling application with vast gallery of models, props and premade poses with lighting and scene tools.",
        img: './HTML-graphics/justsketchme-logo.jpg',
        link: "https://justsketch.me/",
        type_category: ["croquis-reference"],
        price_category: ["free"]
    },
    {
        id: 19,
        title: "Skelly",
        desc: "3D interactive model of skeleton that is fully poseable with a rotatable camera with variable lighting sources.",
        img: './HTML-graphics/skelly-logo.png',
        link: "https://www.proko.com/skellyapp",
        type_category: ["croquis-reference"],
        price_category: ["one-time-payment"]
    },
    {
        id: 20,
        title: "VGen",
        desc: "Commissions hub that allows you to post and host commissions prices easily. It uses an invite-only artist access policy to promote anti-AI and takes a 5% service fee for any commissions.",
        img: './HTML-graphics/vgen-logo.png',
        link: "https://vgen.co/",
        type_category: ["commissions"],
        price_category: ["free"]
    },
    {
        id: 21,
        title: "Dimensions",
        desc: "Features a vast collection of 3D model references and standard measurements for everyday objects and structures for reference when drawing environments and everday spaces",
        img: './HTML-graphics/dimensions-logo.png',
        link: "https://www.dimensions.com/?r=0",
        type_category: ["croquis-reference"],
        price_category: ["free"]
    },
    {
        id: 22,
        title: "Posemyart",
        desc: "",
        img: './HTML-graphics/posemyart-logo.png',
        link: "https://posemy.art/app/",
        type_category: ["croquis-reference"],
        price_category: ["free", "subscription-based", "one-time-payment"]
    },
    {
        id: 23,
        title: "Animal Photo Art References by x6ud",
        desc: "Reference website with an extensive collection of reference images for a variety of animal heads from any angle using an interactive 3d skull.",
        img: './HTML-graphics/animalreference-logo.png',
        link: "https://x6ud.github.io/#/",
        type_category: ["croquis-reference"],
        price_category: ["free"]
    },
    {
        id: 24,
        title: "Toyhouse",
        desc: "",
        img: './HTML-graphics/toyhouse-logo.webp',
        link: "https://toyhou.se/",
        type_category: ["commissions"],
        price_category: ["free", "subscription-based"]
    },
    {
        id: 25,
        title: "Ctrl Paint",
        desc: "Large library of comprehensive video tutorials for digital art and illustration in general with slow demos and explanations by professional artist and youtuber Ctrl+Paint.",
        img: './HTML-graphics/ctrlpaint-logo.jpg',
        link: "https://toyhou.se/",
        type_category: ["other"],
        price_category: ["free, one-time-payment"]
    },
    {
        id: 26,
        title: "Flim",
        desc: "",
        img: './HTML-graphics/flim-logo.png',
        link: "https://app.flim.ai/",
        type_category: ["other"],
        price_category: ["free"]
    },
    {
        id: 27,
        title: "Heavy Paint",
        desc: "",
        img: './HTML-graphics/heavypaint-logo.png',
        link: "https://www.heavypaint.com/hp3-3/",
        type_category: ["drawing"],
        price_category: ["free"]
    },
    {
        id: 28,
        title: "Online Image Editor",
        desc: "",
        img: './HTML-graphics/onlineimageeditor-logo.png',
        link: "https://toyhou.se/",
        type_category: ["image-video-editing"],
        price_category: ["free"]
    },
    {
        id: 29,
        title: "Frutiger Aero Archive",
        desc: "",
        img: './HTML-graphics/frutigeraeroarchive-logo.png',
        link: "https://frutigeraeroarchive.org/resources",
        type_category: ["textures-graphics"],
        price_category: ["free"]
    },
    {
        id: 30,
        title: "Texture Labs",
        desc: "",
        img: './HTML-graphics/texturelabs-logo.jpeg',
        link: "https://texturelabs.org/",
        type_category: ["textures-graphics"],
        price_category: ["free"]
    },
    {
        id: 31,
        title: "Cosmos",
        desc: "",
        img: './HTML-graphics/cosmos-logo.png',
        link: "https://www.cosmos.so/explore/art",
        type_category: ["textures-graphics", "other"],
        price_category: ["free", "subscription-based"]
    },
    {
        id: 32,
        title: "Film Grab",
        desc: "",
        img: './HTML-graphics/filmgrab-logo.png',
        link: "https://film-grab.com/",
        type_category: ["croquis-reference", "other"],
        price_category: ["free"]
    },
    {
        id: 33,
        title: "Blinkies Cafe",
        desc: "Generate customised blinkies (150 x 20-pixel animated gifs) that can be used for personalised websites, blogs and About Me pages in sites like Artfight.",
        img: './HTML-graphics/blinkiescafe-logo.png',
        link: "https://blinkies.cafe/",
        type_category: ["other"],
        price_category: ["free"]
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
                    <h4>${prod.title}</h4>
                    <p>${prod.desc}</p>
                    <a class="button" href="${prod.link}" style="margin-top: 90px;">Check it out!</a>
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


    filteredProducts = products.filter(prod => {
        return prod.price_category.some(option => prod.price_category.includes(selectedPrice)) &&
               prod.type_category.some(option => prod.type_category.includes(selectedType))
    });

    renderProds(filteredProducts);
}

priceSelect.addEventListener('change', filterProducts)
typeSelect.addEventListener('change', filterProducts)