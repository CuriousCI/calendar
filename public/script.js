var app = {
	init: _ => {
		let origin = window.location.origin,
			pathname = window.location.pathname

		// Dev only 
		// $.getJSON(`https://virtserver.swaggerhub.com/alessio.gasparri/Calendar/1.0.0/events`)

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
		for (event_ of jsonData)
			$("main").append(
				`<div class="event">
					<h1>${event_.name}</h1>
					<div class="details">
						<span>by ${event_.organizer}</span>
						<span> ${event_.price == 0 ? `free` : `${event_.price}€`}
					</div>
				</div>`
			)
	}
}


$(document).ready(app.init)