$(document).ready(function() {

    const $name= $("h1.name");
    const $character_img = $(".char_img");
    const $about = $(".more");

    $("button.gen_char").on("click", function(){
        const randNum = Math.ceil(Math.random()*88);
        $.get(`https://akabab.github.io/starwars-api/api/id/${randNum}.json`, function(data){
            console.log(data.name);
            $name.text(data.name);
            $character_img.attr("src", data.image);
            $about.attr("href", data.wiki);
        })
    });

})