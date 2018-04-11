function countLetters(value) {
  var obj = {};
  for(var i = 0; i < value.length; i++){
    var position= [];
    for(var j = 0; j < value.length; j++){
      if(value.charAt(i) == value.charAt(j)){
          position.push(j)
      }
    }
        obj[value[i]] = position;
  }

    return obj;
}


console.log(countLetters("lighthouse in the house"));