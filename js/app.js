const categories = [
    {key:"hot-coffee",en:"Hot Coffee",fa:"قهوه گرم",folder:"Hot Coffee"},
    {key:"cold-coffee",en:"Cold Coffee",fa:"قهوه سرد",folder:"Cold Coffee"},
    {key:"dezh-food",en:"DeZh Food",fa:"دژ فود",folder:"DeZh Food"},
    {key:"fried",en:"Fried",fa:"سرخ کردنی",folder:"Fried"},
    {key:"signature",en:"DeZh Signature",fa:"تک رسپی دژ",folder:"DeZh Signature"},
    {key:"mocktails",en:"Mocktails",fa:"موکتلیته ها",folder:"Mocktails"},
    {key:"cake",en:"Cake & Breakfast",fa:"کیک و صبحانه",folder:"Cake & Breakfast"},
    {key:"hot-drinks",en:"Hot Drinks",fa:"نوشیدنی گرم",folder:"Hot Drinks"}
];

const products = {

    "hot-coffee":[
        {
            id:"hot-1",
            image:"image/Hot Coffee/Single.webp",
            en:"Single",
            fa:"سینگل",
            price:"110.000",
            descEn:"A focused single espresso shot with a rich crema",
            descFa:"یک شات اسپرسوی متعادل با گرمای غلیظ و عطر دلنشین"
        },
        {
            id:"hot-2",
            image:"image/Hot Coffee/Double.webp",
            en:"Double",
            fa:"دبل",
            price:"130.000",
            descEn:"A bold double espresso with a deep, aromatic finish",
            descFa:"دو شات اسپرسوی قوی با عطر عمیق و پایان دلنشین"
        },
        {
            id:"hot-3",
            image:"image/Hot Coffee/Americano.webp",
            en:"Americano",
            fa:"آمریکانو",
            price:"160.000",
            descEn:"Espresso softened with hot water for a clean",
            descFa:"اسپرسو همراه آب داغ؛ ساده، خوش‌عطر"
        },
        {
            id:"hot-4",
            image:"image/Hot Coffee/Latte.webp",
            en:"Latte",
            fa:"لاته",
            price:"180.000",
            descEn:"Smooth espresso with steamed milk and a touch of foam",
            descFa:"اسپرسوی نرم با شیر بخار داده‌شده و لایه‌ای لطیف از فوم"
        },
        {
            id:"hot-5",
            image:"image/Hot Coffee/Caramel-Macchiato.webp",
            en:"Caramel Macchiato",
            fa:"کارامل ماکیاتو",
            price:"220.000",
            descEn:"Velvety milk and espresso finished with caramel",
            descFa:"ترکیب لطیف شیر و اسپرسو با طعم دلنشین کارامل"
        },
        {
            id:"hot-6",
            image:"image/Hot Coffee/Mocha.webp",
            en:"Mocha",
            fa:"موکا",
            price:"220.000",
            descEn:"Espresso, chocolate and steamed milk in a rich blend",
            descFa:"ترکیب غنی اسپرسو، شکلات و شیر بخار داده‌شده"
        },
        {
            id:"hot-7",
            image:"image/Hot Coffee/Cappuccino.webp",
            en:"Cappuccino",
            fa:"کاپوچینو",
            price:"195.000",
            descEn:"Espresso with silky milk and a generous layer of foam",
            descFa:"اسپرسو با شیر لطیف و لایه‌ای خوش‌حجم از فوم شیر"
        }
    ],

    "cold-coffee":[
        {
            id:"cold-1",
            image:"image/Cold Coffee/Iced-Latte.webp",
            en:"Iced Latte",
            fa:"آیس لاته",
            price:"195.000",
            descEn:"Chilled espresso, fresh milk and ice",
            descFa:"اسپرسوی خنک با شیر تازه و یخ"
        },
        {
            id:"cold-2",
            image:"image/Cold Coffee/Iced-Americano.webp",
            en:"Iced Americano",
            fa:"آیس آمریکانو",
            price:"175.000",
            descEn:"espresso, cold water and ice for a crisp finish",
            descFa:"اسپرسوی با آب خنک و یخ، با طعمی شفاف و تازه"
        },
        {
            id:"cold-3",
            image:"image/Cold Coffee/Iced-Mocha.webp",
            en:"Iced Mocha",
            fa:"آیس موکا",
            price:"225.000",
            descEn:"Cold espresso and chocolate balanced with milk and ice",
            descFa:"ترکیب خنک اسپرسو و شکلات با شیر و یخ"
        },
        {
            id:"cold-4",
            image:"image/Cold Coffee/Iced-Caramel-Macchiato.webp",
            en:"Iced Caramel Macchiato",
            fa:"آیس کارامل موکیاتو",
            price:"225.000",
            descEn:"Cold milk and espresso layered with caramel",
            descFa:"شیر و اسپرسوی خنک با لایه‌ای خوش‌عطر از کارامل"
        },
        {
            id:"cold-5",
            image:"image/Cold Coffee/Iced-Tea.webp",
            en:"Iced Tea",
            fa:"آیس تی",
            price:"185.000",
            descEn:"Refreshing chilled tea served over ice",
            descFa:"چای خنک و تازه با یخ، مناسب یک نوشیدنی سبک"
        },
        {
            id:"cold-6",
            image:"image/Cold Coffee/Strawberry-Iced-Latte.webp",
            en:"Strawberry Iced Latte",
            fa:"آیس لاته توت فرنگی",
            price:"245.000",
            descEn:"Creamy iced latte with a bright strawberry layer",
            descFa:"لاته خنک و خامه‌ای با لایه‌ای خوش‌طعم از توت‌فرنگی"
        },
        {
            id:"cold-7",
            image:"image/Cold Coffee/Ocean-Iced-Latte.webp",
            en:"Ocean Iced Latte",
            fa:"آیس لاته اقیانوسی",
            price:"245.000",
            descEn:"A cool layered latte with a fresh ocean-inspired finish",
            descFa:"لاته خنک و لایه‌ای با حال‌وهوای تازه و اقیانوسی"
        }
    ],

    "dezh-food":[
        {
            id:"food-1",
            image:"image/DeZh Food/Alfredo-Pasta.webp",
            en:"Alfredo Pasta",
            fa:"پاستا آلفردو",
            price:"350.000",
            descEn:"Creamy pasta with a rich Alfredo sauce",
            descFa:"پاستایی خامه‌ای با سس آلفردوی غلیظ و خوش‌عطر"
        },
        {
            id:"food-2",
            image:"image/DeZh Food/Caesar-Salad.webp",
            en:"Caesar Salad",
            fa:"سالاد سزار",
            price:"260.000",
            descEn:"Crisp greens, creamy dressing and classic Caesar toppings",
            descFa:"سبزیجات تازه و ترد با سس سزار و مخلفات کلاسیک"
        }
    ],

    "fried":[
        {
            id:"fried-1",
            image:"image/Fried/Large-Fries.webp",
            en:"Large Fries",
            fa:"سیب زمینی بزرگ",
            price:"215.000",
            descEn:"Golden crispy fries served fresh and hot",
            descFa:"سیب‌زمینی‌های طلایی و ترد، تازه و داغ"
        },
        {
            id:"fried-2",
            image:"image/Fried/Large-Fries.webp",
            en:"Small Fries",
            fa:"سیب زمینی کوچک",
            price:"195.000",
            descEn:"A crisp golden portion for a lighter bite",
            descFa:"یک پرس ترد و طلایی برای یک میان‌وعده سبک"
        },
        {
            id:"fried-3",
            image:"image/Fried/Snack.webp",
            en:"Snack",
            fa:"اسنک",
            price:"220.000",
            descEn:"A warm, crispy snack with a satisfying savory bite",
            descFa:"اسنکی گرم و ترد با طعمی خوشایند و دلچسب"
        }
    ],

    "signature":[
        {
            id:"sig-1",
            image:"image/DeZh Signature/Marshi-Cocoa.webp",
            en:"Marshi Cocoa",
            fa:"مارشی کاکائو",
            price:"185.000",
            descEn:"A rich cocoa creation with a smooth, comforting finish",
            descFa:"نوشیدنی کاکائویی غلیظ با بافتی نرم و طعمی آرامش‌بخش"
        },
        {
            id:"sig-2",
            image:"image/DeZh Signature/Cocoa-Milk.webp",
            en:"Cocoa Milk",
            fa:"شیر کاکائو",
            price:"145.000",
            descEn:"Smooth milk blended with comforting cocoa",
            descFa:"شیر لطیف با طعم دلچسب کاکائو"
        },
        {
            id:"sig-3",
            image:"image/DeZh Signature/Behnoosh-Peanut.webp",
            en:"Behnoosh & Peanut",
            fa:"بهنوش و بادام زمینی",
            price:"180.000",
            descEn:"A playful DaZh combination with a nutty finish",
            descFa:"ترکیبی متفاوت و خوش‌طعم با پایان دلنشین بادام‌زمینی"
        },
        {
            id:"sig-4",
            image:"image/DeZh Signature/Farvardin-Cigarette-Roll.webp",
            en:"Farvardin Cigarette Roll",
            fa:"سیگار فروردین نخی",
            price:"20.000",
            descEn:"Farvardin cigarette with 10.5 mg tar and 1 mg nicotine",
            descFa:"سیگار فروردین با ۱۰.۵ میلی‌گرم قطران و ۱ میلی‌گرم نیکوتین"
        },
        {
            id:"sig-5",
            image:"image/DeZh Signature/Orange-Americano.webp",
            en:"Orange Americano",
            fa:"اورنج آمریکانو",
            price:"235.000",
            descEn:"Americano with the flavor and aroma of fresh oranges",
            descFa:"آمریکانو با طعم و عطر پرتقال تازه"
        },
        {
            id:"sig-6",
            image:"image/DeZh Signature/Karak-Tea.webp",
            en:"Karak Tea",
            fa:"چای کرک",
            price:"175.000",
            descEn:"Spiced milk tea with a warm, aromatic character",
            descFa:"چای شیری معطر با ادویه‌های گرم و دلنشین"
        },
        {
            id:"sig-7",
            image:"image/DeZh Signature/Cinnamon-Senjed-Milk.webp",
            en:"Cinnamon Senjed Milk",
            fa:"میلک سنجد دارچینی",
            price:"175.000",
            descEn:"Creamy milk with senjed and a soft cinnamon aroma",
            descFa:"شیر لطیف با سنجد و عطر ملایم دارچین"
        },
        {
            id:"sig-8",
            image:"image/DeZh Signature/Jujube-Milk.webp",
            en:"Jujube Milk",
            fa:"میلک عناب",
            price:"175.000",
            descEn:"Smooth milk with the naturally mellow taste of jujube",
            descFa:"شیر لطیف با طعم ملایم و طبیعی عناب"
        },
        {
            id:"sig-9",
            image:"image/DeZh Signature/Saffron-Pistachio-Hot.webp",
            en:"Saffron Pistachio Hot",
            fa:"هات پسته زعفرانی",
            price:"180.000",
            descEn:"A warm pistachio drink finished with fragrant saffron",
            descFa:"نوشیدنی گرم پسته‌ای با عطر لطیف و اصیل زعفران"
        },
        {
            id:"sig-10",
            image:"image/DeZh Signature/Namakin-Jam.webp",
            en:"Namakin Jam",
            fa:"نمکین جام",
            price:"210.000",
            descEn:"Non-alcoholic beer served with salt, fresh lemon, and peanuts a refreshing and flavorful combination",
            descFa:"آبجوی اسلامی همراه با نمک، لیموی تازه و بادام‌زمینی ترکیبی خنک و خوش‌طعم"
        }
    ],

    "mocktails":[
        {
            id:"mock-1",
            image:"image/Mocktails/Blue-Mocktail.webp",
            en:"Blue Mocktail",
            fa:"بلو موکتل",
            price:"180.000",
            descEn:"A cool, bright mocktail with a vivid blue finish",
            descFa:"موکتلی خنک و تازه با رنگ آبی چشم‌نواز"
        },
        {
            id:"mock-2",
            image:"image/Mocktails/Mojito.webp",
            en:"Mojito",
            fa:"موهیتو",
            price:"160.000",
            descEn:"Fresh mint, citrus and ice in a crisp classic",
            descFa:"ترکیب تازه نعناع، مرکبات و یخ با طعمی خنک"
        },
        {
            id:"mock-3",
            image:"image/Mocktails/Carbonade.webp",
            en:"Cranbernade",
            fa:"کرنبرناد",
            price:"175.000",
            descEn:"A lively sparkling drink with a refreshing finish",
            descFa:"نوشیدنی گازدار و سرزنده با پایانی تازه و خنک"
        },
        {
            id:"mock-4",
            image:"image/Mocktails/Fresh-Berry.webp",
            en:"Fresh Berry",
            fa:"فرش بری",
            price:"170.000",
            descEn:"A refreshing berry-forward drink with bright fruit notes",
            descFa:"نوشیدنی خنک با طعم میوه‌های بری و رایحه‌ای تازه"
        },
        {
            id:"mock-5",
            image:"image/Mocktails/Sun-Berry.webp",
            en:"Sun Berry",
            fa:"سان بری",
            price:"190.000",
            descEn:"A fruity blend with a bright, refreshing character",
            descFa:"ترکیبی میوه‌ای و خوش‌رنگ با طعمی شاداب"
        },
        {
            id:"mock-6",
            image:"image/Mocktails/Orange-Ruby.webp",
            en:"Orange Ruby",
            fa:"اورنج روبی",
            price:"180.000",
            descEn:"Vibrant orange and ruby fruit notes over ice",
            descFa:"ترکیب جذاب طعم پرتقال و میوه‌های قرمز روی یخ"
        },
        {
            id:"mock-7",
            image:"image/Mocktails/Shirin-Kooh-Mocktail.webp",
            en:"Shirin Kooh Mocktail",
            fa:"موکتل شیرین کوه",
            price:"210.000",
            descEn:"A signature fruit mocktail with a layered aromatic finish",
            descFa:"موکتلی میوه‌ای با ترکیبی خاص و عطری لایه‌لایه"
        }
    ],

    "cake":[
        {
            id:"cake-1",
            image:"image/Cake & Breakfast/Ferni-Dessert.webp",
            en:"Ferni Dessert",
            fa:"دسر فرنی",
            price:"95.000",
            descEn:"Silky milk pudding with a delicate, comforting texture",
            descFa:"دسری لطیف و شیری با بافتی نرم و آرامش‌بخش"
        },
        {
            id:"cake-2",
            image:"image/Cake & Breakfast/Custard-Dessert.webp",
            en:"Custard Dessert",
            fa:"دسر کاستر",
            price:"130.000",
            descEn:"Creamy custard dessert with a smooth finish",
            descFa:"دسری کرمی و لطیف با بافتی یکدست و خوشایند"
        },
        {
            id:"cake-3",
            image:"image/Cake & Breakfast/Fried-Egg.webp",
            en:"Fried Egg",
            fa:"نیمرو",
            price:"140.000",
            descEn:"Fresh eggs cooked simply for a warm breakfast",
            descFa:"تخم‌مرغ تازه و گرم، ساده و مناسب یک صبحانه دلچسب"
        },
        {
            id:"cake-4",
            image:"image/Cake & Breakfast/Omelette.webp",
            en:"Omelette",
            fa:"املت",
            price:"160.000",
            descEn:"A warm classic omelette prepared fresh to order",
            descFa:"املتی گرم و تازه با طعمی ساده و دلچسب"
        },
        {
            id:"cake-5",
            image:"image/Cake & Breakfast/Sausage-Omelette.webp",
            en:"Sausage Omelette",
            fa:"سوسیس املت",
            price:"220.000",
            descEn:"A hearty omelette paired with savory sausage",
            descFa:"املت گرم و سیرکننده همراه با سوسیس خوش‌طعم."
        }
    ],

    "hot-drinks":[
        {
            id:"drink-1",
            image:"image/Hot Drinks/Tea.webp",
            en:"Tea",
            fa:"چای",
            price:"75.000",
            descEn:"A classic hot tea with a clean, comforting aroma",
            descFa:"چای گرم کلاسیک با عطری ملایم و آرامش‌بخش"
        },
        {
            id:"drink-2",
            image:"image/Hot Drinks/Malas-Tea.webp",
            en:"Malas Tea",
            fa:"چای ملس طعم",
            price:"165.000",
            descEn:"A fragrant tea with a balanced sweet and tangy character",
            descFa:"چای معطر با طعمی متعادل و دلچسب"
        },
        {
            id:"drink-3",
            image:"image/Hot Drinks/Masala.webp",
            en:"Masala",
            fa:"ماسالا",
            price:"180.000",
            descEn:"Warm spiced milk tea with a rich aromatic profile",
            descFa:"چای شیری گرم با ترکیبی غنی از ادویه‌های معطر"
        },
        {
            id:"drink-4",
            image:"image/Hot Drinks/Felseh-Relaxation-Tea.webp",
            en:"Relaxation ecstasy tea",
            fa:"دمنوش خلسه آرامش",
            price:"178.000",
            descEn:"A gentle herbal infusion designed for a calm moment",
            descFa:"دمنوشی ملایم و گیاهی برای لحظه‌ای آرام و دلنشین"
        },
        {
            id:"drink-5",
            image:"image/Hot Drinks/Sore-Throat-Herbal-Tea.webp",
            en:"Sore Throat Herbal Tea",
            fa:"دمنوش درمان گلودرد",
            price:"185.000",
            descEn:"A warm herbal blend with a soothing, aromatic profile",
            descFa:"ترکیبی گرم و گیاهی با عطری دلنشین و حس آرامش‌بخش"
        },
        {
            id:"drink-6",
            image:"image/Hot Drinks/Chamomile-Flower.webp",
            en:"Chamomile Flower",
            fa:"بابونه گل",
            price:"160.000",
            descEn:"Delicate chamomile infusion with a soft floral aroma",
            descFa:"دمنوش بابونه با رایحه‌ای لطیف و گل‌مانند"
        },
        {
            id:"drink-7",
            image:"image/Hot Drinks/Lemon-Verbena.webp",
            en:"Lemon Verbena",
            fa:"به لیمو",
            price:"160.000",
            descEn:"Bright lemony herbal notes in a delicate hot infusion",
            descFa:"دمنوشی خوش‌عطر با رایحه تازه و لطیف لیمویی"
        },
        {
            id:"drink-8",
            image:"image/Hot Drinks/Fruit-Tea.webp",
            en:"Fruit Tea",
            fa:"چای میوه",
            price:"185.000",
            descEn:"A fragrant hot tea layered with bright fruit notes",
            descFa:"چای گرم و معطر با ترکیبی دلنشین از طعم میوه‌ها"
        }
    ]
};

