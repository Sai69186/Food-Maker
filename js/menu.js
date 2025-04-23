document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.menu-category');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Hide all sections
            sections.forEach(sec => sec.style.display = 'none');
            // Activate clicked tab
            tab.classList.add('active');
            // Show corresponding section
            const cat = tab.getAttribute('data-category');
            const section = document.getElementById(cat);
            if(section) section.style.display = '';
        });
    });
    // Show first tab's section by default
    tabs[0].classList.add('active');
    sections.forEach((sec, idx) => sec.style.display = idx === 0 ? '' : 'none');

    // Make menu cards clickable to open recipe page with data
    const recipeData = {
        'Kaju': {
            title: 'Kaju (Kaju Katli)',
            note: 'Tip: Do not over-grind the cashews, or they will become oily.',
            video: 'https://www.youtube.com/embed/4X7d7Qm4kJw', // Example video
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
        },
        'Kaju Katli': {
            title: 'Kaju Katli',
            note: 'Tip: For best texture, do not over-grind the cashews.' ,
            video: 'https://www.youtube.com/embed/4X7d7Qm4kJw', // Hebbars Kitchen
            ingredients: [
                '1 cup cashew nuts (kaju)',
                '1/2 cup sugar',
                '1/4 cup water',
                '1/2 tsp cardamom powder (optional)',
                '1 tsp ghee'
            ],
            steps: [
                'Grind cashews to a fine powder (do not over-grind).',
                'Heat sugar and water in a pan to make a 1-string consistency syrup.',
                'Add cashew powder and stir continuously on low heat.',
                'Add cardamom powder (optional) and mix well.',
                'Cook until mixture leaves the sides and forms a soft dough.',
                'Transfer to a greased plate, cool slightly, and knead with ghee.',
                'Roll out and cut into diamond shapes.'
            ],
            chef: 'Chef Neha Mathur',
            prevRating: '4.8',
            currRating: '5.0'
        },
        'Rasmalai': {
            title: 'Rasmalai',
            note: 'Tip: Use full-fat milk for softer paneer balls.' ,
            video: 'https://www.youtube.com/embed/1q4kF1Xz0pY', // Hebbars Kitchen
            ingredients: [
                '1 liter milk',
                '2 tbsp lemon juice',
                '1/2 cup sugar',
                '1.5 cups water',
                '1/2 liter milk (for rabri)',
                '2 tbsp sugar (for rabri)',
                'Few saffron strands',
                '1/2 tsp cardamom powder',
                'Chopped nuts (for garnish)'
            ],
            steps: [
                'Boil milk, add lemon juice to curdle. Drain and rinse paneer.',
                'Knead paneer to a smooth dough, make small balls and flatten.',
                'Boil sugar and water, add paneer discs, cook for 10 min.',
                'Boil 1/2 liter milk, add sugar, saffron, cardamom, and reduce to half.',
                'Squeeze cooked discs, add to rabri, chill and serve garnished with nuts.'
            ],
            chef: 'Chef Reena Agarwal',
            prevRating: '4.7',
            currRating: '4.9'
        },
        'Motichoor Laddu': {
            title: 'Motichoor Laddu',
            note: 'Tip: Make sure the sugar syrup reaches 1-string consistency for perfect binding.' ,
            video: 'https://www.youtube.com/embed/0y3w8xZyRzU', // Hebbars Kitchen
            ingredients: [
                '1 cup besan (gram flour)',
                '1/2 cup water',
                '1 cup sugar',
                '1/2 cup water (for syrup)',
                'A pinch of orange food color',
                '1/2 tsp cardamom powder',
                '2 tbsp ghee',
                'Chopped nuts (for garnish)',
                'Oil or ghee for frying'
            ],
            steps: [
                'Make a thin batter with besan, food color, and water.',
                'Heat oil/ghee, pour batter through a perforated ladle to make tiny boondis.',
                'Fry boondis until just cooked (not crispy), drain.',
                'Make sugar syrup of 1-string consistency with sugar and water.',
                'Add boondis to syrup, mix in cardamom and ghee, let soak.',
                'Shape into laddus, garnish with nuts.'
            ],
            chef: 'Chef Ajay Chopra',
            prevRating: '4.9',
            currRating: '5.0'
        },
        'Mysore Pak': {
            title: 'Mysore Pak',
            note: 'Tip: Add hot ghee gradually and stir continuously for a soft, porous texture.' ,
            video: 'https://www.youtube.com/embed/2qv2pKQ3p3I', // Hebbars Kitchen
            ingredients: [
                '1 cup besan (gram flour)',
                '1 cup sugar',
                '1/2 cup ghee',
                '1/2 cup oil',
                '1/2 cup water'
            ],
            steps: [
                'Sieve besan and keep ready.',
                'Make sugar syrup with sugar and water to 1-string consistency.',
                'Add besan gradually, stirring to avoid lumps.',
                'Add hot ghee and oil mixture in small portions, keep stirring.',
                'When mixture leaves sides and becomes porous, pour into greased tray.',
                'Cool slightly and cut into pieces.'
            ],
            chef: 'Chef Suma Row',
            prevRating: '4.7',
            currRating: '4.8'
        },
        'Paneer Tikka': {
            title: 'Paneer Tikka',
            note: 'Tip: Marinate paneer and veggies for at least 30 min for best flavor.',
            video: 'https://www.youtube.com/embed/6YDTfEHQ3pA', // Hebbars Kitchen
            ingredients: [
                '250g paneer', '1 cup yogurt', '2 tbsp tandoori masala', '1 tbsp lemon juice', '1 tsp ginger-garlic paste', 'Salt to taste', 'Capsicum, Onion, Tomato (cubed)'
            ],
            steps: [
                'Cut paneer and vegetables into cubes.',
                'Mix yogurt, masala, lemon juice, ginger-garlic paste, and salt.',
                'Marinate paneer and veggies for 30 min.',
                'Skewer and grill until charred.',
                'Serve hot with chutney.'
            ],
            ingredients: [
                '250g paneer', '1 cup yogurt', '2 tbsp tandoori masala', '1 tbsp lemon juice', '1 tsp ginger-garlic paste', 'Salt to taste', 'Capsicum, Onion, Tomato (cubed)'
            ],
            steps: [
                'Cut paneer and vegetables into cubes.',
                'Mix yogurt, masala, lemon juice, ginger-garlic paste, and salt.',
                'Marinate paneer and veggies for 30 min.',
                'Skewer and grill until charred.',
                'Serve hot with chutney.'
            ],
            chef: 'Chef Anjali Sharma',
            prevRating: '4.5',
            currRating: '4.7'
        },
        'Chicken Tikka': {
            title: 'Chicken Tikka',
            note: 'Tip: Marinate chicken for at least 2 hours for juicier pieces.',
            video: 'https://www.youtube.com/embed/9kP8Yl7v1nY', // Sanjeev Kapoor Khazana
            ingredients: [
                '500g chicken', '1 cup yogurt', '2 tbsp tikka masala', '1 tbsp lemon juice', '1 tsp ginger-garlic paste', 'Salt to taste'
            ],
            steps: [
                'Cut chicken into cubes.',
                'Mix yogurt, masala, lemon juice, ginger-garlic paste, and salt.',
                'Marinate chicken for 2 hours.',
                'Skewer and grill until cooked.',
                'Serve with mint chutney.'
            ],
            ingredients: [
                '500g chicken', '1 cup yogurt', '2 tbsp tikka masala', '1 tbsp lemon juice', '1 tsp ginger-garlic paste', 'Salt to taste'
            ],
            steps: [
                'Cut chicken into cubes.',
                'Mix yogurt, masala, lemon juice, ginger-garlic paste, and salt.',
                'Marinate chicken for 2 hours.',
                'Skewer and grill until cooked.',
                'Serve with mint chutney.'
            ],
            chef: 'Chef Rajeev Menon',
            prevRating: '4.2',
            currRating: '4.6'
        },
        'Samosa': {
            title: 'Samosa',
            video: 'https://www.youtube.com/embed/6nQ4bJbLq7A', // NishaMadhulika
            ingredients: [
                '2 cups all-purpose flour', '2 tbsp oil', '2 potatoes', '1/2 cup peas', '1 tsp cumin', '1 tsp garam masala', 'Salt', 'Oil for frying'
            ],
            steps: [
                'Prepare dough with flour, oil, salt, and water.',
                'Boil and mash potatoes, mix with peas and spices.',
                'Roll dough, fill with potato mixture, shape into cones.',
                'Seal and deep fry until golden brown.'
            ],
            chef: 'Chef Nisha Verma',
            prevRating: '4.8',
            currRating: '4.9'
        },
        'Dhokla': {
            title: 'Dhokla',
            video: 'https://www.youtube.com/embed/WL5w8YBcXwQ', // Hebbars Kitchen
            ingredients: [
                '1 cup besan (gram flour)', '1/2 cup yogurt', '1/2 cup water', '1 tsp Eno', 'Salt', '1 tsp sugar', '1 tsp lemon juice', '1 tsp mustard seeds', 'Curry leaves'
            ],
            steps: [
                'Mix besan, yogurt, water, salt, sugar, lemon juice.',
                'Add Eno and mix well.',
                'Pour into greased plate and steam for 15 min.',
                'Temper with mustard seeds and curry leaves.'
            ],
            chef: 'Chef Rupal Patel',
            prevRating: '4.7',
            currRating: '4.8'
        },
        'Vada Pav': {
            title: 'Vada Pav',
            video: 'https://www.youtube.com/embed/2Q5jzv1A5rA', // Hebbars Kitchen
            ingredients: [
                '4 pav buns', '2 potatoes', '1 tsp mustard seeds', '1 tsp turmeric', '1 tsp ginger-garlic paste', 'Salt', 'Chili powder', 'Gram flour', 'Oil for frying'
            ],
            steps: [
                'Boil and mash potatoes, temper with spices.',
                'Make balls, dip in gram flour batter.',
                'Deep fry and serve in pav buns with chutney.'
            ],
            chef: 'Chef Ramesh Pawar',
            prevRating: '4.6',
            currRating: '4.8'
        },
        'Fish Fry': {
            title: 'Fish Fry',
            video: 'https://www.youtube.com/embed/8Q3F3KqQ9lQ', // Village Cooking Channel
            ingredients: [
                '500g fish', '2 tbsp lemon juice', '2 tbsp chili powder', 'Salt', 'Oil for frying'
            ],
            steps: [
                'Marinate fish with spices and lemon juice.',
                'Shallow fry until crispy.'
            ],
            chef: 'Chef Suresh Kumar',
            prevRating: '4.4',
            currRating: '4.7'
        },
        'Egg Pakora': {
            title: 'Egg Pakora',
            note: 'Tip: Serve hot and crisp for best taste.',
            video: 'https://www.youtube.com/embed/7b2KjQmD6Qw', // Kabita's Kitchen
            ingredients: [
                '4 eggs', '1 cup gram flour', 'Salt', 'Chili powder', 'Oil for frying'
            ],
            steps: [
                'Boil eggs and slice.',
                'Dip slices in gram flour batter.',
                'Deep fry until golden.'
            ],
            chef: 'Chef Kabita Singh',
            prevRating: '4.3',
            currRating: '4.5'
        },
        'Hyderabadi Biryani': {
            title: 'Hyderabadi Biryani',
            note: 'Tip: Use saffron-infused milk for authentic flavor and color.',
            video: 'https://www.youtube.com/embed/0eZl3gkQw3Q', // Sanjeev Kapoor Khazana
            ingredients: [
                '2 cups basmati rice', '500g chicken/mutton', '2 onions', 'Yogurt', 'Biryani masala', 'Ghee', 'Spices', 'Saffron', 'Salt'
            ],
            steps: [
                'Cook rice with whole spices.',
                'Layer marinated meat and rice.',
                'Cook on dum (steam) for 30 min.'
            ],
            chef: 'Chef Sanjeev Kapoor',
            prevRating: '4.9',
            currRating: '5.0'
        },
        'Veg Biryani': {
            title: 'Veg Biryani',
            note: 'Tip: Layer rice and veggies for best taste and aroma.',
            video: 'https://www.youtube.com/embed/h8L6D2vYy6E', // Hebbars Kitchen
            ingredients: [
                '2 cups basmati rice', 'Mixed vegetables', 'Yogurt', 'Biryani masala', 'Ghee', 'Spices', 'Salt'
            ],
            steps: [
                'Cook rice with whole spices.',
                'Layer sautéed vegetables and rice.',
                'Cook on dum (steam) for 20 min.'
            ],
            chef: 'Chef Priya Desai',
            prevRating: '4.6',
            currRating: '4.8'
        },
        'Egg Biryani': {
            title: 'Egg Biryani',
            note: 'Tip: Use long-grain basmati rice for fluffy biryani.',
            video: 'https://www.youtube.com/embed/4pZ4bQ8w8lE', // Kabita's Kitchen
            ingredients: [
                '2 cups basmati rice', '4 eggs', 'Onion', 'Yogurt', 'Spices', 'Salt'
            ],
            steps: [
                'Cook rice with spices.',
                'Layer boiled eggs and rice.',
                'Cook on dum (steam) for 15 min.'
            ],
            chef: 'Chef Kabita Singh',
            prevRating: '4.5',
            currRating: '4.7'
        },
        'Idli': {
            title: 'Idli',
            note: 'Tip: Ferment batter overnight for soft and fluffy idlis.',
            video: 'https://www.youtube.com/embed/5wW8h5lK6mA', // Hebbars Kitchen
            ingredients: [
                '2 cups rice', '1 cup urad dal', 'Salt', 'Water'
            ],
            steps: [
                'Soak rice and dal, grind to batter.',
                'Ferment overnight.',
                'Steam in idli molds.'
            ],
            chef: 'Chef Lakshmi Rao',
            prevRating: '4.7',
            currRating: '4.9'
        },
        'Dosa': {
            title: 'Dosa',
            note: 'Tip: Spread batter thinly for crisp dosas.',
            video: 'https://www.youtube.com/embed/4N6yQwz0s5A', // Hebbars Kitchen
            ingredients: [
                '2 cups rice', '1 cup urad dal', 'Salt', 'Oil'
            ],
            steps: [
                'Soak rice and dal, grind to batter.',
                'Ferment overnight.',
                'Spread on hot tawa and cook with oil.'
            ],
            chef: 'Chef Lakshmi Rao',
            prevRating: '4.8',
            currRating: '5.0'
        },
        'Upma': {
            title: 'Upma',
            note: 'Tip: Roast semolina well to prevent stickiness.',
            video: 'https://www.youtube.com/embed/0JwQ8FQ6H6k', // Hebbars Kitchen
            ingredients: [
                '1 cup semolina (sooji)', '2 cups water', 'Vegetables', 'Mustard seeds', 'Curry leaves', 'Salt', 'Oil'
            ],
            steps: [
                'Roast semolina.',
                'Sauté vegetables and spices.',
                'Add water and semolina, cook until fluffy.'
            ],
            chef: 'Chef Meena Iyer',
            prevRating: '4.6',
            currRating: '4.8'
        },
        'Masala Chai': {
            title: 'Masala Chai',
            note: 'Tip: Simmer longer for a stronger flavor.' ,
            video: 'https://www.youtube.com/embed/4yYb5v6ZlqA', // Hebbars Kitchen
            ingredients: [
                '2 cups water', '1 cup milk', '2 tsp tea leaves', 'Spices', 'Sugar'
            ],
            steps: [
                'Boil water with spices.',
                'Add tea leaves, simmer, then milk and sugar.',
                'Strain and serve.'
            ],
            chef: 'Chef Ritu Arora',
            prevRating: '4.9',
            currRating: '5.0'
        },
        'Lassi': {
            title: 'Lassi',
            note: 'Tip: Use chilled yogurt for a refreshing drink.',
            video: 'https://www.youtube.com/embed/4v1Q7r2Jk9k', // Hebbars Kitchen
            ingredients: [
                '2 cups yogurt', '1/2 cup water', 'Sugar', 'Cardamom', 'Ice cubes'
            ],
            steps: [
                'Blend yogurt, water, sugar, cardamom, and ice.',
                'Serve chilled.'
            ],
            chef: 'Chef Aman Gill',
            prevRating: '4.8',
            currRating: '4.9'
        },
        'Filter Coffee': {
            title: 'Filter Coffee',
            note: 'Tip: Use freshly ground coffee powder for best aroma.',
            video: 'https://www.youtube.com/embed/vR5I3QwP4nA', // Hebbars Kitchen
            ingredients: [
                '2 tbsp filter coffee powder', '1 cup water', '1 cup milk', 'Sugar'
            ],
            steps: [
                'Brew coffee with water.',
                'Mix with hot milk and sugar.'
            ],
            chef: 'Chef Sriram Iyer',
            prevRating: '4.7',
            currRating: '4.8'
        },
        'Gulab Jamun': {
            title: 'Gulab Jamun',
            note: 'Tip: Fry on low heat for even cooking and soft texture.',
            video: 'https://www.youtube.com/embed/3w7xJQ2b9bE', // Hebbars Kitchen
            ingredients: [
                '1 cup milk powder', '1/4 cup flour', '1/4 cup ghee', 'Milk', 'Sugar syrup', 'Cardamom'
            ],
            steps: [
                'Make dough with milk powder, flour, ghee, milk.',
                'Shape balls, fry until golden.',
                'Soak in sugar syrup.'
            ],
            chef: 'Chef Ananya Singh',
            prevRating: '4.9',
            currRating: '5.0'
        },
        'Jalebi': {
            title: 'Jalebi',
            video: 'https://www.youtube.com/embed/5oD6EJr5WnM', // Hebbars Kitchen
            ingredients: [
                '1 cup flour', '1/2 cup yogurt', '1/2 cup water', '1/4 tsp baking soda', 'Sugar syrup', 'Saffron'
            ],
            steps: [
                'Make batter with flour, yogurt, water, baking soda.',
                'Ferment for 8 hours.',
                'Pipe spirals into hot oil, fry, and soak in syrup.'
            ],
            chef: 'Chef Rina Shah',
            prevRating: '4.8',
            currRating: '4.9'
        },
        'Rabri': {
            title: 'Rabri',
            video: 'https://www.youtube.com/embed/7bG4Y6JQ5yY', // Hebbars Kitchen
            ingredients: [
                '1 liter milk', '1/2 cup sugar', 'Nuts', 'Cardamom', 'Saffron'
            ],
            steps: [
                'Boil milk until reduced to half.',
                'Add sugar, cardamom, saffron, and nuts.',
                'Chill and serve.'
            ],
            chef: 'Chef Anita Mehta',
            prevRating: '4.7',
            currRating: '4.8'
        },
        'Hara Bhara Kabab': {
            title: 'Hara Bhara Kabab',
            note: 'Tip: Squeeze out extra water from spinach for crisp kababs.',
            video: 'https://www.youtube.com/embed/6nQ4bJbLq7A', // NishaMadhulika
            ingredients: [
                '2 medium potatoes',
                '1 cup spinach (blanched and chopped)',
                '1/2 cup green peas (boiled)',
                '1 green chili (chopped)',
                '1 tsp ginger paste',
                '1/2 tsp garam masala',
                '1/2 tsp chaat masala',
                'Salt to taste',
                '2 tbsp bread crumbs',
                'Oil for shallow frying'
            ],
            steps: [
                'Mash potatoes, spinach, and peas together.',
                'Mix in chili, ginger, garam masala, chaat masala, salt, and bread crumbs.',
                'Shape into patties.',
                'Shallow fry on both sides until golden.'
            ],
            chef: 'Chef Sunita Rao',
            prevRating: '4.6',
            currRating: '4.8'
        },
        'Spring Roll': {
            title: 'Spring Roll',
            note: 'Tip: Seal the edges well to prevent filling from leaking during frying.' ,
            video: 'https://www.youtube.com/embed/4N6yQwz0s5A', // Hebbars Kitchen
            ingredients: [
                '8 spring roll wrappers',
                '1 cup cabbage (shredded)',
                '1/2 cup carrot (julienned)',
                '1/2 cup capsicum (julienned)',
                '1/2 cup onion (thinly sliced)',
                '1 tbsp soy sauce',
                '1 tsp vinegar',
                '1/2 tsp pepper',
                'Salt to taste',
                'Oil for frying'
            ],
            steps: [
                'Sauté all veggies in a little oil until just tender.',
                'Add soy sauce, vinegar, salt, and pepper. Mix and cool.',
                'Place filling in wrappers, roll tightly, and seal edges.',
                'Deep fry until golden brown.'
            ],
            chef: 'Chef Priya Desai',
            prevRating: '4.5',
            currRating: '4.7'
        },
        'Fish Fry': {
            title: 'Fish Fry',
            video: 'https://www.youtube.com/embed/8Q3F3KqQ9lQ', // Village Cooking Channel
            ingredients: [
                '500g fish fillets',
                '2 tbsp lemon juice',
                '1 tbsp ginger-garlic paste',
                '1 tsp turmeric',
                '2 tsp chili powder',
                '1 tsp coriander powder',
                'Salt to taste',
                'Oil for frying'
            ],
            steps: [
                'Marinate fish with lemon juice, ginger-garlic paste, turmeric, chili, coriander, and salt for 30 min.',
                'Heat oil in a pan.',
                'Shallow fry fish on both sides until crisp and cooked.'
            ],
            chef: 'Chef Suresh Kumar',
            prevRating: '4.4',
            currRating: '4.7'
        },
        'Dhokla': {
            title: 'Dhokla',
            video: 'https://www.youtube.com/embed/WL5w8YBcXwQ', // Hebbars Kitchen
            ingredients: [
                '1 cup besan (gram flour)',
                '1/2 cup yogurt',
                '1/2 cup water',
                '1 tsp Eno fruit salt',
                '1 tsp sugar',
                '1 tsp lemon juice',
                'Salt to taste',
                '1 tsp mustard seeds',
                'Curry leaves',
                '2 green chilies (slit)',
                '1 tbsp oil'
            ],
            steps: [
                'Mix besan, yogurt, water, sugar, lemon juice, and salt to make a smooth batter.',
                'Add Eno and mix well. Pour into a greased plate.',
                'Steam for 15 minutes or until set.',
                'Heat oil, splutter mustard seeds, add curry leaves and chilies, pour over dhokla.',
                'Cut into squares and serve.'
            ],
            chef: 'Chef Rupal Patel',
            prevRating: '4.7',
            currRating: '4.8'
        },
        'Vada Pav': {
            title: 'Vada Pav',
            video: 'https://www.youtube.com/embed/2Q5jzv1A5rA', // Hebbars Kitchen
            ingredients: [
                '4 pav buns',
                '2 potatoes',
                '1 tsp mustard seeds',
                '1 tsp turmeric',
                '1 tsp ginger-garlic paste',
                '2 green chilies (chopped)',
                'Salt to taste',
                'Gram flour (besan)',
                'Pinch of baking soda',
                'Oil for frying',
                'Chutney for serving'
            ],
            steps: [
                'Boil and mash potatoes, temper with mustard seeds, turmeric, ginger-garlic paste, chilies, and salt.',
                'Shape into balls.',
                'Make a batter with besan, baking soda, salt, and water.',
                'Dip balls in batter and deep fry until golden.',
                'Serve in pav buns with chutney.'
            ],
            chef: 'Chef Ramesh Pawar',
            prevRating: '4.6',
            currRating: '4.8'
        },
        'Upma': {
            title: 'Upma',
            note: 'Tip: Roast semolina well to prevent stickiness.',
            video: 'https://www.youtube.com/embed/0JwQ8FQ6H6k', // Hebbars Kitchen
            ingredients: [
                '1 cup semolina (sooji)',
                '2 cups water',
                '1 onion (chopped)',
                '1/2 cup mixed vegetables',
                '1 tsp mustard seeds',
                '1 tsp urad dal',
                '1-2 green chilies (chopped)',
                'Curry leaves',
                'Salt to taste',
                '2 tbsp oil or ghee'
            ],
            steps: [
                'Roast semolina in a pan until fragrant. Set aside.',
                'Heat oil, add mustard seeds, urad dal, chilies, curry leaves, and onion. Sauté.',
                'Add veggies and cook until soft.',
                'Add water and salt, bring to boil.',
                'Slowly add roasted semolina, stirring constantly.',
                'Cook until thickened and fluffy.'
            ],
            chef: 'Chef Meena Iyer',
            prevRating: '4.6',
            currRating: '4.8'
        },
        'Lassi': {
            title: 'Lassi',
            note: 'Tip: Use chilled yogurt for a refreshing drink.',
            video: 'https://www.youtube.com/embed/4v1Q7r2Jk9k', // Hebbars Kitchen
            ingredients: [
                '2 cups yogurt',
                '1/2 cup chilled water',
                '2 tbsp sugar',
                '1/4 tsp cardamom powder',
                'Ice cubes',
                'Chopped nuts (optional)'
            ],
            steps: [
                'Blend yogurt, water, sugar, cardamom, and ice cubes until frothy.',
                'Pour into glasses and top with nuts.'
            ],
            chef: 'Chef Aman Gill',
            prevRating: '4.8',
            currRating: '4.9'
        },
        'Filter Coffee': {
            title: 'Filter Coffee',
            note: 'Tip: Use freshly ground coffee powder for best aroma.',
            video: 'https://www.youtube.com/embed/vR5I3QwP4nA', // Hebbars Kitchen
            ingredients: [
                '2 tbsp filter coffee powder',
                '1 cup water',
                '1 cup milk',
                'Sugar to taste'
            ],
            steps: [
                'Add coffee powder to filter, pour hot water, let it drip.',
                'Heat milk, add sugar, and mix with decoction.',
                'Pour back and forth to froth.'
            ],
            chef: 'Chef Sriram Iyer',
            prevRating: '4.7',
            currRating: '4.8'
        },
        'Gulab Jamun': {
            title: 'Gulab Jamun',
            note: 'Tip: Fry on low heat for even cooking and soft texture.',
            video: 'https://www.youtube.com/embed/3w7xJQ2b9bE', // Hebbars Kitchen
            ingredients: [
                '1 cup milk powder',
                '1/4 cup all-purpose flour',
                '1/4 cup ghee',
                'Milk (as needed)',
                '1 cup sugar',
                '1 cup water',
                'Cardamom powder',
                'Oil or ghee for frying'
            ],
            steps: [
                'Make a soft dough with milk powder, flour, ghee, and milk.',
                'Shape into balls.',
                'Fry on low heat until golden brown.',
                'Boil sugar and water to make syrup, add cardamom.',
                'Soak fried balls in warm syrup.'
            ],
            chef: 'Chef Ananya Singh',
            prevRating: '4.9',
            currRating: '5.0'
        },
        'Jalebi': {
            title: 'Jalebi',
            video: 'https://www.youtube.com/embed/5oD6EJr5WnM', // Hebbars Kitchen
            ingredients: [
                '1 cup all-purpose flour',
                '1/2 cup yogurt',
                '1/2 cup water',
                '1/4 tsp baking soda',
                '1 cup sugar',
                '1/2 cup water (for syrup)',
                'Saffron',
                'Oil or ghee for frying'
            ],
            steps: [
                'Mix flour, yogurt, water, and baking soda to make a smooth batter. Ferment 8 hours.',
                'Pour batter into a piping bag.',
                'Pipe spirals into hot oil, fry until crisp.',
                'Boil sugar, water, and saffron to make syrup.',
                'Dip fried jalebis in syrup.'
            ],
            chef: 'Chef Rina Shah',
            prevRating: '4.8',
            currRating: '4.9'
        },
        'Rabri': {
            title: 'Rabri',
            video: 'https://www.youtube.com/embed/7bG4Y6JQ5yY', // Hebbars Kitchen
            ingredients: [
                '1 liter full-fat milk',
                '1/2 cup sugar',
                '2 tbsp chopped nuts',
                '1/2 tsp cardamom powder',
                'Few saffron strands'
            ],
            steps: [
                'Boil milk in a wide pan, simmer and keep scraping sides.',
                'Add sugar, cardamom, saffron, and nuts.',
                'Cook until thick, chill and serve.'
            ],
            chef: 'Chef Anita Mehta',
            prevRating: '4.7',
            currRating: '4.8'
        }
    };

    document.querySelectorAll('.menu-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            const name = card.querySelector('h3') ? card.querySelector('h3').textContent.split(' ')[0] : '';
            const data = recipeData[name] || {
                title: name,
                video: 'https://www.youtube.com/embed/',
                ingredients: ['Sample ingredient 1', 'Sample ingredient 2'],
                steps: ['Step 1', 'Step 2'],
                chef: 'Chef Name',
                prevRating: '4.0',
                currRating: '4.2'
            };
            localStorage.setItem('selectedRecipe', JSON.stringify(data));
            window.open('recipe.html', '_blank');
        });
    });
});
