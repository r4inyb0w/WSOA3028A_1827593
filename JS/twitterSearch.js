//const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://api.twitter.com/1.1/search/tweets.json?q=%23PurpleFlowerProtest89&result_type=popular";
var myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.get('Content-Type');

fetch(url, { headers: 'Access-Control-Allow-Origin' + myHeaders })
    .then((r) => r.json())
    .then((tweet) => {
        console.log(tweet);
    })
    .catch((error) => console.warn("My Warning", error));


/*

function createNode(elem) {
    return document.createElement(elem);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const p = document.getElementById("tweet");

const url = "https://api.twitter.com/1.1/search/tweets.json?q=%23PurpleFlowerProtest89&result_type=popular";

fetch(url, { headers: 'Access-Control-Allow-Origin' })
    .then((r) => r.json())
    .then((data) => {
        console.log("hi");
        let tweets = data.results;

        return tweets.map(function (tweet) {
            let span = createNode('span');

            span.innerHTML = `${tweet.text} ${tweet.handle}`;

            append(p, span);
        })
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });


/*

fetch('people.json').then(function (response) {
   return response.json();
}).then(function (obj) {
   console.log(obj);
}).catch(function (error) {
   console.error("Something went wrong: ");
   console.error(error);
});*/