const state = {
    lang:"en",
    theme:localStorage.getItem("dazh-theme") || "dark",
    category:"hot-coffee",
    index:3,
    animating:false,
    direction:"next"
};

const app = document.getElementById("app");
const landing = document.getElementById("landing");
const welcome = document.getElementById("welcome");
const menu = document.getElementById("menu");
const welcomeText = document.getElementById("welcomeText");
const categoriesEl = document.getElementById("categories");
const carousel = document.getElementById("carousel");
const dots = document.getElementById("dots");
const stage = document.getElementById("stage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const locationButton = document.getElementById("locationButton");

function getCategory(){
    return categories.find(item => item.key === state.category);
}

function getProducts(){
    return products[state.category];
}

function productName(product){
    return state.lang === "fa" ? product.fa : product.en;
}

function productDesc(product){
    return state.lang === "fa" ? product.descFa : product.descEn;
}

function categoryName(category){
    return state.lang === "fa" ? category.fa : category.en;
}

function setTheme(theme, animate = true){
    if(state.theme === theme && !animate){
        document.body.classList.toggle("light", theme === "light");
        return;
    }

    state.theme = theme;

    if(!animate){
        document.body.classList.toggle("light", theme === "light");
        localStorage.setItem("dazh-theme", theme);
        return;
    }

    app.classList.add("theme-changing");
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("dazh-theme", theme);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            app.classList.remove("theme-changing");
        });
    });
}

