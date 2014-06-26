var hexLookup = [];
for (var i = color_dictionary.length - 1; i >= 0; i--) {
    hexLookup[color_dictionary[i].hex] = color_dictionary[i];
};

var nameLookup = [];
for (var i = color_dictionary.length - 1; i >= 0; i--) {
    nameLookup[color_dictionary[i].name] = color_dictionary[i];
};