import { slideAnimation } from "./slider.js";

const BASE_URL = 'https://solovey.com.ua/test/'

const getData = async () => {
	const response = await fetch(`${BASE_URL}data.json`);
	const data = await response.json();
	const products = data;

	getElements(products);
}

getData();

const getElements = (products) => {
	const productList = document.querySelector('.sneakers');
	const sneakers = products.sneakers;
	const currency = products.currency;

	for (const key in sneakers) {
		productList.innerHTML += `
			<li
				class="sneakers__item"
			>
				<a
					class="sneakers__link" 
					href="${sneakers[key].link}"
				>
					<img 
						class="sneakers__logo"
						src="./assets/images/Nike-Logo.png"
					/>

					<h3 
						class="sneakers__model"
					>
						${sneakers[key].model}
					</h3>

					<div
						class="sneakers__price"
					>
						${currency} ${sneakers[key].price}
					</div>

					<img 
						class="sneakers__img"
						src="${sneakers[key].image_url}" 
					/>

					<div
						class="sneakers__button"
					>
						order now!
					</div>	
				</a>
			</li>		
		`
	}
}

setInterval(
	slideAnimation,
	3000,
);