function updateCarouselArrows(){
    // Keep the previous/next logic unchanged; only mirror the visible arrow in RTL.
    prevButton.textContent = state.lang === "fa" ? "›" : "‹";
    nextButton.textContent = state.lang === "fa" ? "‹" : "›";
}

function applyLanguage(){
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === "fa" ? "rtl" : "ltr";
    updateCarouselArrows();

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;

        if(key === "about"){
            el.textContent = state.lang === "fa"
                ? "کافه‌ای مدرن برای لحظه‌های آرام، قهوه‌های خاص و گفت‌وگوهای خوب."
                : "A modern café made for slow moments, bold coffee and good conversations.";
        }

        if(key === "location"){
            el.textContent = state.lang === "fa"
                ? "لوکیشن کافه"
                : "Location";
        }
    });

    document.querySelectorAll(".lang-switch button").forEach(button => {
        button.classList.toggle("active", button.dataset.lang === state.lang);
    });

    renderCategories();
    renderCards(false);
}

function renderCategories(){
    categoriesEl.innerHTML = "";

    categories.forEach(category => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "cat" + (category.key === state.category ? " active" : "");
        button.dataset.cat = category.key;
        button.textContent = categoryName(category);

        button.addEventListener("click", () => {
            selectCategory(category.key);
        });

        categoriesEl.appendChild(button);
    });

    const active = categoriesEl.querySelector(".cat.active");

    if(active && window.innerWidth < 768){
        active.scrollIntoView({
            behavior:"smooth",
            block:"nearest",
            inline:"center"
        });
    }
}

