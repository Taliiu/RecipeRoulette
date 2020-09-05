const vue = new Vue({
	el: "#app",
	data: {
        start: false,
        isOpen: false,
        rotate: false,
        attachPurple: true,
		showIngredients: true,
		specifiedIngredients: [],
        specifiedInstructions: [],
        recipename: '',
        servings:'',
        spinCounter: 0,
        recipes: recipes,
        chosenCategory: 'default',
        filteredRecipes: [],
	},
	watch: {
		spinCounter: function (value) {
			const vm = this;
			if (value == 1) {
				vm.rotate = false;
				vm.spinCounter = 0;
			}
		}
    },
	methods: {
		getIndex: function () {
            const num_recipes = this.filteredRecipes.length
			return Math.floor(Math.random() * num_recipes);
		},
		getContent: function () {
			this.specifiedIngredients = [];
			this.specifiedMethod = "";
            const index = this.getIndex();
            console.log(this.filteredRecipes)
            console.log(index)
			
            this.specifiedInstructions = this.filteredRecipes[index].content.instruction
            this.specifiedIngredients = this.filteredRecipes[index].content.ingredients
            this.recipename = this.filteredRecipes[index].name
            this.servings = 'Serves: ' + this.filteredRecipes[index].servings
        },
        filterRecipes: function() {
            this.filteredRecipes = [];
            for(let i = 0; i < this.recipes.length; i++){
                if(this.recipes[i].category == this.chosenCategory){
                    this.filteredRecipes.push(this.recipes[i])
                } else if(this.chosenCategory == 'none') {
                    this.filteredRecipes.push(this.recipes[i])
                } else if(this.chosenCategory == 'default') {
                    this.filteredRecipes.push(this.recipes[i])
                }
            }
            
            console.log(this.filteredRecipes)
            
        },
        selectCategory: function(id){
            var category = document.getElementById(id).innerHTML
            document.getElementById('category').innerHTML = category;
            this.chosenCategory = document.getElementById('category').innerHTML;
            this.isOpen = false;
            
        },
		addCounter: function () {
			const vm = this;
			setTimeout(function () {
				vm.spinCounter += 1;
				console.log(vm.spinCounter);
			}, 1000);
        },
        init: function () {
            const vm = this;
            setTimeout(function () {
                vm.start = true;
            },30000);
        }
    },
    mounted(){
        this.init();
    }
});
