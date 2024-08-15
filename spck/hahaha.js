const url = 'https://the-vegan-recipes-db.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '34a49d1be5mshd8263e5ce77ea99p1af87ejsn09f7892f4ffa',
		'x-rapidapi-host': 'the-vegan-recipes-db.p.rapidapi.com'
	}
};
async function getdata() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        let coveringDiv = document.getElementById(
            "covering-div"
        )

    
        for (const item of data) {
            let card = document.createElement("div");
            card.classList.add("card");

            let imgcon = document.createElement("div");
            imgcon.classList.add("imgcon");

            let image = document.createElement("img");
            image.classList.add("image")
            image.setAttribute("src", item.image);

            imgcon.appendChild(image);
            card.appendChild(imgcon);

            let divcon = document.createElement("div");
            divcon.classList.add("divcon");

            let name = document.createElement("h5");
            name.classList.add("product-name");
            name.innerText = item.title;
            divcon.appendChild(name);

            let address = document.createElement("h5");
            address.classList.add("address");

            


            card.appendChild(divcon);
            coveringDiv.appendChild(card); 
        } 

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}  

getdata();

