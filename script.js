let icebeardescribe = document.getElementById("icebeardescribe")
icebeardescribe.innerHTML = "Hello! I am Ice Bear. <br> Ice Bear was born in the North Pole and raised by a man named Yuri.<br>Ice Bear has two bros named Panda and Grizzly.They're my best friends.Amongst them, I am the youngest.<br>Ice Bear does all the chores for Panda and Grizzly. <br>Ice Bear loves to cook, speak multi-language, dance, engineer, and do martial arts.<br>"

let headline = document.getElementById("headline")
headline.innerHTML = "One of the best house cleaning services from the best bear."

let daily = document.getElementById("daily")
daily.innerHTML = "<span class='cost'>$20/day</span><br><br>Daily clean up of whole place. <br><br>Every 10th of the session, <br> you get 5 free session."

let month = document.getElementById("monthly")
monthly.innerHTML = "<span class='cost'>$50/month</span><br><br>Every first of the month.<br><br>Every year of the session,<br> you get 3 free session."

let deepclean = document.getElementById("deepclean")
deepclean.innerHTML = "<span class='cost'>$100/each time</span><br><br>Deep cleaning.<br><br>Every 5th of deep cleaning,<br> you get 1 free."

function changeNav() {
    let navlink = document.getElementById("navlink")
    if (navlink.style.display === "block") {
        navlink.style.display = "none";
    } else {
        navlink.style.display = "block";
    }

    let about = document.getElementById("aboutlink")
    about.innerHTML = "About"
    let contact = document.getElementById("contactlink")
    contact.innerHTML = "Contact"
    let pricing = document.getElementById("pricelink")
    pricing.innerHTML = "Pricing"
}