function createNavBar() {
    document.getElementsByTagName("nav")[0].innerHTML +=
        `
            <a href="/WSOA3028A_1827593/index.html">Home Page</a></li>
            <a href="#">My Blogs
              <ul>
                 <a href="/WSOA3028A_1827593/BlogPosts/BlogPost1.html">Blog 1</a>
                 <a href="/WSOA3028A_1827593/BlogPosts/BlogPost2.html">Blog 2</a>
                </ul>
            </a>
            <a href="/WSOA3028A_1827593/FlowersPage/MyFlowers.html">My Flowers</a>
            <a href="/WSOA3028A_1827593/PoliticsPage/MyPolitics.html">My Politics</a>
        `;
}


