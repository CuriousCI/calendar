var app = {
    init: _ => {
        let origin = window.location.origin,
            pathname = window.location.origin

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
            $("main").append(`<div>${event_.name}</div>`)
    }

}


$(document).ready(app.init)