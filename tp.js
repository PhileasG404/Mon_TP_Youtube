var change_color = document.querySelector(".change_color");
var colors_h10 = document.querySelectorAll("h10");
var iframes1 = document.querySelectorAll("iframe");
var image = document.querySelector(".image");
var color = document.querySelector(".color");
var hr_colors = document.querySelectorAll("hr")

change_color.addEventListener("click", (e) => {

    document.querySelector("body").classList.toggle("darkmode2");
    document.querySelector(".color").classList.toggle("darkmode");

    colors_h10.forEach(color=>{
        color.classList.toggle("darkmode");
    });
    hr_colors.forEach(hr_color=>{
        hr_color.classList.toggle("darkmode");
    });
})

function save(){
  let iframe = document.getElementById("iframeCode").value
  window.localStorage.setItem("iframe" + (+new Date()), iframe);
  window.location.reload()
};

window.onload = function load() {
    let iframes = {...localStorage};
    let html = "";

    for([key, iframe] of Object.entries(iframes)) {
        html += iframe + `<button class="delete" style="position:relative;left:-30px;top:-10px;" data-key="${key}">X</button>`
    }

    document.querySelector('.video-play').innerHTML = html;

    document.querySelectorAll('button.delete').forEach((button) => {
        button.addEventListener("click", () => {
            window.localStorage.removeItem(button.dataset.key);
            window.location.reload();
        })
    })
}