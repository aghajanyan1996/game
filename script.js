let items = document.querySelectorAll(".items");
let matForImg = Math.round(Math.random() * 8);
let h1 = document.querySelector('.h1');

// Verjnakan Patasxan;
let count = 0;
function forCount() {
  count++;
  if (count == 1) {
    setTimeout(() => {
      location.reload() // => Tarmacum F5 Avtomat;
    }, 3000);
  }
  h1.innerText = `${count}`;
}


function colorSetItems() {
  setInterval(() => {
    let mathForItems = Math.round(Math.random() * 8);
    items[mathForItems].style.boxShadow = "inset 0 0 25px 5px darkgreen";
  }, 50);

  setInterval(() => {
    let mathForItems = Math.round(Math.random() * 8);
    items[mathForItems].style.boxShadow = "inset 0 0 25px 5px lime";
  }, 150);
}
colorSetItems();

// Create Img For Item => F5;

let imgPhoto = document.createElement("div");
imgPhoto.className = "imgPhoto";


// Sxal Patasxan;
let countThree = 0;
function NumberThree() {
  countThree++;
  if (countThree >= 3) {
    setTimeout(() => {
      location.reload(); // restart F4 Browser; 
    }, 700);
  }
}

items.forEach((element, index) => {
  element.onclick = function () {
    element.style.transform = 'rotateZ(3600deg) rotateX(360deg) scale(0)';
    element.style.transition = "all 1s cubic-bezier(0,1.87,1,1.66)";
    element.style.filter = 'blur(10px)';
    NumberThree();
  }
});


// Cisht patasxan;

function imgAbso() {
  if (matForImg < 3) {
    setTimeout(() => {
      imgPhoto.style.top = "-120%";
    }, 1500);
  }
  if (matForImg >= 3 && matForImg < 6) {
    setTimeout(() => {
      imgPhoto.style.top = "-220%";
    }, 1500)
  }
  if (matForImg >= 6 && matForImg <= 8) {
    setTimeout(() => {
      imgPhoto.style.top = "-320%";
    }, 1500);
  }
}

// Chist patasxan return;

items[matForImg].onclick = function () {
  items[matForImg].append(imgPhoto);
  imgAbso();
  forCount();
};



let container = document.querySelector('.container')

let boxs = document.createElement("div");
boxs.className = "boxs";
container.append(boxs);

//  Create Matrix Interval  //

let create = setInterval(() => {
  let item = document.createElement("div");
  item.className = "item";
  boxs.append(item);

  // item Styles;
  let ML = Math.round(Math.random() * 98);
  let MT = 50 - Math.round(Math.random() * 15);
  item.style.left = `${ML}%`;
  item.style.top = `${-MT}%`;
  //   setInterval(() => {
  //     item.style.clipPath = "circle(111.8% at 51% 0)";
  //   }, 1);

  //  Create Nums For Item;
  let Hachaxakanutyun = Math.round(Math.random() * 15);
  for (let i = 0; i < Hachaxakanutyun; i++) {
    let OneZero = Math.round(Math.random() * 1);
    let nums = document.createElement("div");
    nums.innerText = `${OneZero}`;
    nums.className = "nums";
    item.append(nums);
  }

  if (item.style.top == `${-MT}%`) {
    setTimeout(() => {
      item.style.transition = "all 20000ms";
      item.style.top = "130%";
    }, 1);
  }

  // Delate;
  setTimeout(() => {
    item.remove();
  }, 9000);
}, 15);
