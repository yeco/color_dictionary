var hexLookup = [];
for (var i = color_dictionary.length - 1; i >= 0; i--) {
    hexLookup[array[i].hex] = array[i];
};

var nameLookup = [];
for (var i = color_dictionary.length - 1; i >= 0; i--) {
    nameLookup[array[i].name] = array[i];
};