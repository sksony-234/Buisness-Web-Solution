let name = document.getElementById('name');
let gender = document.getElementById('gender');
let birth_year = document.getElementById('birth_year');
let eye_color = document.getElementById('eye_color');
let height = document.getElementById('height');
let mass = document.getElementById('mass');
let skin_color = document.getElementById('skin_color');
const btn = document.getElementById('random_generator');
const info = document.getElementsByClassName('info');

let f=0;
let fetchData = (n) => {
    fetch(`https://swapi.dev/api/people/${n}/`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            name.innerText = data.name;
            gender.innerText = data.gender;
            birth_year.innerText = data.birth_year;
            eye_color.innerText = data.eye_color;
            height.innerText = data.height;
            mass.innerText = data.mass;
            skin_color.innerText = data.skin_color;
        })
}

btn.onclick = () => {
    let ran_num = Math.ceil(Math.random() * 80);
    fetchData(ran_num);
    f=1;
}

if(f==1){
    info.classList.add(".show");
}

