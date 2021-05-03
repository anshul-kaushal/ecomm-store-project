// product objects

const productOne = {
    name: 'journal',
    priceInCAD: {
        original: 29,
        discounted: 20,
    },
    rating: 4,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis exercitationem facilis voluptates labore doloremque molestiae maiores, itaque repellat, harum, excepturi cupiditate voluptas maxime. Quam excepturi aliquam dolore quidem voluptatibus? Officia.',
    img: {
        src: 'img/journal.jpg',
        alt: 'image of a journal'
    }
}

const productTwo = {
    name: 'smart wallet',
    priceInCAD: {
        original: 40,
        discounted: 35,
    },
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea iusto distinctio, perferendis repudiandae ab animi tempore consequatur illum deserunt exercitationem similique repellat eaque, aliquid corrupti provident, blanditiis quaerat expedita doloremque!',
    img: {
        src: 'img/wallet.jpg',
        alt: 'image of wallet'
    }
}

const productThree = {
    name: 't-shirt',
    priceInCAD: {
        original: 30,
        discounted: 28,
    },
    rating: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates, harum, libero est quia ipsam blanditiis in eaque recusandae nesciunt tempore. Tenetur, veritatis! Nesciunt inventore optio numquam harum quia possimus.',
    img: {
        src: 'img/t-shirts.jpg',
        alt: 'image of t-shirts'
    }
}

const productFour = {
    name: 'smart wrist-band',
    priceInCAD: {
        original: 100,
        discounted: 96,
    },
    rating: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates, harum, libero est quia ipsam blanditiis in eaque recusandae nesciunt tempore. Tenetur, veritatis! Nesciunt inventore optio numquam harum quia possimus.',
    img: {
        src: 'img/band.jpg',
        alt: 'image of a band',
    }
}

const productFive = {
    name: 'fountain pen',
    priceInCAD: {
        original: 15,
        discounted: 14,
    },
    rating: 3.5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates, harum, libero est quia ipsam blanditiis in eaque recusandae nesciunt tempore. Tenetur, veritatis! Nesciunt inventore optio numquam harum quia possimus.',
    img: {
        src: 'img/pen.jpg',
        alt: 'image of a pen',
    }
}

const productSix = {
    name: 'pocket watch',
    priceInCAD: {
        original: 10,
        discounted: 7,
    },
    rating: 4,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea iusto distinctio, perferendis repudiandae ab animi tempore consequatur illum deserunt exercitationem similique repellat eaque, aliquid corrupti provident, blanditiis quaerat expedita doloremque!',
    img: {
        src: 'img/pocket-watch.jpg',
        alt: 'image of a pocket watch',
    }
}

const productSeven = {
    name: 'wayfarer',
    priceInCAD: {
        original: 25,
        discounted: null,
    },
    rating: 4,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea iusto distinctio, perferendis repudiandae ab animi tempore consequatur illum deserunt exercitationem similique repellat eaque, aliquid corrupti provident, blanditiis quaerat expedita doloremque!',
    img: {
        src: 'img/wayfarers.jpg',
        alt: 'image of wayfarer sunglasses',
    }
}

const productEight = {
    name: 'studio headphones',
    priceInCAD: {
        original: 200,
        discounted: 190,
    },
    rating: 5,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea iusto distinctio, perferendis repudiandae ab animi tempore consequatur illum deserunt exercitationem similique repellat eaque, aliquid corrupti provident, blanditiis quaerat expedita doloremque!',
    img: {
        src: 'img/headphones.jpg',
        alt: 'image of headphones',
    }
}

const productNine = {
    name: 'backpack',
    priceInCAD: {
        original: 40,
        discounted: 38,
    },
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea iusto distinctio, perferendis repudiandae ab animi tempore consequatur illum deserunt exercitationem similique repellat eaque, aliquid corrupti provident, blanditiis quaerat expedita doloremque!',
    img: {
        src: 'img/backpack.jpg',
        alt: 'image of a backpack',
    }
}

