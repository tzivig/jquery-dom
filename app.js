$(document).ready(function() {
console.log("Let’s get ready to party with jQuery")
});

$("article img").addClass("image-center");

$("article p:last-child").remove();

$("#title").css("font-size", Math.random()*100)

$("ol").append($("<li>", {text: "newli"}));
