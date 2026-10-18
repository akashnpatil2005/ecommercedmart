document.getElementById('location').addEventListener('click',function(){
    document.getElementById('map').style.display='flex';
})
document.getElementById('map-close').addEventListener('click', function(){
    document.getElementById('map').style.display='none'
})

document.getElementById('notification').addEventListener('click',function(){
    document.getElementById('noti-box').style.display='flex';
})
document.getElementById('noti-close').addEventListener('click', function(){
    document.getElementById('noti-box').style.display='none'
})



document.getElementById('sign-in').addEventListener('click',function(){
    document.getElementById('login').style.display='flex';
})
document.getElementById('close').addEventListener('click', function(){
    document.getElementById('login').style.display='none'
})

// auti-slide
let autoArray=[
        "image/autoslider-2.jpeg",
        "image/autoslider-1.jpeg",
        "image/autoslider-4.jpeg",
        "image/autoslider-5.jpeg"
]
let auto = document.getElementById('auto');
let index = 0;

function autoSlide(){
    index++;
    if(index>=autoArray.length){
        index=0;
    }
    auto.src=autoArray[index];
}
setInterval(autoSlide,2000)
// 
const searchInput = document.getElementById('search-1');
const searchTerms = [
    "Search for Agarbatti",
    "Search for Milk",
    "Search for Sweets",
    "Search for Rice",
    "Search for Biscuits"
];

let searchIndex = 0;

function rotatePlaceholder() {
    searchInput.placeholder = searchTerms[searchIndex];
    
    searchIndex = (searchIndex + 1) % searchTerms.length;
}

setInterval(rotatePlaceholder, 1500);


// button slider


const rightBtn = document.getElementById("right-button");
const leftBtn = document.getElementById("left-button");
const scrollContainer = document.getElementById("special-cat"); 
const categoriesCards = document.querySelectorAll(".product-cat");

let currentIndex = 0;

function getVisibleItems() {
    const categoryWidth = categoriesCards[0].offsetWidth; 
    const gap = 45; 
    const availableWidth = scrollContainer.clientWidth;

    return Math.floor(availableWidth / (categoryWidth + gap));
}

function moveSlider() {
    const categoryWidth = categoriesCards[0].offsetWidth;
    const gap = 45;
    let moveAmount = categoryWidth + gap;

    scrollContainer.scrollTo({
        left: currentIndex * moveAmount,
        behavior: "smooth"
    });
    
    updateArrows();
}

rightBtn.addEventListener("click", function() {
    const visibleItems = getVisibleItems();
    const maxIndex = categoriesCards.length - visibleItems;

    if (currentIndex < maxIndex) {
        currentIndex++;
        moveSlider();
    }
});

leftBtn.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        moveSlider();
    }
});

function updateArrows() {
    const visibleItems = getVisibleItems();
    const maxIndex = categoriesCards.length - visibleItems;


    if (currentIndex === 0) {
        leftBtn.style.opacity = "0.3";
        leftBtn.style.cursor = "not-allowed";
    } else {
        leftBtn.style.opacity = "1";
        leftBtn.style.cursor = "pointer";
        leftBtn.style.display = "flex";
    }

    if (currentIndex >= maxIndex) {
        rightBtn.style.opacity = "0.3";
        rightBtn.style.cursor = "not-allowed";
    } else {
        rightBtn.style.opacity = "1";
        rightBtn.style.cursor = "pointer";
    }
}

updateArrows();

