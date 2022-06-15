const theme = document.querySelectorAll('.theme');

theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "yellowTheme", "emeraudeTheme");
        switch (e.target.id) {
            case "dark":
                document.body.classList.add("darkTheme");
                break;
            case "emeraude":
                document.body.classList.add("emeraudeTheme");
                break;
            case "yellow":
                document.body.classList.add("yellowTheme");
                break;
            default:
                null;
        }
    })
})

function Traduction() {
    var para = document.querySelector("#1");
    para.innerHTML = "The immaculate Conception LaSalle is a clisson college that offers multiple activities";
    var para1 = document.querySelector("#2");
    para1.innerHTML = ' and associations. The Immaculate Conception is the conception of the Virgin Mari "without blemish",';
    var para2 = document.querySelector("#2");
    para2.innerHTML = ' it is a dogma of the Catholic Church that was proclaimed, on December 8, 1854 by Pope Pius IX by the bull Ineffabilis Deus.';
    var para3 = document.querySelector("#2");
    para3.innerHTML = ' But the immaculate conception that I will present you includes several activities.';
    var para4 = document.querySelector("#2");
    para3.innerHTML = '';
}

document.querySelector("#trad").addEventListener("click",Traduction);