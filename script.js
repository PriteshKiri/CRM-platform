function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function view1() {
  document.getElementById("pushopt1").setAttribute("class", "viewoption");
}

function remove1() {
  document.getElementById("pushopt1").setAttribute("class", "hideoption");
}

function view2() {
  document.getElementById("pushopt2").setAttribute("class", "viewoption");
}

function remove2() {
  document.getElementById("pushopt2").setAttribute("class", "hideoption");
}

function view3() {
  document.getElementById("pushopt3").setAttribute("class", "viewoption");
}

function remove3() {
  document.getElementById("pushopt3").setAttribute("class", "hideoption");
}

function view4() {
  document.getElementById("pushopt4").setAttribute("class", "viewoption");
}

function remove4() {
  document.getElementById("pushopt4").setAttribute("class", "hideoption");
}

function view5() {
  document.getElementById("pushopt5").setAttribute("class", "viewoption");
}

function remove5() {
  document.getElementById("pushopt5").setAttribute("class", "hideoption");
}

function view6() {
  document.getElementById("pushopt6").setAttribute("class", "viewoption");
}

function remove6() {
  document.getElementById("pushopt6").setAttribute("class", "hideoption");
}

function view7() {
  document.getElementById("pushopt7").setAttribute("class", "viewoption");
}

function remove7() {
  document.getElementById("pushopt7").setAttribute("class", "hideoption");
}

function view8() {
  document.getElementById("pushopt8").setAttribute("class", "viewoption");
}

function remove8() {
  document.getElementById("pushopt8").setAttribute("class", "hideoption");
}

function view9() {
  document.getElementById("pushopt9").setAttribute("class", "viewoption");
}

function remove9() {
  document.getElementById("pushopt9").setAttribute("class", "hideoption");
}

function view10() {
  document.getElementById("pushopt10").setAttribute("class", "viewoption");
}

function remove10() {
  document.getElementById("pushopt10").setAttribute("class", "hideoption");
}

function view11() {
  document.getElementById("pushopt11").setAttribute("class", "viewoption");
}

function remove11() {
  document.getElementById("pushopt11").setAttribute("class", "hideoption");
}
