const recipes = [
	{
		id: "1",
		domain: "https://somedomainname",
		name: "Budda Bowl(Vegan)",
		servings: "unknown",
		category: "vegan",
		content: {
			ingredients: ["spring onions", "garlic", "carrots","avocado", "spinach", "other vegtables you like", "coconut milk", "peanutbutter", "vegtable oil", "soy sauce"],
			instruction: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta ducimus et esse numquam fuga, omnis modi ratione id m"]
		}
	},
	{
		id: "2",
		domain: "https://anotherdomainname",
		name: "Gado Gado(Vegetarian)",
		servings: "4",
		category: "vegetarian",
		content: {
			ingredients: ["2 medium red onions, diced", "4 cloves garlic, thinly sliced", "180g mock chicken meat replacement", "4 big handfuls pf green beans, cut in half", "2 red bell peppers", "7 sun-dried tomatoes(1/3cup), chopped", "80ml sodium-reduced soy sauce", "2 tsp sambal olek(more if needed)"],
			instruction: ["1. To a large pan on high heat add the oil, onion and garlic, sauteing for 5 minutes. Add a small splash of water as needed to deglaze the pan.", 
			"2. Add the mock chicken pieces. Continue to saute until lightly golden. About 5 minutes. Remove from the pan and transfer to a bowl.",
			"3. In the same empty pan, add 1 cup of boiling water and the green beans. Cover with a lid and reduce the temperature so the beans simmer in the water. The steam generated will cook the beans, even if they are not completely submerged. Cook for about 7 minutes", 
			"4. Back to the pan, add the bell pepper, cover, and cook for another 5 minutes.  It's okay if about 1-2 Tbsp of water remains at the end but if there is any excess, drain it.", 
			"5. Add back to the pan the onion/chicken mixture, sundried tomatoes, soy sauce and sambal. Stir for a couple minutes until everything is heated through. Serve with rice or other grain of choice, top with the peanut sauce, and garnish with some cilantro. Enjoy!"]
		}
	},
	{
		id: "3",
		domain: "https://another2domainname",
		servings: "2",
		name: "Filled butternut squash(Vegan)",
		category: "vegan",
		content: {
			ingredients: ["1/2 cup brown rice", "1 cup vegtable stock", "2 cloves garlic", "2 tomatoes", "1/2 cup black beans", "1/2 cup sweetcorn", "1/2 cup cilantro", "1 tsp cumin", "1 tsp chili powder", "1 tsp salt"],
			instruction: ["1. Cut butternut squash in half and roast for 20-35min in the oven (200°C)",
						"2. Add rice and vegtable stock to a pan, put the lit on and cook until the rice has absorbed all the water",
						"3. Add all vegtables, herbs and spices to the pan. Take the squash out of the oven and scrape out the flesh and add to the pan as well",
						"4. Mix everything together and put the mixture back into the remainig skin of the squash",
						"5. Put in the oven for 40min (200°C)"]
		}	
	},
	{
		id: "4",
		domain: "https://another2domainname",
		servings: "3",
		name: "Sweet potato and miso soup(Vegan)",
		category: "vegan",
		content: {
			ingredients: ["6 spring onions, chopped", "2 thumb-sized pices ginger", "2 cloves garlic", "2 tbsp white miso", "500g sweet potatoes, peeled and cut into small pieces", "750ml vegtable stock", ],
			instruction: ["1. Heat 2 tsp of oil in a large lidded pan and gently cook 1/2 the spring onions, ginger and garlic for 5-10 minutes or until soft. Add 1 tbsp of miso, all the sweet potatoes and the vegetable stock, and bring to a simmer. Put on a lid and simmer for 25-30 minutes  or until the sweet potatoes are really soft. Season and whizz with a stick blender until completely smooth. Keep warm.",
						"2. Heat 2 tsp of oil in a frying pan and fry the remaining spring onions, ginger and garlic over a high heat for 2-3 minutes or until softened. Reduce the heat, add the kale and a splash of water, and cook for 2-3 minutes until the kale has wilted. Stir in the remaining miso and season. Spoon the soup into bowls and top with the miso kale, to serve.",]
		}	
	}, 
	{
		id: "5",
		domain: "https://another2domainname",
		servings: "1",
		name: "oriental lentil stew(Vegetarian)",
		category: "vegetarian",
		content: {
			ingredients: ["60g leek", "80g carrots", "100g cauliflower", "70g chopped tomatoes", "0.5 tsp curry powder", "A pinch of coriander", "0.5 tsp paprika powder", "a pinch of chilli powder", "1 piece ginger", "salt&pepper", "325ml water", "35g lentils", "35ml coconut milk"],
			instruction: ["1. Add ginger, carrots, leek, cauliflower to a pot and saute them for couple min then add the spices and lentils",
						"2. pour in the water and out the lit on, let it simmer for a couple of minutes",
						"3. Add chopped tomatoes and coconut milk and let it cook until the vegtables are tender"]
		}	
	},
	{
		id: "6",
		domain: "https://another2domainname",
		servings: "4",
		name: "Spinach, sweet potato & lentil dhal(Vegetarian)",
		category: "vegetarian",
		content: {
			ingredients: ["1 tbsp sesame oil","1 red onion, finally chopped", "1 garlic clove, crushed", "thumb-sized piece ginger, finally chopped", "1 red chilli, finally chopped", "1 1/2 tsp ground tumeric", "1 1/2 tsp ground cumin", "2 sweet potatoes(400g), cut into chunks", "250g red split lentils", "600ml vegtable stock", "80g spinach", "1/2 small pack of Thai basil, to serve"],
			instruction: ["1. Heat 1 tbsp sesame oil in a wide-based pan with a tight-fitting lid.",
						"2. Add 1 finely chopped red onion and cook over a low heat for 10 mins, stirring occasionally, until softened.",
						"3. Add 1 crushed garlic clove, a finely chopped thumb-sized piece of ginger and 1 finely chopped red chilli, cook for 1 min, then add 1 ½ tsp ground turmeric and 1 ½ tsp ground cumin and cook for 1 min more.",
						"4. Turn up the heat to medium, add 2 sweet potatoes, cut into even chunks, and stir everything together so the potato is coated in the spice mixture.",
						"5. Tip in 250g red split lentils, 600ml vegetable stock and some seasoning.",
						"6. Bring the liquid to the boil, then reduce the heat, cover and cook for 20 mins until the lentils are tender and the potato is just holding its shape.",
						"7. Taste and adjust the seasoning, then gently stir in the 80g spinach. Once wilted, top with the 4 diagonally sliced spring onions and ½ small pack torn basil leaves to serve.",]
		}
	},
	{
		id: "7",
		domain: "https://another2domainname",
		servings: "4",
		name: "sweet and sour chicken(non-vegetarian)",
		category: "non-vegetarian",
		content: {
			ingredients: ["oil for frying", "100ml soda water, chilled", "140g self-raising flour", "25g cornflour", "4 skinless, bonelss chicken breasts, cut into chunks", "spring onions, finally chopped, to serve", "1 red pepper", "3 red chillies", "425g can pineapple chunks, drained and juice resevered", "4 star anise", "50g tamarind paste", "100g caster sugar", "100ml rice wine vinegar"],
			instruction: ["1. For the sauce, put the red pepper, chunks of chilli and pineapple juice in a pan and bring to the boil. Cover and cook for 10 mins, then purée in a food processor. Return to the pan with the pineapple chunks, chilli halves, star anise, tamarind, sugar and vinegar. Gently simmer for 20-30 mins until reduced and sticky. Keep warm, or reheat to serve.",
						"2. Fill a large pan 1cm deep with oil and heat until shimmering. Whisk the soda water and 100ml cold water into the self-raising flour with a little salt. Tip the cornflour onto a plate, line a tray with kitchen paper and turn on the oven to low.",
						"3. Stir the batter well. Dust the chicken with cornflour, then dip into the batter. One at a time, lower into the hot oil (about 5-6 every batch). Turn up the heat to keep the chicken frying, if needed, and cook for 5-6 mins, turning once. When cooked, drain on the tray, and keep warm in the oven. Repeat with the remaining chicken. Stack onto a plate with the warm sauce on the side, and scatter with shredded spring onions."]
		}	
	},
	{
		id: "8",
		domain: "https://another2domainname",
		servings: "6",
		name: "Chinese-style braised beef one pot(non-vegetarian)",
		category: "non-vegetarian",
		content: {
			ingredients: ["3 tbsp olive oil", "6 garlic cloves, thinly sliced", "thumb-sized piece ginger, peeled and shredded", "1 bunch spring onions, sliced", "1 red chilli, deseeded and thinly sliced", "1 1/2 kg braising beef, cut into large pieces", "2 tbsp plain flour", "1 tsp chinese five-spice powder", "2 star anise(optional)", "2 tsp light muscovado sugar", "2 tbsp chinese cooking wine or dry sherry", "2 tbsp dark soy sauce", "500ml beef stock", "steamed bok choi and steamed basmati rice, to serve"],
			instruction: ["1. Heat 2 tbsp of the oil in a large, shallow casserole. Fry the garlic, ginger, onions and chilli for 3 mins until soft and fragrant. Tip onto a plate. Toss the beef in the flour, add 1 tbsp more oil to the pan, then brown the meat in batches, adding the final tbsp oil if you need to. It should take about 5 mins to brown each batch properly.",
						"2. Add the five-spice and star anise (if using) to the pan, tip in the gingery mix, then fry for 1 min until the spices are fragrant. Add the sugar, then the beef and stir until combined. Keep the heat high, then splash in the wine or sherry, scraping up any meaty bits. Heat oven to 150C/fan 130C/gas 2.",
						"3. Pour in the soy and stock (it won’t cover the meat completely), bring to a simmer, then tightly cover, transfer to the oven and cook for 1½-2 hrs, stirring the meat halfway through. The meat should be very soft, and any sinewy bits should have melted away. Season with more soy. This can now be chilled and frozen for up to 1 month.", 
						"4. Nestle the cooked bok choi into the pan, then bring to the table with the basmati rice straight away and tuck in."]
		}	
	},
	{
		id: "9",
		domain: "https://another2domainname",
		servings: "2",
		name: "Special fried rice with prawns & chorizo(non-vegetarian)",
		category: "non-vegetarian",
		content: {
			ingredients: ["100g basmati rice", "85g frozen pea", "1 tbsp sunflower oil", "1 egg, beaten", "50g finally diced chorizo, bacon or ham", "1 garlic clove", "3 spring onions", "1/2 red pepper", "good pinch five-spice powder", "1 tsp soy sauce", "100g beansprout", "50g peeled prawn"],
			instruction: ["1. Boil the rice following pack instructions, adding the peas for the final min. Drain.",
						"3. Wipe the wok with kitchen paper, then heat the remaining oil. Toss in the meat, garlic, spring onions and pepper, and stir-fry until the pepper starts to soften. Add the five-spice, rice, peas and soy, then stir-fry for 5 mins more. Finally add the beansprouts, if using, the egg and prawns, and stir-fry to heat through."]
		}	
	},
	 
];
