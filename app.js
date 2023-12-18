const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "VAN GOGH",
    price: 119,
    colors: [
      {
        code: "darkblue",
        img: "./img/bearbrick1.png",
      },
      {
        code: "lightgreen",
        img: "./img/bearbrick2.png",
      },
    ],
  },
  {
    id: 2,
    title: "TOM N JERRY",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/tomnjerry.png",
      },
      {
        code: "brown",
        img: "./img/jerry.png",
      },
    ],
  },
  {
    id: 3,
    title: "IRON MAN",
    price: 109,
    colors: [
      {
        code: "red",
        img: "./img/ironman.png",
      },
      {
        code: "yellow",
        img: "./img/ironman2.png",
      },
    ],
  },
  {
    id: 4,
    title: "BAPE",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/bape.png",
      },
      {
        code: "lightpink",
        img: "./img/bape2.png",
      },
    ],
  },
  {
    id: 5,
    title: "MINION",
    price: 99,
    colors: [
      {
        code: "yellow",
        img: "./img/minion.png",
      },
      {
        code: "lightblue",
        img: "./img/minion2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});