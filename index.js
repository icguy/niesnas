$(document).ready(function () {
	let inner$ = $("#inner");
	let outer$ = $("#outer");

	let ow = 400;
	let oh = 400;

	function zoom(x, y, w, h) {
		let zoomX = ow * 1.0 / w;
		let zoomY = oh * 1.0 / h;

		let dx = -x * zoomX;
		let dy = -y * zoomY;

		inner$.css({
			"background-size": `${zoomX * 100}% ${zoomY * 100}%`,
			"background-position": `${dx}px ${dy}px`
		});
	}

	zoom(240, 192, 6, 6);

	setTimeout(() => {
		let durationEasing = "1s ease-out"
		inner$.css({
			"transition": `background-size ${durationEasing}, background-position ${durationEasing}`,
		});
	
		setTimeout(() => {
			zoom(100, 100, 200, 200);
		}, 1000);
	}, 10);
})