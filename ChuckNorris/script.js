fetch("https://api.chucknorris.io/jokes/random")
.then(res => res.json())
.then(data => {
    document.getElementById("p2").innerHTML =  data.value
});