function renderCards(animate = false){
    const list = getProducts();

    if(state.index >= list.length){
        state.index = list.length - 1;
    }

    if(state.index < 0){
        state.index = 0;
    }

    carousel.innerHTML = "";

    const positions = [];

    if(list.length > 1){
        positions.push({offset:-1, cls:"prev"});
        positions.push({offset:0, cls:"main"});
        positions.push({offset:1, cls:"next"});
    }else{
        positions.push({offset:0, cls:"main"});
    }

    positions.forEach(item => {
        const index = state.index + item.offset;

        if(index < 0 || index >= list.length){
            return;
        }

        const product = list[index];

        const card = document.createElement("article");

        card.className = `card ${item.cls}`;
        card.dataset.index = index;
        card.dir = state.lang === "fa" ? "rtl" : "ltr";

        card.innerHTML = `
            <div class="card-image">
                <img src="${product.image}" alt="${htmlEscape(productName(product))}">
                <div class="badge">${categoryName(getCategory())}</div>
            </div>

            <div class="card-body">
                <h2 class="card-title">${htmlEscape(productName(product))}</h2>

                <p class="card-desc">
                    ${htmlEscape(productDesc(product))}
                </p>

                <div class="card-price">
                    <strong>${product.price}</strong>
                    <span>${state.lang === "fa" ? "تومان" : "Toman"}</span>
                </div>
            </div>
        `;

        if(animate && item.cls === "main"){
            card.classList.add(
                state.direction === "next"
                    ? "enter-next"
                    : "enter-prev"
            );
        }

        carousel.appendChild(card);
    });

    renderDots();
}

