Vue.component("greeting", {
	template: `
		<div class="w-1/2 h-auto flex flex-col bg-gray-500 rounded p-4">
			<h1 class="text-bold text-3xl">Danke für deine Hilfe gestern ^^</h1>
			<br />
			<p class="text-semibold">
				Es ist gerade ca.12:30 Uhr und ich bin jetzt fertig.
			</p>
			<p class="text-semibold">
				Ich hoffe es funktioniert alles...please let me know if it
				doesn't:)
			</p>
			<p class="text-semibold">
				Verbesserungsvorschläge sind very much appreciated!
			</p>
			<br />
			<p class="text-semibold">Hope you're having a nice day :))</p>
			<p class="text-semibold">Wie kommst du mit deinem crm voran?</p>
			<br />
			<p class="text-semibold">
				I guess your foot is still hurting?:(...if it doesnt get better by
				next week I'll carry you to a hospital haha(STRONG ME)
			</p>
			<br />
			<p class="text-sm">
				P.S. Dank dem SVG weiß ich wieder wie man Punkte mithilfe von
				Sin/Cos, Winkel und Radius auf nem Kreis ausrechen kann yeey
			</p>
			<p class="text-sm">
				P.P.S. Warte 30sec dann kommst du zum Wheel oder klicke
				Überspringen...Viel Spaß:))
			</p>
			<button
				@click="$emit('skip')"
				class="w-1/3 rounded mt-3 text-sm p-1 bg-gray-light shadow-md mb-1"
			>
				Überspringen
			</button>
		</div>
	`
});