// 
// 
 const products = [
    // DMart Groceries
    {
        id: 1,
        image: 'image/dmart-Rava.jfif',
        productname: 'Rava / Suji 1kg',
        mrp: 85,
        offerPrice: 65,
        category: 'DMart Grocery'
    },
    {
        id: 2,
        image: 'image/dmart-Moong Daal.jfif',
        productname: 'Moong Daal 1kg',
        mrp: 150,
        offerPrice: 125,
        category: 'DMart Grocery'
    },
    {
        id: 3,
        image: 'image/dmart-masoor Dal.jfif',
        productname: 'Masoor Dal 1kg',
        mrp: 140,
        offerPrice: 115,
        category: 'DMart Grocery'
    },
    {
        id: 4,
        image: 'image/Dmart- Wheat Lokvan.jfif',
        productname: 'D-Mart Wheat Lokvan',
        mrp: 480,
        offerPrice: 420,
        category: 'DMart Grocery'
    },

    // Ready to cook
    {
        id: 5,
        image: 'image/ready-veggie upma.jfif',
        productname: 'Veggie Upma Mix',
        mrp: 120,
        offerPrice: 95,
        category: 'Ready To Cook'
    },
    {
        id: 6,
        image: 'image/ready-mix veg.jfif',
        productname: 'Mix Veg Frozen',
        mrp: 170,
        offerPrice: 140,
        category: 'Ready To Cook'
    },
    {
        id: 7,
        image: 'image/ready-french fries.jfif',
        productname: 'French Fries Frozen',
        mrp: 200,
        offerPrice: 160,
        category: 'Ready To Cook'
    },
    {
        id: 8,
        image: 'image/ready-dal rice.jpg',
        productname: 'Dal Rice Instant Pack',
        mrp: 160,
        offerPrice: 130,
        category: 'Ready To Cook'
    },
    {
        id: 9,
        image: 'image/ready-bitroot chilla.jfif',
        productname: 'Beetroot Chilla Mix',
        mrp: 140,
        offerPrice: 110,
        category: 'Ready To Cook'
    },

    // Beverages
    {
        id: 10,
        image: 'image/beverage-protein drinks.jfif',
        productname: 'Protein Energy Drink',
        mrp: 180,
        offerPrice: 150,
        category: 'beverage'
    },
    {
        id: 11,
        image: 'image/beverage-pepsi.jfif',
        productname: 'Pepsi 500ml',
        mrp: 45,
        offerPrice: 40,
        category: 'beverage'
    },
    {
        id: 12,
        image: 'image/beverage-mockup.jfif',
        productname: 'Beverage Mockup Special',
        mrp: 120,
        offerPrice: 90,
        category: 'beverage'
    },
    {
        id: 13,
        image: 'image/beverage-fanta.jfif',
        productname: 'Fanta 500ml',
        mrp: 45,
        offerPrice: 40,
        category: 'beverage'
    },
    {
        id: 14,
        image: 'image/beverage-Cocacola.jfif',
        productname: 'Coca Cola 500ml',
        mrp: 45,
        offerPrice: 40,
        category: 'beverage'
    },

    // Cookies
    {
        id: 15,
        image: 'image/cookie-protein.jfif',
        productname: 'Protein Cookies',
        mrp: 240,
        offerPrice: 200,
        category: 'Biscuits & Cookies'
    },
    {
        id: 16,
        image: 'image/cookie-kaju.jfif',
        productname: 'Kaju Premium Cookies',
        mrp: 220,
        offerPrice: 180,
        category: 'Biscuits & Cookies'
    },
    {
        id: 17,
        image: 'image/cookie-ji.jfif',
        productname: 'Ji Special Cookies',
        mrp: 135,
        offerPrice: 110,
        category: 'Biscuits & Cookies'
    },
    {
        id: 18,
        image: 'image/cookie-cream.jfif',
        productname: 'Cream Sandwich Cookies',
        mrp: 110,
        offerPrice: 90,
        category: 'Biscuits & Cookies'
    },
    {
        id: 19,
        image: 'image/cookie-circle.jfif',
        productname: 'Circle Butter Cookies',
        mrp: 150,
        offerPrice: 120,
        category: 'Biscuits & Cookies'
    },

    // Bath
    {
        id: 20,
        image: 'image/bath-original.jfif',
        productname: 'Original Bath Bar',
        mrp: 55,
        offerPrice: 40,
        category: 'Bath & Body'
    },
    {
        id: 21,
        image: 'image/bath-neon.jfif',
        productname: 'Neon Glow Soap',
        mrp: 80,
        offerPrice: 60,
        category: 'Bath & Body'
    },
    {
        id: 22,
        image: 'image/bath-moist.jfif',
        productname: 'Moisturizing Body Wash',
        mrp: 300,
        offerPrice: 250,
        category: 'Bath & Body'
    },
    {
        id: 23,
        image: 'image/bath-dewberry.jfif',
        productname: 'Dewberry Bath Soap',
        mrp: 60,
        offerPrice: 45,
        category: 'Bath & Body'
    },
    {
        id: 24,
        image: 'image/bath-brand.jfif',
        productname: 'Bath Brand Soap',
        mrp: 70,
        offerPrice: 50,
        category: 'Bath & Body'
    },

    // Fabrics
    {
        id: 25,
        image: 'image/fabric-5.jfif',
        productname: 'Fabric Special Care 5',
        mrp: 450,
        offerPrice: 399,
        category: 'Detergent & Fabric Care'
    },
    {
        id: 26,
        image: 'image/fabric-4.jfif',
        productname: 'Fabric Liquid Wash 4',
        mrp: 370,
        offerPrice: 319,
        category: 'Detergent & Fabric Care'
    },
    {
        id: 27,
        image: 'image/fabric-3.jfif',
        productname: 'Fabric Conditioner 3',
        mrp: 320,
        offerPrice: 279,
        category: 'Detergent & Fabric Care'
    },
    {
        id: 28,
        image: 'image/fabric-2.jfif',
        productname: 'Fabric Detergent 2',
        mrp: 400,
        offerPrice: 349,
        category: 'Detergent & Fabric Care'
    },
    {
        id: 29,
        image: 'image/fabric-1.jfif',
        productname: 'Fabric Softener 1',
        mrp: 350,
        offerPrice: 299,
        category: 'Detergent & Fabric Care'
    },

    // Cleaners
    {
        id: 30,
        image: 'image/cleaner-beco natural cleaner.jpg',
        productname: 'Beco Natural Cleaner',
        mrp: 249,
        offerPrice: 199,
        category: 'Cleaners'
    },
    {
        id: 31,
        image: 'image/cleaner-detol.jpg',
        productname: 'Dettol Cleaner',
        mrp: 180,
        offerPrice: 149,
        category: 'Cleaners'
    },
    {
        id: 32,
        image: 'image/cleaner-mould and mildew.jfif',
        productname: 'Mould and Mildew Cleaner',
        mrp: 260,
        offerPrice: 220,
        category: 'Cleaners'
    },
    {
        id: 33,
        image: 'image/cleaner-harpic.jpg',
        productname: 'Harpic Cleaner',
        mrp: 140,
        offerPrice: 110,
        category: 'Cleaners'
    },
    {
        id: 34,
        image: 'image/cleaner-multi harpic.jpg',
        productname: 'Multi Harpic Cleaner',
        mrp: 160,
        offerPrice: 130,
        category: 'Cleaners'
    },
    {
        id: 35,
        image: 'image/cleaner-beco.jpg',
        productname: 'Beco Cleaner',
        mrp: 219,
        offerPrice: 179,
        category: 'Cleaners'
    },
    {
        id: 36,
        image: 'image/cleaner-toilet.jpg',
        productname: 'Force Cleaner',
        mrp: 130,
        offerPrice: 99,
        category: 'Cleaners'
    },
    {
        id: 37,
        image: 'image/cleaner pack.jfif',
        productname: 'Cleaner Pack',
        mrp: 270,
        offerPrice: 199,
        category: 'Cleaners'
    },
    // extra products
    {
        id: 38,
        image: 'image/ready-bele.jfif',
        productname: 'Millet Bisi Bele Bath',
        mrp: 70,
        offerPrice: 40,
        category: 'Ready To Cook'
    },
    {
        id: 39,
        image: 'image/ready-bambino.webp',
        productname: 'Bambino',
        mrp: 90,
        offerPrice: 55,
        category: 'Ready To Cook'
    },
    {
        id: 40,
        image: 'image/ready-macaroni.jfif',
        productname: 'Nourish Macaroni',
        mrp: 110,
        offerPrice: 70,
        category: 'Ready To Cook'
    },
    {
        id: 41,
        image: 'image/beverage-strawberry.jfif',
        productname: 'Straberry',
        mrp: 375,
        offerPrice: 140,
        category: 'beverage'
    },
    {
        id: 42,
        image: 'image/beverage-milk.jfif',
        productname: 'Lorem Ipsum Milk',
        mrp: 70,
        offerPrice: 45,
        category: 'beverage'
    },
    {
        id: 43,
        image: 'image/beverage-bestrong.jfif',
        productname: 'BeStrong',
        mrp: 390,
        offerPrice: 130,
        category: 'beverage'
    }

];


        let cart = [];
        let currentCategory = "all";


        function deliveryDate() {

            let date = new Date();

            date.setDate(date.getDate() + 5);

            return date.toLocaleDateString(
                "en-IN",
                {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                }
            );

        }


        let categories = ["all"];


        products.forEach(function(product) {

            if (!categories.includes(product.category)) {

                categories.push(product.category);

            }

        });


        categories.forEach(function(category) {

            document.getElementById("filters").innerHTML += `

                <button onclick="filterProducts('${category}')">

                    ${category.toUpperCase()}

                </button>

            `;

        });



        // DISPLAY PRODUCTS

        function displayProducts(productList) {

            let productContainer =
                document.getElementById("products");


            productContainer.innerHTML = "";


            productList.forEach(function(product) {


                let cartProduct = cart.find(function(item) {

                    return item.id === product.id;

                });


                let quantity =
                    cartProduct ? cartProduct.quantity : 0;



                productContainer.innerHTML += `

                    <div class="card">

                        <img src="${product.image}">

                        <h3>
                            ${product.productname}
                        </h3>


                        <p class="mrp">

                            MRP. &#8377;${product.mrp}

                        </p>


                        <p class="offer">

                            &#8377;${product.offerPrice}

                        </p>


                        <p class="category">

                            Category:
                            ${product.category}

                        </p>


                        <p class="delivery">

                            Delivery:
                            ${deliveryDate()}

                        </p>


                        ${
                            quantity === 0

                            ?

                            `

                            <button
                                class="add-btn"
                                onclick="addToCart(${product.id})">

                                Add To Cart

                            </button>

                            `

                            :

                            `

                            <div class="quantity-box">

                                <button
                                    onclick="decreaseQuantity(${product.id})">

                                    <i class="fa-solid fa-minus"></i>

                                </button>


                                <span>

                                    ${quantity}

                                </span>


                                <button
                                    onclick="increaseQuantity(${product.id})">

                                    <i class="fa-solid fa-plus"></i>

                                </button>

                                <button
                                class="remove-btn"
                                onclick="removeProduct(${product.id})">

                                <i class="fa-solid fa-xmark"></i>

                            </button>

                            


                            </div>`

                        }

                    </div>

                `;

            });

        }



        // FILTER PRODUCTS

        function filterProducts(category) {

            if (category === "all") {

                displayProducts(products);

            }

            else {

                let filteredProducts =
                    products.filter(function(product) {

                        return product.category === category;

                    });


                displayProducts(filteredProducts);

            }

        }



        // ADD TO CART

        function addToCart(id) {

            let selectProduct =
                products.find(function(product) {

                    return product.id === id;

                });


            cart.push({

                id: selectProduct.id,

                quantity: 1

            });


            updateCart();


            displayProducts(products);

        }



        // INCREASE QUANTITY

        function increaseQuantity(id) {

            let product =
                cart.find(function(item) {

                    return item.id === id;

                });


            product.quantity++;


            updateCart();


            displayProducts(products);

        }



        // DECREASE QUANTITY

        function decreaseQuantity(id) {

            let product =
                cart.find(function(item) {

                    return item.id === id;

                });


            product.quantity--;


            if (product.quantity === 0) {

                removeProduct(id);

            }

            else {

                updateCart();

                displayProducts(products);

            }

        }



        // REMOVE PRODUCT

        function removeProduct(id) {

            cart = cart.filter(function(item) {

                return item.id !== id;

            });


            updateCart();


            displayProducts(products);

        }



        // UPDATE CART COUNT + TOTAL

        function updateCart() {

            let totalQuantity = 0;

            let totalAmount = 0;


            cart.forEach(function(item) {


                // Total quantity

                totalQuantity =
                    totalQuantity + item.quantity;



                // Find product

                let product =
                    products.find(function(product) {

                        return product.id === item.id;

                    });



                // Total amount

                totalAmount =
                    totalAmount +
                    (product.offerPrice * item.quantity);

            });



            // Cart Count

            document.getElementById("count").innerHTML =
                totalQuantity;



            // Total Amount

            document.getElementById("rupee").innerHTML =

                `Total: &#8377;${totalAmount}`;

        }

        

        // INITIAL DISPLAY

        displayProducts(products);


        // Initial cart update

        updateCart();
    