function renderDots(){
    dots.innerHTML = "";

    getProducts().forEach((_, index) => {
        const dot = document.createElement("span");

        dot.className = "dot" + (
            index === state.index ? " active" : ""
        );

        dots.appendChild(dot);
    });
}

function htmlEscape(value){
    return value.replace(
        /[&<>"']/g,
        char => ({
            "&":"&amp;",
            "<":"&lt;",
            ">":"&gt;",
            '"':"&quot;",
            "'":"&#039;"
        }[char])
    );
}

function move(delta){
    if(state.animating){
        return;
    }

    const list = getProducts();
    const nextIndex = state.index + delta;

    if(nextIndex < 0 || nextIndex >= list.length){
        return;
    }

    state.direction = delta > 0 ? "next" : "prev";
    state.index = nextIndex;
    state.animating = true;

    renderCards(true);

    setTimeout(() => {
        state.animating = false;
    }, 640);
}

function selectCategory(key){
    if(state.animating || key === state.category){
        return;
    }

    state.category = key;
    state.index = Math.min(1, getProducts().length - 1);

    renderCategories();
    renderCards(false);
}

function typeWelcome(text){
    welcomeText.textContent = "";

    let index = 0;

    const timer = setInterval(() => {
        welcomeText.textContent += text[index] || "";
        index += 1;

        if(index >= text.length){
            clearInterval(timer);
        }
    }, 55);
}

const landingAbout = document.getElementById("landingAbout");
const landingLangButtons = document.querySelectorAll("[data-landing-lang]");
const hoursLabel = document.getElementById("hoursLabel");
const hoursValue = document.getElementById("hoursValue");

const landingCopy = {
    fa: {
        about: "کافه گالری دژ با الهام از فضای نوستالژیک آمریکای دهه ۶۰، مکانی متفاوت در قلب تبریز است. اینجا قهوه با عشق دم می‌شود، کیک‌ها هر روز تازه پخته می‌شوند و هر گوشه‌ای داستانی از هنر و زندگی را روایت می‌کند. دژ فقط یک کافه نیست؛ تجربه‌ای‌ست از آرامش، طعم و خاطره.",
        hours: "شنبه تا پنجشنبه",
        label: "ساعات کاری"
    },
    en: {
        about: "Dezh Gallery Cafe, inspired by the nostalgic atmosphere of 1960s America, is a distinctive place in the heart of Tabriz. Coffee is brewed with care, cakes are freshly baked every day, and every corner tells a story of art and life. Dezh is more than a cafe; it is an experience of calm, taste, and memory.",
        hours: "Saturday — Thursday",
        label: "Opening hours"
    }
};

function setLandingLanguage(lang){
    const copy = landingCopy[lang];
    landingAbout.textContent = copy.about;
    landingAbout.style.direction = lang === "fa" ? "rtl" : "ltr";
    hoursLabel.textContent = copy.label;
    hoursValue.innerHTML = `${copy.hours} <span>08:00 — 23:00</span>`;
    hoursValue.style.direction = lang === "fa" ? "rtl" : "ltr";
    landingLangButtons.forEach(button => button.classList.toggle("active", button.dataset.landingLang === lang));
}

landingLangButtons.forEach(button => {
    button.addEventListener("click", () => setLandingLanguage(button.dataset.landingLang));
});

function enterMenu(lang){
    state.lang = lang;

    landing.classList.add("is-hidden");

    welcome.classList.remove("is-hidden");
    welcomeText.classList.remove("is-hidden");
    welcomeText.textContent = "";

    const message = lang === "fa"
        ? "سلام، خیلی خوش آمدید"
        : "Hello, Welcome";

    setTimeout(() => {
        typeWelcome(message);
    }, 420);

    setTimeout(() => {
        welcome.classList.add("is-hidden");
        menu.classList.remove("is-hidden");
        applyLanguage();
    }, 2300);
}

document.querySelectorAll("[data-entry]").forEach(button => {
    button.addEventListener("click", () => {
        enterMenu(button.dataset.entry);
    });
});

document.querySelectorAll(".theme-toggle").forEach(button => {
    button.addEventListener("click", () => {
        setTheme(
            state.theme === "dark"
                ? "light"
                : "dark"
        );
    });
});

document.querySelectorAll(".lang-switch button").forEach(button => {
    button.addEventListener("click", () => {
        if(state.lang === button.dataset.lang){
            return;
        }

        state.lang = button.dataset.lang;
        applyLanguage();
    });
});

prevButton.addEventListener("click", () => {
    move(-1);
});

nextButton.addEventListener("click", () => {
    move(1);
});

window.addEventListener("keydown", event => {
    if(menu.classList.contains("is-hidden")){
        return;
    }

    if(event.key === "ArrowLeft"){
        move(-1);
    }

    if(event.key === "ArrowRight"){
        move(1);
    }
});

let startX = 0;
let startY = 0;
let dragging = false;

stage.addEventListener("touchstart", event => {
    if(state.animating || event.touches.length !== 1){
        dragging = false;
        return;
    }

    const touch = event.touches[0];

    startX = touch.clientX;
    startY = touch.clientY;
    dragging = true;
}, {passive:true});

stage.addEventListener("touchend", event => {
    if(!dragging){
        return;
    }

    dragging = false;

    const touch = event.changedTouches[0];

    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;

    // A slightly lower threshold makes the carousel easier to swipe on slower phones.
    if(Math.abs(dx) > 38 && Math.abs(dx) > Math.abs(dy)){
        move(dx < 0 ? 1 : -1);
    }
}, {passive:true});

let catStartX = 0;
let catScroll = 0;
let catDragging = false;

categoriesEl.addEventListener("touchstart", event => {
    const touch = event.changedTouches[0];

    catStartX = touch.clientX;
    catScroll = categoriesEl.scrollLeft;
    catDragging = true;
}, {passive:true});

categoriesEl.addEventListener("touchmove", event => {
    if(!catDragging){
        return;
    }

    const touch = event.changedTouches[0];

    categoriesEl.scrollLeft =
        catScroll - (touch.clientX - catStartX);
}, {passive:true});

categoriesEl.addEventListener("touchend", () => {
    catDragging = false;
});

let mouseCatStart = 0;
let mouseCatScroll = 0;
let mouseCatDragging = false;

categoriesEl.addEventListener("mousedown", event => {
    mouseCatDragging = true;
    mouseCatStart = event.pageX;
    mouseCatScroll = categoriesEl.scrollLeft;

    categoriesEl.classList.add("grabbing");
});

window.addEventListener("mousemove", event => {
    if(!mouseCatDragging){
        return;
    }

    categoriesEl.scrollLeft =
        mouseCatScroll - (event.pageX - mouseCatStart);
});

window.addEventListener("mouseup", () => {
    mouseCatDragging = false;
    categoriesEl.classList.remove("grabbing");
});

locationButton.addEventListener("click", () => {
    const locationUrl = "https://nshn.ir/vbAlxGGC-Uxs";

    if(locationUrl){
        window.open(
            locationUrl,
            "_blank",
            "noopener,noreferrer"
        );
    }
});

setTheme(state.theme, false);
updateCarouselArrows();
renderCategories();
renderCards(false);