var app = {
	init: _ => {
		let origin = window.location.origin,
			pathname = window.location.pathname

		// $.getJSON(`https://virtserver.swaggerhub.com/IonutCicio/calendar/2.0.0/events/${id}`)
		let id = window.location.search.substring(1);

		$.getJSON(`${origin}${pathname}?events/${id}`)
			.done(app.writeEvents)
			.fail(app.onFail)
	},

	onFail: error => {
		console.log("errore nella lettura del file json")
		console.log(error)
	},

	writeEvents: jsonData => {
		document.title = jsonData.title

		$('#title').append(jsonData.title)
		$('#organizer').append(jsonData.organizer)
		$('#cost').append(jsonData.cost == 0 ? `free` : `${jsonData.cost}€`)

		for (participant of jsonData.participants)
			$("#participants").append(
				`<li class="value">${participant}</li>`
			)

	}
}


$(document).ready(app.init)