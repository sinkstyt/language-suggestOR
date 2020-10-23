// From getbootstrap.com documentation on form validation:
/*
To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the .was-validated class from the <form> again after submission.
*/

$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    const seriousNess = $("input:radio[name=career]:checked").val();
    const controlVChance = $("input:radio[name=control]:checked").val();
    const mbType = $("input:radio[name=mb-personality]:checked").val();
    
    $("#output").show();
  })
})

$(document).ready(function() {
  $("form").reset(function() {
    
  })
})