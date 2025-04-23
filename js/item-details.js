document.addEventListener('DOMContentLoaded', function() {
    // Get item ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    // Sample data - In a real application, this would come from an API
    const menuItems = {
        '1': {
            name: 'Margherita Pizza',
            image: 'images/margherita.jpg',
            description: 'Classic Italian pizza with fresh tomatoes, mozzarella, and basil.',
            price: '$12.99',
            isVeg: true,
            chefNote: 'Our signature pizza made with hand-tossed dough and fresh ingredients.',
            rating: 4.5,
            popularity: 'Very Popular',
            videoUrl: 'https://www.youtube.com/embed/example'
        },
        '2': {
            name: 'Chicken Tikka Masala',
            image: 'images/chicken-tikka.jpg',
            description: 'Tender chicken pieces in a rich, creamy tomato sauce with aromatic spices.',
            price: '$15.99',
            isVeg: false,
            chefNote: 'Slow-cooked to perfection with our secret blend of spices.',
            rating: 4.8,
            popularity: 'Best Seller',
            videoUrl: 'https://www.youtube.com/embed/example'
        }
        // Add more items as needed
    };

    // Load item details
    function loadItemDetails() {
        const item = menuItems[itemId];
        if (item) {
            document.getElementById('item-image').src = item.image;
            document.getElementById('item-name').textContent = item.name;
            document.getElementById('item-description').textContent = item.description;
            document.getElementById('item-price').textContent = item.price;
            document.getElementById('chef-note').textContent = item.chefNote;
            document.getElementById('item-popularity').textContent = item.popularity;
            document.getElementById('recipe-video').src = item.videoUrl;

            // Set veg/non-veg badge
            const badge = document.getElementById('item-badge');
            badge.className = 'item-badge ' + (item.isVeg ? 'veg' : 'non-veg');
            badge.textContent = item.isVeg ? 'VEG' : 'NON-VEG';

            // Set star rating
            const ratingContainer = document.getElementById('item-rating');
            ratingContainer.innerHTML = '';
            for (let i = 1; i <= 5; i++) {
                const star = document.createElement('span');
                star.className = 'star ' + (i <= item.rating ? 'active' : '');
                star.innerHTML = '★';
                ratingContainer.appendChild(star);
            }
        } else {
            // Handle item not found
            document.querySelector('.details-content').innerHTML = '<h2>Item not found</h2>';
        }
    }

    // Add to cart functionality
    document.querySelector('.add-to-cart').addEventListener('click', function() {
        // Add to cart logic here
        alert('Added to cart!');
    });

    // Add to favorites functionality
    document.querySelector('.favorite-btn').addEventListener('click', function() {
        // Add to favorites logic here
        alert('Added to favorites!');
    });

    // Load the item details
    loadItemDetails();
}); 