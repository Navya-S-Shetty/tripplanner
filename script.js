const ACCESS_KEY = "Dsk5Adot27q56wpyCMMmns2cnSTYoKZUwOiDD1nh3QM";
const destinations = ["Mysore", "Mangalore", "Bangalore", "Madikeri", "Chikmagalur", "Hampi"];
const cardsDiv = document.getElementById("cards");

destinations.forEach(place => {
    fetch(`https://api.unsplash.com/search/photos?query=${place}&per_page=1&client_id=${ACCESS_KEY}`)
        .then(res => res.json())
        .then(data => {
            const img = data.results[0]?.urls?.regular || "https://images.unsplash.com/photo-1488646953014-85cb44e25828";
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <img src="${img}" alt="${place}">
                <div class="card-content">
                    <h3>${place}</h3>
                    <p><i class="fa-solid fa-heart"></i> Add to Wishlist</p>
                </div>
            `;
            cardsDiv.appendChild(card);
        })
        .catch(err => console.error("Error:", err));
});