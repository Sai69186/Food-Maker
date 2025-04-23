// recipe.js
// Populates the recipe page dynamically from localStorage or query params

document.addEventListener('DOMContentLoaded', function() {
    // For demo: fallback sample data
    const sampleRecipe = {
        title: 'Kaju (Kaju Katli)',
        note: 'Tip: Do not over-grind the cashews, or they will become oily.',
        video: 'https://www.youtube.com/embed/4X7d7Qm4kJw',
        ingredients: [
            '1 cup cashew nuts (kaju)',
            '1/2 cup sugar',
            '1/4 cup water',
            '1 tsp ghee (clarified butter)',
            'Silver foil (optional, for decoration)'
        ],
        steps: [
            'Grind the cashew nuts to a fine powder.',
            'In a pan, mix sugar and water. Heat it until one-string consistency is achieved.',
            'Add the powdered cashews and stir continuously on low flame.',
            'Cook until the mixture thickens and leaves the sides of the pan.',
            'Add a tsp of ghee and mix well.',
            'Transfer the mixture onto a greased plate and roll it evenly.',
            'Let it cool for a few minutes, then cut into diamond shapes.',
            'Decorate with silver foil if desired. Serve fresh.'
        ],
        chef: 'Chef Cascade',
        prevRating: '4.9',
        currRating: '5.0'
    };

    // Try to get recipe data from localStorage (set by menu click)
    let data = null;
    try {
        data = JSON.parse(localStorage.getItem('selectedRecipe'));
    } catch(e) {
        console.error('Error parsing selectedRecipe from localStorage:', e);
    }
    if (!data) data = sampleRecipe;
    console.log('Loaded recipe data:', data);

    document.getElementById('recipe-title').textContent = data.title;
    document.getElementById('video-embed').src = data.video;
    document.getElementById('chef-name').textContent = data.chef;

    document.getElementById('curr-rating').textContent = data.currRating;

    // Previous ratings (array of {name, stars})
    const prevRatings = data.prevRatings || [
        { name: 'Amit', stars: 5 },
        { name: 'Priya', stars: 4 },
        { name: 'Rahul', stars: 5 },
        { name: 'Sneha', stars: 4 }
    ];
    const prevRatingsList = document.getElementById('prev-ratings-list');
    prevRatingsList.innerHTML = '';
    prevRatings.forEach(r => {
        const li = document.createElement('li');
        li.innerHTML = `<b>${r.name}</b>: <span class='star-group'>${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</span>`;
        prevRatingsList.appendChild(li);
    });

    // Ingredients
    const ingList = document.getElementById('ingredients-list');
    if (!ingList) {
        console.error('No #ingredients-list element found in HTML');
    } else if (!Array.isArray(data.ingredients)) {
        console.error('No ingredients array found in data:', data);
    } else {
        ingList.innerHTML = '';
        data.ingredients.forEach(ing => {
            const li = document.createElement('li');
            li.textContent = ing;
            ingList.appendChild(li);
        });
    }
    // Ingredients note or tip
    const ingNote = document.getElementById('ingredients-note');
    if (ingNote) {
        if (data.note) {
            ingNote.textContent = data.note;
            ingNote.style.display = '';
        } else if (data.tip) {
            ingNote.textContent = data.tip;
            ingNote.style.display = '';
        } else {
            ingNote.textContent = '';
            ingNote.style.display = 'none';
        }
    }
    // Steps
    const stepsList = document.getElementById('steps-list');
    if (stepsList) {
        stepsList.innerHTML = '';
        if (Array.isArray(data.steps)) {
            data.steps.forEach(step => {
                const li = document.createElement('li');
                li.textContent = step;
                stepsList.appendChild(li);
            });
        }
    }

    // Interactive star rating
    const starDiv = document.getElementById('star-rating');
    if (starDiv) {
        starDiv.innerHTML = '';
        let selectedRating = 0;
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('span');
            star.textContent = '★';
            star.style.marginRight = '0.2em';
            star.dataset.value = i;
            star.classList.add('rate-star');
            star.addEventListener('mouseenter', function() {
                highlightStars(i);
            });
            star.addEventListener('mouseleave', function() {
                highlightStars(selectedRating);
            });
            star.addEventListener('click', function() {
                selectedRating = i;
                highlightStars(selectedRating);
                document.getElementById('rating-message').textContent = `Thank you for rating this recipe ${selectedRating} stars!`;
            });
            starDiv.appendChild(star);
        }
    }
    function highlightStars(n) {
        if (!starDiv) return;
        Array.from(starDiv.children).forEach((star, idx) => {
            star.style.color = idx < n ? '#ff9800' : '#bbb';
        });
    }
    highlightStars(0);
});