const productTen = {
    name: 'minimalist mug',
    priceInCAD: {
        original: 7,
        discounted: 6,
    },
    rating: 4.5,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis exercitationem facilis voluptates labore doloremque molestiae maiores, itaque repellat, harum, excepturi cupiditate voluptas maxime. Quam excepturi aliquam dolore quidem voluptatibus? Officia.',
    img: {
        src: 'img/mug.jpg',
        alt: 'image of a mug',
    }
}

// array of products
const products = [productOne, productTwo, productThree, productFour, productFive, productSix, productSeven, productEight, productNine, productTen];

// adding product details dynamically
// associating main class with variable productsTable
const productsTable = document.querySelector(`#products`);

const outputFilteredList = function(filteredProductsArray) {
    productsTable.innerHTML = ``;


    filteredProductsArray.forEach((product) => {
        const productArticle = document.createElement('article');
        productArticle.classList.add('product');

        // introduced dynamic star rating to the code
        let starRatingString = '';
        for(i=1; i<=Math.floor(product.rating); i++){
            starRatingString += `<span class="fas fa-star">`
        }
        if(product.rating % 1 != 0){
            starRatingString += `<span class="fas fa-star-half"></span>`
    }

    // for cases when discounted price == null
    let priceString = '';
    if(product.priceInCAD.discounted == null){
        priceString = `<data class = "price" value="${product.priceInCAD.original}">$${product.priceInCAD.original}</data>`;
    }
    else{
        priceString = `<data class = "price" value="${product.priceInCAD.discounted}"><del>$${product.priceInCAD.original}</del> <ins>$${product.priceInCAD.discounted}</ins></data>`;
    }

    // adding dynamic html to productArticle
    productArticle.innerHTML = `
    <h2 class="sub-heading">${product.name}</h2>
    <div class="product-images-container">
    <img class="product-images" src=${product.img.src} alt=${product.img.alt}>
    <div class="cart-and-favorite">
      <button type="button" class="index-favorite-button" aria-label="add product to favorites">
        <i class="far fa-heart"></i>
    </button>
    <button type="button" class="index-add-to-cart-button" aria-label="add 
    product to cart">
      <i class="fas fa-shopping-cart"></i>
    </button>
    </div>
    </div>
    <div class="price-and-rating">
    <!-- <data class = "price" value="39"><del>$50.00</del> <ins>$39.00</ins></data> -->
    ${priceString}
    <div class="rating">
      ${starRatingString}
    </div>
    </div>
    <p class="product-text" lang="zxx">${product.description}
    </p>
    <div class="learn-more">
    <a href="product.html">
        <img class="learn-more-button" src="./img/learn-more.svg" alt="button to open the product description page">
        <img class="learn-more-button-hover" src="./img/learn-more-hover.svg" alt="button to open the product description page">
    </a>
    </div>
    `
    // adding the productArticle to the productsTable element
    productsTable.appendChild(productArticle);
})
}

const filterRating = document.querySelector("#filter-rating");
const filterSearch = document.querySelector("#find");
const filterButton = document.querySelector("#add-filter-button");

const filter = {
    searchProduct: '',
    starRating: 0,
}

const filterProduct = function(){
    let filteredProducts = products.filter(function(product) {
        return (product.rating >= filter.starRating) && (product.name.toUpperCase().includes(filter.searchProduct));
    })

    outputFilteredList(filteredProducts);
}

filterRating.addEventListener('change', function(event) {
    const rating = event.target;
    const output = document.querySelector(`output[for="filterRating"]`);
    output.textContent = `Minimum Rating: ${rating.value}`;

    // filter.starRating = Number(rating.value);

    // filterProduct()
})

// filterSearch.addEventListener('input', function(event) {
//     filter.searchProduct = event.target.value.toUpperCase();

//     filterProduct()
// })
filterButton.addEventListener('click', function(event) {
    filter.starRating = Number(filterRating.value);
    filter.searchProduct = filterSearch.value.toUpperCase();

    filterProduct();
})

outputFilteredList(products);

// toggle menu
// const menu = document.getElementById('menu')
// menu.addEventListener('click', function(event){
//     document.getElementById('menu-dropdown').classList.toggle('show')
// })