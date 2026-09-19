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
        desc: "Experimental drawing program with 8 unique brushes for creating doodles and illustration with a animated 'wiggly' effect with interactive sound effects. Please note that this application was stolen from the original creator Internet Janitor on itch.io, and any 'official' websites are stolen versions that support AI.",
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
        desc: "A professional motion design app available on mobile and desktop for creating professional-quality animation, motion-graphics, video effects and video editing. The free version allows for core animation and video editing tools such as keyframes, multiple layers and a limited selection of visual effects, but adds a watermark when exporting. Many advanced effects, filters, elements and fonts can only be accessed through the premium version.",
        img: './HTML-graphics/alightmotion-logo.png',
        link: "https://support.alightmotion.com/hc/en-us",
        type_category: ["animation", "image-video-editing"],
        price_category: ["free", "subscription-based"]
    },
    {
        id: 15,
        title: "Quickposes",
        desc: "",
        img: './HTML-graphics/quickposes-logo.png',
        link: "https://quickposes.com/en",
        type_category: ["croquis-reference"],
        price_category: ["free"]
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
        desc: "Toyhouse is a commissions ",
        img: './HTML-graphics/toyhouse-logo.webp',
        link: "https://toyhou.se/",
        type_category: ["commissions"],
        price_category: ["free", "subscription-based"]
    },
    {
        id: 25,
        title: "Ctrl Paint",
        desc: "CTRL Paint is a large digital library of comprehensive video tutorials for digital art and illustration in general. It is popular among beginner to intermediate artists for its slow demos and explanations by professional artist and youtuber Ctrl+Paint. It also offers a shop of purchaseable tutorials with more comprehensive guides, resources and video demonstrations.",
        img: './HTML-graphics/ctrlpaint-logo.jpg',
        link: "https://toyhou.se/",
        type_category: ["other"],
        price_category: ["free", "one-time-payment"]
    },
    {
        id: 26,
        title: "Flim",
        desc: "Flim is an AI powered visual search engine that allows users to browse through over 2 million scene snapshots of films, series, ads and music videos. It has a highly advanced filter system where artists can find specific references based on filters such as camera angles, moods, colour palettes, genre, year and artists.",
        img: './HTML-graphics/flim-logo.png',
        link: "https://app.flim.ai/",
        type_category: ["other"],
        price_category: ["free"]
    },
    {
        id: 27,
        title: "Heavy Paint",
        desc: "Digital painting application with a minimalistic, distraction-free interface that encourages expressive and experimental illustrations. Offers unique colour dynamics through its inbuilt colour jitter and is considered the ideal tool for painting studies and concept art.",
        img: './HTML-graphics/heavypaint-logo.png',
        link: "https://www.heavypaint.com/hp3-3/",
        type_category: ["drawing"],
        price_category: ["free"]
    },
    {
        id: 28,
        title: "Online Image Editor",
        desc: "Free image editing website that allows you to resize, crop, merge, blend and overlay images. It was popularised among artists for its vast range of animated gif glitter effects that can be used on your illustrations!",
        img: './HTML-graphics/onlineimageeditor-logo.png',
        link: "https://www.online-image-editor.com/",
        type_category: ["image-video-editing", "textures-graphics"],
        price_category: ["free"]
    },
    {
        id: 29,
        title: "Frutiger Aero Archive",
        desc: "An online archive dedicated to providing artists and creatives with 4000+ graphics, wallpapers, videos and icons inspired by the popularised Frutiger Aero aesthetic. It has a very distinct early 2000s vibe and can be used for creating mixed media illustrations and animations.",
        img: './HTML-graphics/frutigeraeroarchive-logo.png',
        link: "https://frutigeraeroarchive.org/resources",
        type_category: ["textures-graphics"],
        price_category: ["free"]
    },
    {
        id: 30,
        title: "Texture Labs",
        desc: "A popular online graphics resource for finding free, original high-resolution textures for art and design. Features a diverse range of textures filtered by categories such as grunge, fabric, film, half-tones and weird science, as well as an extensive collection of tutorials for how to make unique effects and textures by yourself.",
        img: './HTML-graphics/texturelabs-logo.jpeg',
        link: "https://texturelabs.org/",
        type_category: ["textures-graphics"],
        price_category: ["free"]
    },
    {
        id: 31,
        title: "Cosmos",
        desc: "Cosmos is AI-powered visual discovery app designed specifically for artists and like creatives as an ad-free and curated alternative to Pinterest. It allows for the saving of elements and graphics in personal libraries called Clusters, where your feed is based purely on inspiration and taste rather than an element's number of likes, comments or saves.",
        img: './HTML-graphics/cosmos-logo.png',
        link: "https://www.cosmos.so/explore/art",
        type_category: ["textures-graphics", "other"],
        price_category: ["free", "subscription-based"]
    },
    {
        id: 32,
        title: "Film Grab",
        desc: "Film Grab is vast, extensive collection of scene snapshots from films made single-handedly by film-maker and cinematographer Dawn Coffrey. Allows for browsing alphabetically and by specific artists and categories, where these snapshots can be used for character, lighting and composition studies and inspiration.",
        img: './HTML-graphics/filmgrab-logo.jpeg',
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
    {
        id: 34,
        title: "Live2D",
        desc: "Live2D is an industry standard tool for animating/rigging 2D illustrations into fully-angled models without the need of converting to 3D. It supports a layered artwork where creators can set key poses for actions like blinking and smiling that can be used for creating character rigs for artists and streamers.",
        img: './HTML-graphics/live2d-logo.jpeg',
        link: "https://www.live2d.com/en/",
        type_category: ["animation"],
        price_category: ["free", "subscription-based"]
    },
    {
        id: 35,
        title: "Rough Animator",
        desc: "A mobile animation software that allows for powerful traditional hand-drawn animation capabilities including timeline, onion skinning, unlimited layers, importing audios/videos and creating custom brushes.",
        img: './HTML-graphics/roughanimator-logo.jpg',
        link: "https://www.roughanimator.com/",
        type_category: ["animation"],
        price_category: ["one-time-payment"]
    },
    {
        id: 36,
        title: "Cloud Stop Motion",
        desc: "User-friendly animation tool for creating stop motion animation through frame by frame capture without installing software or losing access to work. Has features such as a zoomable timeline, audio tools and text and title inserts.",
        img: './HTML-graphics/cloudstopmotion-logo.png',
        link: "https://app.cloudstopmotion.com/v2/animate/dashboard/projects",
        type_category: ["animation"],
        price_category: ["free"]
    },
    {
        id: 37,
        title: "Bluestacks",
        desc: "Bluestacks is an Android emulator that lets you to run mobile apps and games on Windows PC or Mac, essentially allowing you to run art applications and tools that are usually unavailable on desktop.",
        img: './HTML-graphics/bluestacks-logo.webp',
        link: "https://www.bluestacks.com/",
        type_category: ["other"],
        price_category: ["free"]
    },
    {
        id: 38,
        title: "Capcut",
        desc: "Capcut is a popular, free to download photo and video editing tool powered by AI. It supports editing features such as multi-layer editing, an advanced timeline, speed templates, as well as a vast library of transitions, filters and effects. It is most convenient for its in-built background remover, text to speech and caption generating tools.",
        img: './HTML-graphics/capcut-logo.png',
        link: "https://www.capcut.com/",
        type_category: ["image-video-editing"],
        price_category: ["free", "subscription-based"]
    },
    {
        id: 39,
        title: "OpenToonz",
        desc: "A powerful open-source 2D animation software that supports hybrid layers, traditional and rig animation and global colour palettes. This application also comes with 100+ inbuilt effects and SDK, as well as a specialised scanning tool to import traditional drawings straight to digital.",
        img: './HTML-graphics/opentoonz-logo.webp',
        link: "https://opentoonz.org/",
        type_category: ["animation"],
        price_category: ["free"]
    },
    {
        id: 40,
        title: "Tahoma2D",
        desc: "An open-source 2D and stop-motion animation software based on OpenToonz with a more streamlined and user-friendly interface. However, its simplified workspace still includes advanced features such as persective grid, symmetry and referenced fills.",
        img: './HTML-graphics/tahoma2d-logo.png',
        link: "https://tahoma2d.org/",
        type_category: ["animation"],
        price_category: ["free"]
    },
    {
        id: 41,
        title: "Blender3D Grease Pencil",
        desc: "Grease pencil is a unique Blender object that accepts drawing information and places them on 3D points, allowing for 2D art and animation to be created in a 3D space. This is highly beneficial for creating cut-out animation, motion graphics and animations with dynamic perspectives or hand-drawn effects with 3D lighting and environments.",
        img: './HTML-graphics/blender-logo.webp',
        link: "https://docs.blender.org/manual/en/latest/grease_pencil/introduction.html#quick-start",
        type_category: ["drawing", "animation"],
        price_category: ["free"]
    },
    {
        id: 42,
        title: "Toonsquid",
        desc: "2D art and animation app that supports both hand-drawn frame by frame and keyframe animation with a large customisable library of pixel and vector brushes. Also includes tools such as adding animation effects to layers through bones and meshes, re-using animation, creating camera layers, vector shapes and custom colour palettes.",
        img: './HTML-graphics/toonsquid-logo.png',
        link: "https://toonsquid.com/",
        type_category: ["drawing", "animation"],
        price_category: ["one-time-payment"]
    },
    {
        id: 43,
        title: "Artistree",
        desc: "An online platform designed specifically for artists to manage commissions where artists can receive 100% of their advertised commission price with no platform fee for the artist. The Artistree Dashboard allows for formal queue tracking and accepting commission requests that ultimately removes the need for messy direct messages.",
        img: './HTML-graphics/artistree-logo.jpg',
        link: "https://artistree.io/",
        type_category: ["commissions"],
        price_category: ["free"]
    },
    {
        id: 44,
        title: "Ko-Fi",
        desc: "Ko-Fi is a free to use creator-monetisation platform used by artists for posting commissions and phsyical goods/merch where artists can host monthly memberships, list custom work, set availability/slots and interact with buyers. Note that this site has a 5% platform fee for all commissions.",
        img: './HTML-graphics/kofi-logo.avif',
        link: "https://ko-fi.com/",
        type_category: ["commissions"],
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
    const selectedPrice = Array.from(priceSelect.selectedOptions).map(option => option.value);
    const selectedType = Array.from(typeSelect.selectedOptions).map(option => option.value);

    let filteredProducts;


    filteredProducts = products.filter(prod => {
        const priceMatch = selectedPrice.length === 0 || selectedPrice.some(option => prod.price_category.includes(option));
        const typeMatch = selectedType.length === 0 || selectedType.some(option => prod.type_category.includes(option));
        
        return priceMatch && typeMatch
    });

    renderProds(filteredProducts);
}

priceSelect.addEventListener('change', filterProducts)
typeSelect.addEventListener('change', filterProducts)