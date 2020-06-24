function getSource() {
    let source = window.location;
    if (source == "https://r4inyb0w.github.io/WSOA3028A_1827593/index.html") {
        return ("../WSOA3028A_1827593/Images/twitterLogo.png")
    } else {
        return ("../Images/twitterLogo.png")
    }
}

function createFooterInfo() {

    let currSource = getSource();

    document.getElementsByTagName("footer")[0].innerHTML +=
        ` <section class="h-card">
        <p style="display: inline; padding-right: 20px;" class="p-tel">Contact Number: 011 450 8221 </p>
        <p style="display: inline; padding-right: 20px;" class="p-post-office-box"> P.O. Box 1212, Highway Gardens,
            Edenvale </p>
        <p style="display: inline; padding-right: 20px;" class="p-street-address"> Daniels' Daisies Address: 98 1st Rd, Dunvegan,
            Johannesburg, 2090</p>
        <p>
            <a href="https://mobile.twitter.com/FlowerProtest89"><img width= 15rem;
            src="` + currSource +
        `" alt="Twitter logo"></a>
        </p>
        <p>Latest Update: 20 March 1990</p>
    </section>`;
}
