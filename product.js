//Afficher la page de l'article
const newPage = (productId) => {
    // Interroger l'API pour récupérer les données du produit
    fetch(`https://api.kedufront.juniortaker.com/item/${productId}`)
        .then(response => response.json())
        .then(data => {
            const newPageDiv = document.createElement('div');
            newPageDiv.classList.add('oneItemPage');
            newPageDiv.dataset.id = productId;

            newPageDiv.innerHTML = `
                <div class="bigarticle">
                    <i class="fa-solid fa-xmark"></i>
                    <div id="image_${productId}"></div>
                    <h2 id="names_${productId}"></h2>
                    <p id="description_${productId}">${data.item.description}</p>
                    <p id="creation">Crée le : ${data.item.createdIn}</p>
                    <p id="prices_${productId}">${data.item.price} €</p>
                    <button class="addCart">Ajouter au panier</button>
                </div>
            `;

            document.body.innerHTML = '';
            document.body.appendChild(newPageDiv);
            const affichage_image = document.querySelector(`#image_${productId}`);
            const image = `<img src="https://api.kedufront.juniortaker.com/item/picture/${productId}" class="bigimage"></img>`;
            affichage_image.insertAdjacentHTML("afterbegin", image);


            const name = data.item.name;
            const affichage_name = document.querySelector(`#names_${productId}`);
            affichage_name.innerHTML = name;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données du produit :', error);
        });
}

//Revenir au menu
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-xmark')) {
        window.location.href = 'index.html';
    }
});