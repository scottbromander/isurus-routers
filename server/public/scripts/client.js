$(document).ready(init);

function init() {
    $.ajax({
        type: 'GET',
        url: '/api/all-songs/'
    }).then((response) => {
        render(response);
    })
}

function render(arrayOfSongs) {
    if(arrayOfSongs.length < 1) { return false; }

    $('.container').empty();

    for (const song of arrayOfSongs) {
        $('.container').append(`<p>${song.track}</p>`);
    }
}