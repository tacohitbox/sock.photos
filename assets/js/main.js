var s = document.createElement("style");
s.innerHTML = ".require-script {display:inline-block;}";
document.body.append(s);

onload();

async function onload() {
  var d = await (await fetch("/socks.json")).json();
  document.getElementById("ld").style.display = "none";
  for (var c in d) {
    var cont = document.createElement("div");
    cont.classList.add("sock");
    var img = document.createElement("img");
    img.classList.add("img-sock");
    img.src = d[c].src;
    img.alt = d[c].alt;
    img.title = d[c].alt;
    var inf = document.createElement("div");
    inf.classList.add("info-sock");
    var tagline = document.createElement("p");
    tagline.classList.add("tagline-sock")
    tagline.innerHTML = `Uploaded by ${d[c].contributor.name}. [<a href="https://github.com/${d[c].contributor.github}">Github</a>]`;
    inf.append(tagline);
    cont.append(img);
    cont.append(inf);
    document.getElementById("app").append(cont);
  }
}