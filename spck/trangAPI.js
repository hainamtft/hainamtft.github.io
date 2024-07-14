const url = 'https://vietnamese-restaurants-on-delivery-app.p.rapidapi.com/rapid_api/v1/restaurants?page=1&source=grab';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '34a49d1be5mshd8263e5ce77ea99p1af87ejsn09f7892f4ffa',
		'x-rapidapi-host': 'vietnamese-restaurants-on-delivery-app.p.rapidapi.com'
	}
};

async function getdata(){
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        // console.log(data);
        // for (item of data ) {
        //     let card = document.createElement("div")
        //     card.classList.add("card")
        
        //     let imgcon = document.createElement("div")
        //     imgcon.classList.add("div")
        
        //     let image = document.createElement("img")
        //     image.setAttribute("src",item.image)
        
        //     imgcon.appendChild(image)
        //     card.appendChild(imgcon)
        
        //     let divcon = document.createElement("div")
        //     divcon.classList.add("div")
        
        //     let name = document.createElement("h5")
        //     name.classList.add("product-name")
        
        //     name.innerText = item.title;
        //     divcon.appendChild("name")
        
        //     let address = document.createElement("h5")
        //     address.classList.add("h5")
        
        //     let button = document.createElement("button")
        //     button.innerHTML = "xem thêm"
        //     divcon.appendChild("button")
        // }
    } catch (error) {
        console.error(error);
    }
}  


// var data =JSON.parse(result)
// for (item of data ) {
//     let card = document.createElement("div")
//     card.classList.add("card")

//     let imgcon = document.createElement("div")
//     imgcon.classList.add("div")

//     let image = document.createElement("img")
//     image.setAttribute("src",item.image)

//     imgcon.appendChild(image)
//     card.appendChild(imgcon)

//     let divcon = document.createElement("div")
//     divcon.classList.add("div")

//     let name = document.createElement("h5")
//     name.classList.add("product-name")

//     name.innerText = item.title;
//     divcon.appendChild("name")

//     let address = document.createElement("h5")
//     address.classList.add("h5")

//     let button = document.createElement("button")
//     button.innerHTML = "xem thêm"
//     divcon.appendChild("button")
// }