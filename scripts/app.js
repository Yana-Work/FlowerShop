$(document).ready(function() {
	$('.nav__burger').click(function(event) {
		$('.nav__burger, .nav__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});	




// CREATE section-4__catalogue-bouquet-cart

// data from server
const bouquets = [{
   id: 1,
   image: "https://i.ibb.co/qk3WZzd/bouquet-cart1.png",
   name: "Ніжна свіжість",
   flowers: "троянди та лілії",
   price: "445"
}, {
   id: 2,
   image: "https://i.ibb.co/4MQxNDY/bouquet-cart2.png",
   name: "Сорбет",
   flowers: "хризантеми та троянди",
   price: "450"
}, {
   id: 3,
   image: "https://i.ibb.co/Y2NgfWt/bouquet-cart3.png",
   name: "Yellow song",
   flowers: "соняшники та солідаго",
   price: "450"
}, {
   id: 4,
   image: "https://i.ibb.co/n8MRjry/bouquet-cart4.png",
   name: "Персиковий нектар",
   flowers: "лілії та троянди",
   price: "500"
}, {
   id: 5,
   image: "https://i.ibb.co/jr7XhZW/bouquet-cart5.png",
   name: "Аврора",
   flowers: "лілії та троянди",
   price: "465"
}, {
   id: 6,
   image: "https://i.ibb.co/1fJYCXz/bouquet-cart6.png",
   name: "Класика кохання",
   flowers: "червоні троянди",
   price: "465"
}];


// create template fragment

class Bouquet {
   constructor(bouquet) {
      this.id = bouquet.id;
      this.image = bouquet.image;
      this.name = bouquet.name;
      this.flowers = bouquet.flowers;
      this.price = bouquet.price;
   }

   createContentTemplate() {
      const catalogueItemOuter =
      `<div class="section-4__catalogue-item-outer">
         <div class="section-4__catalogue-item">
            <div class="catalogue-item-images">
               <img src= ${this.image}>
            </div>
            <div class="section-4__catalogue-bouquet-cart">
               <p>${this.name}:</p>
               <p>${this.flowers}</p>
            </div>
            <div class="section-4__bouquet-price">
               <p>${this.price} грн</p>
            </div>
            <div class="section-4__catalogue-btn">
               
               <button class="to-cart" data-articul="${this.id}">В кошик</button>
            </div>
         </div>
      </div>`;
   
   return createFragmentTemplate(catalogueItemOuter);
   }
}

class App {
   static renderAll(bouquets) {
      const el = document.getElementById("bouquet");
      const fragment = document.createDocumentFragment();

      bouquets.forEach((bouquet) => {
         fragment.appendChild(new Bouquet(bouquet).createContentTemplate());
      });
      el.appendChild(fragment);
   }
}

function createFragmentTemplate(str) {
	const template = document.createElement("template");
	template.innerHTML = str;
	return template.content;
}

App.renderAll(bouquets);

