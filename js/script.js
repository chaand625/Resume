var outer = document.getElementById("outer");

function loadjson(file, callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", file, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == "200") {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadjson("resume.json", function (e) {
  var data = JSON.parse(e);
  details(data.details);
  qualificatoins(data.qualification);
})

function details(data) {
    var div_left = document.createElement("div");
    div_left.classList.add("left_div");

    var img = document.createElement("img");
    img.src = data.img;
    div_left.append(img);

    var my_name = document.createElement("h1");
    my_name.textContent = data.name;
    div_left.append(my_name);

    my_name = document.createElement("h1");
    my_name.textContent = data.roll_no;
    div_left.append(my_name);

    outer.appendChild(div_left);
}

function qualificatoins(data) {
    var div_right = document.createElement("div");
    div_right.classList.add("right_div");
    console.log(data);

    for(i in data){
        var para = document.createElement("p");

        var insti = document.createElement("h1");
        insti.textContent = ""+i;
        para.appendChild(insti);

        var insti = document.createElement("h3");
        insti.textContent = data[i].name;
        para.appendChild(insti);
        div_right.appendChild(para);
    }

    outer.appendChild(div_right);
    console.log(outer);
    
}


