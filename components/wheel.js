Vue.component("wheel", {
	template: `
		<svg :class="{rotate: rotate}" width="250" height="250">
			<path
				d="M68.43, 181.567 L125, 125 L125, 205
			Q89,204 68.43,181.567"
				style="stroke:  #2d3748;; stroke-width: 3; fill:#FFB6FC"
			/>
			<path
				d="M45, 125 L125, 125 L68.43, 181.567
			Q48,165 45,125"
				style="stroke:  #2d3748;; stroke-width: 3; fill:#B6FFF1"
			/>
			<path
				d="M68.43, 68.43 L125, 125 L45, 125
			Q46,90 68.43,68.43"
				style="stroke:  #2d3748;; stroke-width: 3; fill:#FFB6FC"
			/>
			<path
				d="M125, 45 L125, 125 L68.43, 68.43
			Q86,48 125,45"
				style="stroke:  #2d3748;; stroke-width: 3; fill: #B6FFF1"
			/>
			<path
				d="M181.567, 68.43 L125, 125 L125, 45
			Q162,46 181.567,68.43"
				style="stroke:  #2d3748;; stroke-width: 3; fill: #FFB6FC"
			/>
			<path
				d="M205, 125 L125, 125 L181.567, 68.43
			Q200,83 205,125"
				style="stroke:  #2d3748;; stroke-width: 3; fill: #B6FFF1"
			/>
			<path
				d="M181.567, 181.567 L125, 125 L205, 125
			Q206,155 181.567,181.567"
				style="stroke:  #2d3748;; stroke-width: 3; fill: #FFB6FC"
			/>
			<path
				d="M125, 205 L125, 125 L181.567, 181.567
			Q157,206 125, 205"
				style="stroke:  #2d3748;; stroke-width: 3; fill: #B6FFF1"
			/>
			<circle
				r="80"
				cx="125"
				cy="125"
				fill="none"
				stroke="#2d3748"
				stroke-width="4px"
			/>
			<circle r="6" cx="125" cy="125" fill="#2d3748"/>
		</svg>
	`,
	data: () => ({
		rotate: false
	}),
	methods: {
		spin() {
			this.rotate = true;
			setTimeout(() => (this.rotate = false), 1000);
		}
	}
});
