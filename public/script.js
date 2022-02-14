var app = {
	init: _ => {
		let origin = window.location.origin,
			pathname = window.location.pathname

		// $.getJSON(`https://virtserver.swaggerhub.com/IonutCicio/calendar/2.0.0/events`)

		$.getJSON(`${origin}${pathname}?events`)
			.done(app.writeEvents)
			.fail(app.onFail)
	},

	onFail: error => {
		console.log("errore nella lettura del file json")
		console.log(error)
	},

	writeEvents: jsonData => {
		console.log(jsonData)

		let pathname = window.location.pathname

		for (event of jsonData)
			$("ul").append(
				`
				<a href="${origin}/${pathname}${event.id}">
					<li class="event">
						<h1>${event.title}</h1>
						<div class="details">
							<span>by ${event.organizer}</span>
							<span>${event.cost == 0 ? `free` : `${event.cost}€`}</span>
						</div>
					</li>
				</a>
				`
			)
	}
}


$(document).ready(app.init)