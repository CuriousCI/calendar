// var app = {
//     init: function () {
//         // Use origin and pathname to force to use https and avoid mixed content
//         let origin = window.location.origin;
//         let pathname = window.location.pathname;
//         $.getJSON(`${origin}${pathname}?users.json`)
//             .done(app.writeUsers)
//             .fail(app.onFail);
//     },
//     onFail: function (error) {
//         console.log("errore nella lettura del file json");
//         console.log(error);
//     },
//     writeUsers: function (jsonData) {
//         console.log(jsonData);
//         for (user of jsonData) {
//             $("ul").append(`<li>${user.user_id}: <span class="cool">${user.name}</span></li>`);
//         }
//     }
// }

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


$(document).ready(app.init);