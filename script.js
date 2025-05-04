document.getElementById("searchBar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        alert("Search functionality is not implemented yet!");
    }
});

function showRecipeDetails(recipeName) {
    const recipeDetails = {
        'Motichoor Laddu': {
            title: 'Motichoor Laddu',
            ingredients: [
                '2 cups besan (gram flour)',
                '1 cup powdered sugar',
                '1/2 cup ghee',
                '1/4 cup milk',
                '1/2 tsp cardamom powder',
                'Chopped nuts for garnishing (optional)'
            ],
            note: 'Use fresh besan and pure ghee for the best taste.',
            steps: [
                'Sieve the besan to remove any lumps.',
                'Heat ghee in a pan and add besan. Roast on low flame until it turns golden and gives a nice aroma.',
                'Remove from heat and let it cool for 5-10 minutes.',
                'Add powdered sugar and cardamom powder. Mix well.',
                'Gradually add milk to bind the mixture. It should be of a consistency that can be rolled into small balls.',
                'Take small portions and roll into tiny round ladoos.',
                'Optionally, garnish with chopped nuts.',
                'Let the ladoos cool and set for about 30 minutes before serving.'
            ],
            video: 'https://youtu.be/INPULt0l3QY?si=QhU3TCVwSML7LPBv',
            chef: 'Chef Cascade',
            prevRating: '4.8',
            currRating: '4.9'
        },
        'Samosa': {
            title: 'Samosa',
            ingredients: [
                '2 cups all-purpose flour',
                '4 tbsp oil',
                '1/2 tsp salt',
                '4-5 medium potatoes',
                '1 cup green peas',
                '1 tsp cumin seeds',
                '1 tsp ginger-garlic paste',
                '1 tsp red chili powder',
                '1 tsp garam masala',
                'Oil for deep frying'
            ],
            note: 'Make sure the dough is not too soft or too hard.',
            steps: [
                'Mix flour, salt, and oil to make a stiff dough.',
                'Boil and mash the potatoes.',
                'Heat oil in a pan, add cumin seeds, ginger-garlic paste, and spices.',
                'Add peas and mashed potatoes, mix well.',
                'Roll out the dough into thin circles and cut into halves.',
                'Form cones and fill with the potato mixture.',
                'Seal the edges with water.',
                'Deep fry until golden brown.'
            ],
            video: 'https://youtu.be/example1',
            chef: 'Chef Cascade',
            prevRating: '4.7',
            currRating: '4.8'
        },
        'Paneer Tikka': {
            title: 'Paneer Tikka',
            ingredients: [
                '250g paneer',
                '1 cup yogurt',
                '2 tbsp tandoori masala',
                '1 tbsp lemon juice',
                '1 tsp ginger-garlic paste',
                'Salt to taste',
                'Capsicum, Onion, Tomato (cubed)'
            ],
            note: 'Marinate paneer and veggies for at least 30 min for best flavor.',
            steps: [
                'Cut paneer and vegetables into cubes.',
                'Mix yogurt, masala, lemon juice, ginger-garlic paste, and salt.',
                'Marinate paneer and veggies for 30 min.',
                'Skewer and grill until charred.',
                'Serve hot with chutney.'
            ],
            video: 'https://youtu.be/example2',
            chef: 'Chef Anjali Sharma',
            prevRating: '4.5',
            currRating: '4.7'
        },
        'Hyderabadi Biryani': {
            title: 'Hyderabadi Biryani',
            ingredients: [
                '2 cups basmati rice',
                '500g chicken/mutton',
                '2 large onions, sliced',
                '2 tbsp ginger-garlic paste',
                '1 cup yogurt',
                '2 tbsp biryani masala',
                '1 tsp turmeric powder',
                '1 tsp red chili powder',
                'Fresh mint and coriander leaves',
                'Saffron strands soaked in milk',
                'Ghee and oil for cooking'
            ],
            note: 'Use aged basmati rice for best results.',
            steps: [
                'Marinate meat with yogurt and spices for 2 hours.',
                'Soak rice for 30 minutes.',
                'Fry onions until golden brown.',
                'Cook meat until tender.',
                'Layer rice and meat in a heavy-bottomed pot.',
                'Add saffron milk and fried onions.',
                'Seal with dough and cook on low heat for 20 minutes.',
                'Serve hot with raita.'
            ],
            video: 'https://youtu.be/example3',
            chef: 'Chef Cascade',
            prevRating: '4.9',
            currRating: '5.0'
        },
        'Masala Chai': {
            title: 'Masala Chai',
            ingredients: [
                '2 cups water',
                '2 cups milk',
                '2 tsp tea leaves',
                '1 inch ginger, crushed',
                '2-3 cardamom pods',
                '1 small cinnamon stick',
                '2-3 cloves',
                'Sugar to taste'
            ],
            note: 'Use fresh spices for the best flavor.',
            steps: [
                'Boil water with crushed spices.',
                'Add tea leaves and simmer for 2 minutes.',
                'Add milk and bring to a boil.',
                'Add sugar to taste.',
                'Strain and serve hot.'
            ],
            video: 'https://youtu.be/example4',
            chef: 'Chef Cascade',
            prevRating: '4.8',
            currRating: '4.8'
        },
        'Kaju Katli': {
            title: 'Kaju Katli',
            ingredients: [
                '1 cup cashew nuts (kaju)',
                '1/2 cup sugar',
                '1/4 cup water',
                '1 tsp ghee (clarified butter)',
                'Silver foil (optional, for decoration)'
            ],
            note: 'Tip: Do not over-grind the cashews, or they will become oily.',
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
            video: 'https://www.youtube.com/embed/4X7d7Qm4kJw',
            chef: 'Chef Cascade',
            prevRating: '4.9',
            currRating: '5.0'
        },
        'Rasmalai': {
            title: 'Rasmalai',
            ingredients: [
                '1 liter full-fat milk',
                '2 tbsp lemon juice',
                '1/2 cup sugar',
                '1.5 cups water',
                '1/2 liter milk (for rabri)',
                '2 tbsp sugar (for rabri)',
                'Few saffron strands',
                '1/2 tsp cardamom powder',
                'Chopped nuts (for garnish)'
            ],
            note: 'Tip: Use full-fat milk for softer paneer balls.',
            steps: [
                'Boil 1 liter milk, add lemon juice to curdle. Drain and rinse paneer.',
                'Knead paneer to a smooth dough, make small balls and flatten.',
                'Boil 1/2 cup sugar and 1.5 cups water, add paneer discs, cook for 10 min.',
                'Boil 1/2 liter milk, add 2 tbsp sugar, saffron, cardamom, and reduce to half.',
                'Squeeze cooked discs, add to rabri, chill and serve garnished with nuts.'
            ],
            video: 'https://youtu.be/INPULt0l3QY?si=QhU3TCVwSML7LPBv',
            chef: 'Chef Reena Agarwal',
            prevRating: '4.7',
            currRating: '4.9'
        },
        'Dhokla': {
            title: 'Dhokla',
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
            note: 'Steam immediately after adding fruit salt.',
            steps: [
                'Mix besan, yogurt, water, sugar, lemon juice, and salt to make a smooth batter.',
                'Add Eno and mix well. Pour into a greased plate.',
                'Steam for 15 minutes or until set.',
                'Heat oil, splutter mustard seeds, add curry leaves and chilies, pour over dhokla.',
                'Cut into squares and serve.'
            ],
            video: 'https://youtu.be/example7',
            chef: 'Chef Rupal Patel',
            prevRating: '4.7',
            currRating: '4.8'
        },
        'Vada Pav': {
            title: 'Vada Pav',
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
            note: 'Serve immediately for best taste.',
            steps: [
                'Boil and mash potatoes, temper with mustard seeds, turmeric, ginger-garlic paste, chilies, and salt.',
                'Shape into balls.',
                'Make a batter with besan, baking soda, salt, and water.',
                'Dip balls in batter and deep fry until golden.',
                'Serve in pav buns with chutney.'
            ],
            video: 'https://youtu.be/example8',
            chef: 'Chef Ramesh Pawar',
            prevRating: '4.6',
            currRating: '4.8'
        },
        'Hara Bhara Kabab': {
            title: 'Hara Bhara Kabab',
            ingredients: [
                '2 cups fresh spinach (palak)',
                '1 cup green peas (fresh or frozen)',
                '2 medium potatoes',
                '1/2 cup bread crumbs',
                '1/4 cup corn flour',
                '1 tbsp ginger-garlic paste',
                '1 tsp cumin seeds',
                '1 tsp garam masala',
                '1 tsp chaat masala',
                '1/2 tsp red chili powder',
                '1/2 tsp turmeric powder',
                '1 tbsp lemon juice',
                '2 tbsp fresh coriander leaves, chopped',
                '2 tbsp fresh mint leaves, chopped',
                '2 green chilies, finely chopped (optional)',
                'Salt to taste',
                'Oil for shallow frying',
                'For garnishing:',
                'Lemon wedges',
                'Mint chutney',
                'Onion rings'
            ],
            note: 'Use fresh spinach for vibrant color and better taste. You can also add paneer for extra richness.',
            steps: [
                'Preparation:',
                '1. Wash spinach thoroughly and blanch in hot water for 2 minutes.',
                '2. Drain and immediately transfer to ice water to retain color.',
                '3. Boil potatoes until tender, peel and mash them.',
                '4. Boil green peas until soft, then mash them coarsely.',
                '5. Squeeze out excess water from spinach and chop finely.',
                '',
                'Making the mixture:',
                '1. Heat 1 tbsp oil in a pan, add cumin seeds.',
                '2. Add ginger-garlic paste and sauté for 30 seconds.',
                '3. Add chopped spinach and cook for 2 minutes.',
                '4. Add mashed peas and potatoes, mix well.',
                '5. Add all spices (garam masala, chaat masala, red chili powder, turmeric).',
                '6. Add lemon juice, chopped coriander, and mint leaves.',
                '7. Mix everything well and cook for 2-3 minutes.',
                '8. Let the mixture cool completely.',
                '',
                'Shaping and cooking:',
                '1. Add bread crumbs and corn flour to the mixture.',
                '2. Mix well and make small patties of equal size.',
                '3. Heat oil in a non-stick pan for shallow frying.',
                '4. Place the patties carefully in the pan.',
                '5. Cook on medium heat until golden brown on both sides.',
                '6. Drain on paper towels to remove excess oil.',
                '',
                'Serving:',
                '1. Arrange the kababs on a serving plate.',
                '2. Garnish with lemon wedges and onion rings.',
                '3. Serve hot with mint chutney.',
                '4. Enjoy as a starter or snack!'
            ],
            video: 'https://youtu.be/example9',
            chef: 'Chef Cascade',
            prevRating: '4.8',
            currRating: '4.8'
        },
        'Chicken Tikka': {
            title: 'Chicken Tikka',
            ingredients: [
                '500g chicken',
                '1 cup yogurt',
                '2 tbsp tikka masala',
                '1 tbsp lemon juice',
                '1 tsp ginger-garlic paste',
                'Salt to taste'
            ],
            note: 'Marinate chicken for at least 2 hours for juicier pieces.',
            steps: [
                'Cut chicken into cubes.',
                'Mix yogurt, masala, lemon juice, ginger-garlic paste, and salt.',
                'Marinate chicken for 2 hours.',
                'Skewer and grill until cooked.',
                'Serve with mint chutney.'
            ],
            video: 'https://youtu.be/example10',
            chef: 'Chef Rajeev Menon',
            prevRating: '4.2',
            currRating: '4.6'
        },
        'Idli': {
            title: 'Idli',
            ingredients: [
                '2 cups idli rice',
                '1 cup urad dal',
                '1 tsp fenugreek seeds',
                'Salt to taste',
                'Oil for greasing'
            ],
            note: 'Soak rice and dal separately for best results.',
            steps: [
                'Soak rice and dal overnight.',
                'Grind to smooth batter.',
                'Allow to ferment for 8-10 hours.',
                'Add salt and mix well.',
                'Grease idli molds.',
                'Pour batter into molds.',
                'Steam for 10-12 minutes.',
                'Serve hot with sambar and chutney.'
            ],
            video: 'https://youtu.be/example11',
            chef: 'Chef Meena Iyer',
            prevRating: '4.8',
            currRating: '4.9'
        },
        'Dosa': {
            title: 'Dosa',
            ingredients: [
                '2 cups rice',
                '1 cup urad dal',
                '1 tsp fenugreek seeds',
                'Salt to taste',
                'Oil for cooking'
            ],
            note: 'Batter consistency is key for perfect dosas.',
            steps: [
                'Soak rice and dal overnight.',
                'Grind to smooth batter.',
                'Allow to ferment for 8-10 hours.',
                'Add salt and mix well.',
                'Heat tawa and spread batter.',
                'Drizzle oil around edges.',
                'Cook until golden brown.',
                'Serve hot with sambar and chutney.'
            ],
            video: 'https://youtu.be/example12',
            chef: 'Chef Sriram Iyer',
            prevRating: '4.9',
            currRating: '4.9'
        },
        'Gulab Jamun': {
            title: 'Gulab Jamun',
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
            note: 'Knead dough gently to avoid hard jamuns.',
            steps: [
                'Make a soft dough with milk powder, flour, ghee, and milk.',
                'Shape into balls.',
                'Fry on low heat until golden brown.',
                'Boil sugar and water to make syrup, add cardamom.',
                'Soak fried balls in warm syrup.'
            ],
            video: 'https://youtu.be/example13',
            chef: 'Chef Ananya Singh',
            prevRating: '4.9',
            currRating: '5.0'
        },
        'Mysore Pak': {
            title: 'Mysore Pak',
            ingredients: [
                '1 cup besan (gram flour)',
                '1 cup sugar',
                '1/2 cup ghee',
                '1/2 cup oil',
                '1/2 cup water'
            ],
            note: 'Tip: Add hot ghee gradually and stir continuously for a soft, porous texture.',
            steps: [
                'Sieve besan and keep ready.',
                'Make sugar syrup with sugar and water to 1-string consistency.',
                'Add besan gradually, stirring to avoid lumps.',
                'Add hot ghee and oil mixture in small portions, keep stirring.',
                'When mixture leaves sides and becomes porous, pour into greased tray.',
                'Cool slightly and cut into pieces.'
            ],
            video: 'https://www.youtube.com/embed/2qv2pKQ3p3I',
            chef: 'Chef Suma Row',
            prevRating: '4.7',
            currRating: '4.8'
        },
        'Fish Fry': {
            title: 'Fish Fry',
            ingredients: [
                '500g fish',
                '2 tbsp lemon juice',
                '2 tbsp chili powder',
                'Salt to taste',
                'Oil for frying'
            ],
            note: 'Marinate fish with spices and lemon juice for at least 30 minutes.',
            steps: [
                'Clean and cut fish into pieces.',
                'Marinate with lemon juice, chili powder, and salt for 30 minutes.',
                'Heat oil in a pan.',
                'Shallow fry fish pieces until golden and crispy on both sides.',
                'Serve hot with lemon wedges and onion rings.'
            ],
            video: 'https://www.youtube.com/embed/8Q3F3KqQ9lQ',
            chef: 'Chef Suresh Kumar',
            prevRating: '4.4',
            currRating: '4.7'
        },
        'Egg Pakora': {
            title: 'Egg Pakora',
            ingredients: [
                '4 eggs',
                '1 cup gram flour',
                'Salt to taste',
                'Chili powder',
                'Oil for frying'
            ],
            note: 'Serve hot and crisp for best taste.',
            steps: [
                'Boil eggs and slice.',
                'Mix gram flour, salt, and chili powder with water to make a batter.',
                'Dip egg slices in batter.',
                'Deep fry until golden.',
                'Serve hot with chutney.'
            ],
            video: 'https://www.youtube.com/embed/7b2KjQmD6Qw',
            chef: 'Chef Kabita Singh',
            prevRating: '4.3',
            currRating: '4.5'
        },
        'Veg Biryani': {
            title: 'Veg Biryani',
            ingredients: [
                '2 cups basmati rice',
                'Mixed vegetables (carrot, beans, peas, potato)',
                '1 cup yogurt',
                '2 tbsp biryani masala',
                '1 tsp turmeric powder',
                '1 tsp red chili powder',
                'Fresh mint and coriander leaves',
                'Saffron strands soaked in milk',
                'Ghee and oil for cooking',
                'Salt to taste'
            ],
            note: 'Layer rice and veggies for best taste and aroma.',
            steps: [
                'Soak rice for 30 minutes and cook until 70% done.',
                'Sauté vegetables in ghee and oil, add spices and yogurt.',
                'Layer rice and vegetables in a pot.',
                'Add saffron milk and fried onions.',
                'Cover and cook on low heat for 20 minutes.',
                'Serve hot with raita.'
            ],
            video: 'https://www.youtube.com/embed/h8L6D2vYy6E',
            chef: 'Chef Priya Desai',
            prevRating: '4.6',
            currRating: '4.8'
        },
        'Upma': {
            title: 'Upma',
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
            note: 'Roast semolina well to prevent stickiness.',
            steps: [
                'Roast semolina in a pan until fragrant. Set aside.',
                'Heat oil, add mustard seeds, urad dal, chilies, curry leaves, and onion. Sauté.',
                'Add veggies and cook until soft.',
                'Add water and salt, bring to boil.',
                'Slowly add roasted semolina, stirring constantly.',
                'Cook until thickened and fluffy.'
            ],
            video: 'https://www.youtube.com/embed/0JwQ8FQ6H6k',
            chef: 'Chef Meena Iyer',
            prevRating: '4.6',
            currRating: '4.8'
        },
        'Lassi': {
            title: 'Lassi',
            ingredients: [
                '2 cups yogurt',
                '1/2 cup chilled water',
                '2 tbsp sugar',
                '1/4 tsp cardamom powder',
                'Ice cubes',
                'Chopped nuts (optional)'
            ],
            note: 'Use chilled yogurt for a refreshing drink.',
            steps: [
                'Blend yogurt, water, sugar, cardamom, and ice cubes until frothy.',
                'Pour into glasses and top with nuts.'
            ],
            video: 'https://www.youtube.com/embed/4v1Q7r2Jk9k',
            chef: 'Chef Aman Gill',
            prevRating: '4.8',
            currRating: '4.9'
        },
        'Filter Coffee': {
            title: 'Filter Coffee',
            ingredients: [
                '2 tbsp filter coffee powder',
                '1 cup water',
                '1 cup milk',
                'Sugar to taste'
            ],
            note: 'Use freshly ground coffee powder for best aroma.',
            steps: [
                'Add coffee powder to filter, pour hot water, let it drip.',
                'Heat milk, add sugar, and mix with decoction.',
                'Pour back and forth to froth.'
            ],
            video: 'https://www.youtube.com/embed/vR5I3QwP4nA',
            chef: 'Chef Sriram Iyer',
            prevRating: '4.7',
            currRating: '4.8'
        },
        'Jalebi': {
            title: 'Jalebi',
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
            note: 'Ferment the batter for 8 hours for best results.',
            steps: [
                'Mix flour, yogurt, water, and baking soda to make a smooth batter. Ferment 8 hours.',
                'Pour batter into a piping bag.',
                'Pipe spirals into hot oil, fry until crisp.',
                'Boil sugar, water, and saffron to make syrup.',
                'Dip fried jalebis in syrup.'
            ],
            video: 'https://www.youtube.com/embed/5oD6EJr5WnM',
            chef: 'Chef Rina Shah',
            prevRating: '4.8',
            currRating: '4.9'
        },
        'Rabri': {
            title: 'Rabri',
            ingredients: [
                '1 liter full-fat milk',
                '1/2 cup sugar',
                '2 tbsp chopped nuts',
                '1/2 tsp cardamom powder',
                'Few saffron strands'
            ],
            note: 'Simmer milk on low heat and keep scraping the sides for a rich texture.',
            steps: [
                'Boil milk in a wide pan, simmer and keep scraping sides.',
                'Add sugar, cardamom, saffron, and nuts.',
                'Cook until thick, chill and serve.'
            ],
            video: 'https://www.youtube.com/embed/7bG4Y6JQ5yY',
            chef: 'Chef Anita Mehta',
            prevRating: '4.7',
            currRating: '4.8'
        }
    };

    // Store the selected recipe details in localStorage
    localStorage.setItem('selectedRecipe', JSON.stringify(recipeDetails[recipeName]));
    
    // Navigate to the recipe page
    window.location.href = 'recipe.html';
}
