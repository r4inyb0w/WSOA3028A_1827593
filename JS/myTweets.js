var Tweets = [
    { tweet: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Mbali* planted these beautiful dwarf irises outside<a href="https://twitter.com/hashtag/PurpleFlowerProtest89?src=hash&amp;ref_src=twsrc%5Etfw">#PurpleFlowerProtest89</a> <a href="https://t.co/V9Dq5aPBPj">pic.twitter.com/V9Dq5aPBPj</a></p>&mdash; PurpleFlowerProtest (@FlowerProtest89) <a href="https://twitter.com/FlowerProtest89/status/1276617630183501833?ref_src=twsrc%5Etfw">June 26, 2020</a></blockquote>` },
    { tweet: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Shaun* is at his local nursery buying some lavenders<a href="https://twitter.com/hashtag/PurpleFlowerProtest89?src=hash&amp;ref_src=twsrc%5Etfw">#PurpleFlowerProtest89</a> <a href="https://t.co/L3uBBEDNJ9">pic.twitter.com/L3uBBEDNJ9</a></p>&mdash; PurpleFlowerProtest (@FlowerProtest89) <a href="https://twitter.com/FlowerProtest89/status/1276617907745808384?ref_src=twsrc%5Etfw">June 26, 2020</a></blockquote>` },
    { tweet: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Lee* planted these lovely violas in a pot on her porch<a href="https://twitter.com/hashtag/PurpleFlowerProtest89?src=hash&amp;ref_src=twsrc%5Etfw">#PurpleFlowerProtest89</a> <a href="https://t.co/E9go647YX1">pic.twitter.com/E9go647YX1</a></p>&mdash; PurpleFlowerProtest (@FlowerProtest89) <a href="https://twitter.com/FlowerProtest89/status/1276617249118392322?ref_src=twsrc%5Etfw">June 26, 2020</a></blockquote>` },
];

function createTweet() {
    let arrLength = Tweets.length;
    let result = "";

    var num = Math.floor(Math.random() * arrLength);

    result = Tweets[num].tweet.toString();

    document.getElementById("tweet").innerHTML = result;
}
