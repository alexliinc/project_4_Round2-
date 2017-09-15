var favhpCharacters = new Firebase('https://project4-7811e.firebaseio.com/');

function saveToList(event) {
  if (event.which == 13 || event.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
    var hpCharacterName = document.getElementById('hpCharacterName').value.trim();
    if (hpCharacterName.length > 0) {
      saveToFB(hpCharacterName);
    }
    document.getElementById('hpCharacterName').value = '';
    return false;
  }
};

function saveToFB(hpCharacterName) {
  // this will save data to Firebase
  favhpCharacters.push({
    name: hpCharacterName
  });
};

function refreshUI(list) {
  var lis = '';
  for (var i = 0; i < list.length; i++) {
    lis += '<li data-key="' + list[i].key + '">' + list[i].name + ' [' + genLinks(list[i].key, list[i].name) + ']</li>';
  };
  document.getElementById('favhpCharacters').innerHTML = lis;
};

function genLinks(key, mvName) {
  var links = '';
  links += '<a href="javascript:edit(\'' + key + '\',\'' + mvName + '\')">Edit</a> | ';
  links += '<a href="javascript:del(\'' + key + '\',\'' + mvName + '\')">Delete</a>';
  return links;
};

function edit(key, mvName) {
  var hpCharacterName = prompt("Update the hpCharacter name", mvName); // to keep things simple and old skool :D
  if (hpCharacterName && hpCharacterName.length > 0) {
    // build the FB endpoint to the item in hpCharacters collection
    var updatehpCharacterRef = buildEndPoint(key);
    updatehpCharacterRef.update({
      name: hpCharacterName
    });
  }
}

function del(key, mvName) {
  var response = confirm("Are certain about removing \"" + mvName + "\" from the list?");
  if (response == true) {
    // build the FB endpoint to the item in hpCharacters collection
    var deletehpCharacterRef = buildEndPoint(key);
    deletehpCharacterRef.remove();
  }
}

function buildEndPoint(key) {
  return new Firebase('https://project4-7811e.firebaseio.com/' + key);
}

// this will get fired on inital load as well as when ever there is a change in the data
favhpCharacters.on("value", function(snapshot) {
  var data = snapshot.val();
  var list = [];
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      name = data[key].name ? data[key].name : '';
      if (name.trim().length > 0) {
        list.push({
          name: name,
          key: key
        })
      }
    }
  }
  // refresh the UI
  refreshUI(list);
});
