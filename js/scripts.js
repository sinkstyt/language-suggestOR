// From getbootstrap.com documentation on form validation:
/*
To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the .was-validated class from the <form> again after submission.
*/

$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    let outputLang = "Ruby";
    const seriousNess = $("input:radio[name=career]:checked").val();
    const controlVChance = $("input:radio[name=control]:checked").val();
    const mbType = $("input:radio[name=mb-personality]:checked").val();
    let movieTitle = $("input[type=checkbox]:checked").val();
    const origLangLean = $("input:radio[name=lang-lean]:checked").val();
    let fullUserName = $("input#firstName").val();
    fullUserName += " "
    fullUserName += $("input#lastName").val();
    $("span.user-name-insert").text(fullUserName);
    if (movieTitle === "The Wizard of Oz" || "Tom Cruise" || "rom-com") {
      movieTitle = "milquetoast movie";
      outputLang = "Python";
    } else if (movieTitle.includes("Stanley") || movieTitle.includes("Graduate")) {
      movieTitle = "classic American movie";
      outputLang += " or some other completely different programming language";
    } else {
      movieTitle = "book";
      outputLang = "JavaScript";
    }
    $("span.favorite-movie").text(movieTitle);
    if (mbType.includes("E") || mbType.includes("J")) {
      outputLang = "JavaScript";   
    }
    $("span.result").text(outputLang);
    $("#output").show();
  })
})

$(document).ready(function() {
  $("form").reset(function() {
    event.preventDefault();
  })
})