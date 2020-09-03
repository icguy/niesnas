
$(document).ready(function () {
	let $main = $("#main");
	let $button = $("#getButton");
	let $text = $("#text");
	let $ridol = $("#ridol");
	let $solblur = $("#solblur");
	let $sol = $("#sol");
	let $images = $("#images");
	let $sapphire = $("#sapphire");
	let $testDiv = $("#testdiv");

	let globalZoom = Math.min(($testDiv.width() - 20) / 720, ($testDiv.height() - 20) / 1280.0);
	console.log(globalZoom);
	$images.children().css({
		"width": 720 * globalZoom,
		"height": 1280 * globalZoom,
		"background-size": `${720 * globalZoom}px ${1280 * globalZoom}px`
	});
	$sapphire.css({
		"background-size": `contain`
	})
	$testDiv.hide();

	function createRidolStep(text) {
		return () => {
			$main.children().hide();
			$text.show();
			$text.text(text);
			$images.show();
			$ridol.show();
			$sol.show();
			// $solblur.show();
		}
	}

	function createSolStep(text) {
		return () => {
			$main.children().hide();
			$text.show();
			$text.text(text);
			$images.show();
			$ridol.show();
			$sol.show();
			// $solblur.show();
			setTimeout(() => {
				$ridol.css({
					"opacity": 0
				});
			}, 100);
		}
	}

	function createSolBlurStep(text) {
		return () => {
			$main.children().hide();
			$text.show();
			$text.text(text);
			$images.show();
			// $sol.show();
			$solblur.show();

			// let zoom = 1;
			let zoom = 456.0 / 7 * globalZoom;
			let w = 1985 * zoom;
			let h = 2394 * zoom;
			let x = 216 * globalZoom - zoom * 806
			let y = 299 * globalZoom - zoom * 1505
			// $sol.css({
			// 	"opacity": 0
			// });
			$solblur.css({
				"background-size": `${w}px ${h}px`,
				"background-position": `${x}px ${y}px`,
			});
		}
	}

	function createFinalStep(text) {
		return () => {
			$main.children().hide();
			$text.show();
			$text.text(text);
			$images.show();
			$images.children().hide()
			$solblur.show();

			let durationEasing = "2s ease";
			$solblur.css({
				"transition": `background-size ${durationEasing}, background-position ${durationEasing}`
			});
			setTimeout(() => {

				let cw = 720.0 * globalZoom;
				let ch = 1280.0 * globalZoom;
				let w = 1985;
				let h = 2394;
				let zoom = Math.min(cw / w, ch / h);
				w *= zoom;
				h *= zoom;
				let x = 0
				let y = 0
				$solblur.css({
					"background-size": `${w}px ${h}px`,
					"background-position": `${x}px ${y}px`,
				});
			}, 100);
		}
	}

	function createSapphireStep() {
		return () => {
			$main.children().hide();
			$text.show();
			$text.text("MaMa, aZ Én SzEmEm Is OlYaN fÉnYeSeN cSiLlOg, MiNt A SzAfÍr™?");
			$images.show().children().hide();
			$sapphire.show();
		}
	}

	let steps = [
		"wata happend to the tatato? 🍉",
		"wel helo ma nam iz Loooca an eym a speshul pag 🍉",
		"nyam nyam sajt, sonka, puha kenyérke, bacon, csoki, süti, CSOKI, MÉG TÖBB CSOKI CSOKIIIIIIIII!! (elnézést, kicsit elragadott a hév) 🍉",
		"tengerpart, feggőágy, SZUNDI! 🍉",
		"tengerpart, feggőágy, SZUNDI! 🍉",
		"oooh luk a vargagyuláné! 🍉",
		"Hopá!",
		"Ez valami új?",
		"Piszony!",
		"Készültem egy pindurka meglepetéssel!",
		"De előtte...",
		"Elárulok egy titokt!",
		createRidolStep("Emlékszel erre?"),
		createRidolStep("Ez egy részlet egy képből!"),
		createSolStep("Ez egy részlet egy képből!"),
		createSolStep("Hogy mit ábrázol a kép?"),
		"Egy titkot™!",
		":O",
		"Egy olyan titkot™ aminek én nagyon örültem.",
		"Annyira, hogy nem tudtam egy kicsit nem elmondani.",
		"Ezért csináltam belőle egy ridolt™! Amit ugyan nem lehetett megfejteni, de egy kicsit elújságoztam neked a titkot™!",
		"Most viszont meg is mutatom a megfejtést™!",
		createSolStep("Redeh?"),
		createSolBlurStep("Luk!"),
		createFinalStep("Dis!"),
		createFinalStep("U no wut dis iz?"),
		createFinalStep("Dis iz a..."),
		createSapphireStep(),
		"És az én ujjacskáim™",
		"És az én zafírom™!",
		"Amit neked™ akarok adni!",
		"De ahhoz meg kell ígérj nekem valamit™!",
		"Tudod mit?",
		"Azt, hogy hozzám jössz feleségül™! 🍉",
		"The End!",
		""
	];

	let idx = -1;
	$button.click(() => {
		idx++;
		let step = steps[idx]
		if (typeof (step) === "string") {
			$images.hide();
			$text.text(step).show();
		}
		if (typeof (step) === "function") {
			step()
		}
	});
});