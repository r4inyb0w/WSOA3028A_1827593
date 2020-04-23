function createNavBar() {
    document.getElementsByTagName("nav")[0].innerHTML +=
        `<a href="/WSOA3028A_1827593/index.html">Home Page</a>
        <a href="/WSOA3028A_1827593/BlogPosts/BlogPost1.html">My Blogs</a> 
            <a class="dropbtn">Dropdown
                <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
                 <a href="/WSOA3028A_1827593/BlogPosts/BlogPost1.html">Blog 1</a>
                 <a href="/WSOA3028A_1827593/BlogPosts/BlogPost2.html">Blog 2</a>
            </div>
        <a href="/WSOA3028A_1827593/FlowersPage/MyFlowers.html">My Flowers</a> 
        <a href="/WSOA3028A_1827593/PoliticsPage/MyPolitics.html">My Politics</a>`;
}