function openSection(evt, language) {
    var i, tabcontent, tablinks, text, output;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    text = document.getElementsByClassName("text");
    for (i = 0; i < text.length; i++) {
      text[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    output = document.getElementsByClassName(language);
    for (i = 0; i < output.length; i++) {
      output[i].style.display = "block";
    }
    evt.currentTarget.className += " active";
  }