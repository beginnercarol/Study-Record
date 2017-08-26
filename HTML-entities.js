function convert(str) {
  // &colon;&rpar;
  var re = /[&<>"']/g;
  var dict={"&":"&amp",
            "<":"&lt",
            ">":"&gt",
            '"':"&quot",
            "'":"&apos"};
  str = str.replace(/[&<>"']/g,function(match){return dict[match];});
  return str;
}

console.log(convert("Dolce & Gabbana"));