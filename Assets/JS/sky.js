const sky = document.querySelector(".window");
const cloudOne = document.createElement("div");
const cloudBaseOne = document.createElement("div");
const cloudMiniBumpOne = document.createElement("div");
const cloudMainBumpOne = document.createElement("div");
const cloudTwo = document.createElement("div");
const cloudBaseTwo = document.createElement("div");
const cloudMiniBumpTwo = document.createElement("div");
const cloudMainBumpTwo = document.createElement("div");
const sunRays = document.createElement("div");
const sun = document.createElement("div");
const stars = document.createElement("div");
const farStars = document.createElement("div");
    
sky.appendChild(sunRays);
sunRays.appendChild(sun);
sky.appendChild(cloudOne);
sky.appendChild(cloudTwo);
sky.appendChild(stars);
sky.appendChild(farStars);

cloudOne.appendChild(cloudBaseOne);
cloudOne.appendChild(cloudMiniBumpOne);
cloudOne.appendChild(cloudMainBumpOne);
cloudTwo.appendChild(cloudBaseTwo);
cloudTwo.appendChild(cloudMiniBumpTwo);
cloudTwo.appendChild(cloudMainBumpTwo);

function changeSky() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    let pam;
    if (hour < 12) {
        pam = "AM";
    }
    else {
        pam = "PM";
    }
    console.log(`The time right now if you use military hours: ${hour}:${minute} ${pam}`);
    

    sky.classList.remove("dawn-sky", "mid-day-sky", "dusk-sky", "night-sky");
    cloudOne.classList.remove("cloud", "cloud-one-dawn", "cloud-one-mid");
    cloudBaseOne.classList.remove("cloud-base", "white-clouds", "plum-clouds");
    cloudMiniBumpOne.classList.remove("cloud-mini-bump", "mini-one", "white-clouds", "plum-clouds");
    cloudMainBumpOne.classList.remove("cloud-main-bump", "main-one", "white-clouds", "plum-clouds");
    cloudTwo.classList.remove("cloud", "cloud-two-dawn", "cloud-two-mid");
    cloudBaseTwo.classList.remove("cloud-base", "pale-yellow-clouds", "white-clouds", "pink-clouds");
    cloudMiniBumpTwo.classList.remove("cloud-mini-bump", "mini-two", "pale-yellow-clouds", "white-clouds", "pink-clouds");
    cloudMainBumpTwo.classList.remove("cloud-main-bump", "main-two", "pale-yellow-clouds", "white-clouds", "pink-clouds");
    sunRays.classList.remove("sun-rays");
    sun.classList.remove("sun", "sunrise", "sunset");
    stars.classList.remove("stars");
    farStars.classList.remove("small-stars");

    if (hour >= 5 && hour < 10) {
        sky.classList.add("dawn-sky");
        cloudOne.classList.add("cloud", "cloud-one-dawn");
        cloudBaseOne.classList.add("cloud-base", "white-clouds");
        cloudMiniBumpOne.classList.add("cloud-mini-bump", "mini-one", "white-clouds");
        cloudMainBumpOne.classList.add("cloud-main-bump", "main-one", "white-clouds");
        cloudTwo.classList.add("cloud", "cloud-two-dawn");
        cloudBaseTwo.classList.add("cloud-base", "pale-yellow-clouds");
        cloudMiniBumpTwo.classList.add("cloud-mini-bump", "mini-two", "pale-yellow-clouds");
        cloudMainBumpTwo.classList.add("cloud-main-bump", "main-two", "pale-yellow-clouds");
        sunRays.classList.add("sun-rays");
        sun.classList.add("sun", "sunrise");

    } else if (hour >= 10 && hour < 17) {
        sky.classList.add("mid-day-sky");
        cloudOne.classList.add("cloud", "cloud-one-mid");
        cloudBaseOne.classList.add("cloud-base", "white-clouds");
        cloudMiniBumpOne.classList.add("cloud-mini-bump", "mini-one", "white-clouds");
        cloudMainBumpOne.classList.add("cloud-main-bump", "main-one", "white-clouds");
        cloudTwo.classList.add("cloud", "cloud-two-mid");
        cloudBaseTwo.classList.add("cloud-base", "white-clouds");
        cloudMiniBumpTwo.classList.add("cloud-mini-bump", "mini-two", "white-clouds");
        cloudMainBumpTwo.classList.add("cloud-main-bump", "main-two", "white-clouds");

    } else if (hour >= 17 && hour < 20) {
        sky.classList.add("dusk-sky");
        cloudOne.classList.add("cloud", "cloud-one-dawn");
        cloudBaseOne.classList.add("cloud-base", "plum-clouds");
        cloudMiniBumpOne.classList.add("cloud-mini-bump", "mini-one", "plum-clouds");
        cloudMainBumpOne.classList.add("cloud-main-bump", "main-one", "plum-clouds");
        cloudTwo.classList.add("cloud", "cloud-two-dawn");
        cloudBaseTwo.classList.add("cloud-base", "pink-clouds");
        cloudMiniBumpTwo.classList.add("cloud-mini-bump", "mini-two", "pink-clouds");
        cloudMainBumpTwo.classList.add("cloud-main-bump", "main-two", "pink-clouds");
        sunRays.classList.add("sun-rays");
        sun.classList.add("sun", "sunset");

    } else if (hour >= 20 || hour < 5) {
        sky.classList.add("night-sky");
        stars.classList.add("stars");
        farStars.classList.add("small-stars");
    }
};

setInterval(changeSky(), 60000);
