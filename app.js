const vue = new Vue({
	el: "#app",
	data: {
		start: false,
		isOpen: false,
		attachPurple: true,
		showIngredients: true,
		specifiedIngredients: [],
		specifiedInstructions: [],
		recipename: "",
		servings: "",
		recipes: recipes,
		chosenCategory: "default",
		filteredRecipes: []
	},
	methods: {
		getIndex() {
			const num_recipes = this.filteredRecipes.length;
			return Math.floor(Math.random() * num_recipes);
		},
		getContent() {
			this.specifiedIngredients = [];
			this.specifiedMethod = "";
			const index = this.getIndex();
			console.log(this.filteredRecipes);
			console.log(index);

			this.specifiedInstructions = this.filteredRecipes[
				index
			].content.instruction;
			this.specifiedIngredients = this.filteredRecipes[
				index
			].content.ingredients;
			this.recipename = this.filteredRecipes[index].name;
			this.servings = "Serves: " + this.filteredRecipes[index].servings;
		},
		filterRecipes() {
			this.filteredRecipes = [];
			for (let i = 0; i < this.recipes.length; i++) {
				if (this.recipes[i].category == this.chosenCategory) {
					this.filteredRecipes.push(this.recipes[i]);
				} else if (this.chosenCategory == "none") {
					this.filteredRecipes.push(this.recipes[i]);
				} else if (this.chosenCategory == "default") {
					this.filteredRecipes.push(this.recipes[i]);
				}
			}

			console.log(this.filteredRecipes);
		},
		selectCategory(id) {
			const category = document.getElementById(id).innerHTML;
			document.getElementById("category").innerHTML = category;
			this.chosenCategory = document.getElementById("category").innerHTML;
			this.isOpen = false;
		},
		startSpinning() {
			this.$refs.wheel.spin();
			this.filterRecipes();
			this.getContent();
		}
	}
});
