document.addEventListener('DOMContentLoaded', function() {
    // List of all images in the root FSD folder and images/menu
    const imageList = [
        // Root folder images
        'samosa.jpg', 'dhokla.jpg', 'vadapav.jpg', 'paneerthikka.jpg', 'hara bara kabab.jpg', 'spring rolls.jpg', 'chicken tikka.webp', 'masala-fish-fry.jpg', 'Egg-Biryani.jpg', 'EggPakora.webp', 'dosa.jpeg', 'filter coffee.jpg', 'gulab jamun.jpg', 'hyderabadi biryani.avif', 'hyderabadi biryani.jpg', 'idli.jpg', 'ing.jpg', 'jilebi.jpg', 'lassi.jpg', 'logo.jpg', 'masala chai.jpg', 'rabri.webp', 'upma.jpg', 'veg biryani.jpg',
        // images/menu
        'images/menu/kaju-katli.jpg', 'images/menu/motichoor-laddu.jpg', 'images/menu/mysore-pak.jpg', 'images/menu/rasmalai.jpg'
    ];
    const captions = [
        'Samosa', 'Dhokla', 'Vada Pav', 'Paneer Tikka', 'Hara Bhara Kabab', 'Spring Roll', 'Chicken Tikka', 'Fish Fry', 'Egg Biryani', 'Egg Pakora', 'Dosa', 'Filter Coffee', 'Gulab Jamun', 'Hyderabadi Biryani', 'Hyderabadi Biryani', 'Idli', 'Ingredients', 'Jilebi', 'Lassi', 'Logo', 'Masala Chai', 'Rabri', 'Upma', 'Veg Biryani',
        'Kaju Katli', 'Motichoor Laddu', 'Mysore Pak', 'Rasmalai'
    ];
    const grid = document.querySelector('.gallery-grid');
    grid.innerHTML = '';
    for (let i = 0; i < imageList.length; i++) {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `<img src="${imageList[i]}" alt="${captions[i] || ''}"><div class="caption">${captions[i] || ''}</div>`;
        grid.appendChild(div);
    }
});
