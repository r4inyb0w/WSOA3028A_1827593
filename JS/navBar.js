function createNavBar() {
    document.getElementsByTagName("nav")[0].innerHTML +=
        `<ul>
            <li><a href="/WSOA3028A_1827593/index.html">Home Page</a></li>
            <li><a href="#">My Blogs</a>
              <ul>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/BlogPost1.html">Blog 1</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/BlogPost2.html">Blog 2</a></li>
                </ul>
            </li>
            <li><a href="/WSOA3028A_1827593/FlowersPage/MyFlowers.html">My Flowers</a></li>
            <li><a href="/WSOA3028A_1827593/PoliticsPage/MyPolitics.html">My Politics</a></li>
        </ul>`;
}


