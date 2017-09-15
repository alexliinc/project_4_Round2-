// Document has to be ready
$(document).ready(function() {
  console.log('api.js loaded!');
  const apiUrl = 'http://hp-api.herokuapp.com/api/characters';
  // Getting all characters
  $.ajax({
    method: 'GET',
    url: 'http://hp-api.herokuapp.com/api/characters',
    dataType: 'json',
    success: handleGetAllSuccess,
    error: handleGetAllError
  });


});

// Getting all characters
// ------------------------------------------------------------
function handleGetAllSuccess(data) {
  renderCharacter(data[0])
  renderCharacter(data[1])
  renderCharacter(data[2])
}

function handleGetAllError(data) {
  console.log('GET ALL characters error!!');
}

// this function takes a single character and renders it to the page
// ------------------------------------------------------------
function renderCharacter(character) {
  var charactersHTML =


    "        <!-- one character -->" +
    "        <div class='col-md-4' data-character-id='" + character.name + "'>" +
    "                     <img src=" + character.image + " alt='character image'>" +
    "                        <span class='character-name'>" + character.name + "</span>" +
    "                <button class='btn btn-primary add-song'>SNOG</button>" +

    "                <!-- end of character internal row -->" +
    "          </div>" +
    "          <!-- end one character -->";

  // render to the page with jQuery
  $('#characters').append(charactersHTML);
}
