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