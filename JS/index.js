var BlogPosts = [
    { title: 'Reflection: As we may think', date: new Date('2020/02/07'), href: '/WSOA3028A_1827593/BlogPosts/As-we-may-think-1945.html' },
    { title: 'Reflection: Library of Babel and The Garden of Forking Paths', date: new Date('2020/02/07'), href: '/WSOA3028A_1827593/BlogPosts/Library-of-Babel-and-The-Garden-of-Forking-Paths.html' },
    { title: 'Character Description', date: new Date('2020/02/07'), href: '/WSOA3028A_1827593/BlogPosts/Character-Description.html' },
    { title: 'Wireframes and Style Guide', date: new Date('2020/02/14'), href: '/WSOA3028A_1827593/BlogPosts/Wireframes-and-Style-Guide.html' },
    { title: 'Reflection: Theodore H. Nelson - 1981', date: new Date('2020/02/14'), href: '/WSOA3028A_1827593/BlogPosts/Theodore-H-Nelson-1981.html' },
    { title: 'Why the dot-com bubble was an important part of internet history', date: new Date('2020/02/14'), href: '/WSOA3028A_1827593/BlogPosts/Why-the-dot-com-bubble-was-an-important-part-of-internet-history.html' },
    { title: 'The link between changing technology and the development and spread of internet culture', date: new Date('2020/02/14'), href: '/WSOA3028A_1827593/BlogPosts/The-link-between-changing-technology-and-the-development-and-spread-of-internet-culture.html' },
    { title: 'Semantic Mark-up and HTML5', date: new Date('2020/02/21'), href: '/WSOA3028A_1827593/BlogPosts/Semantic-Mark-up-and-HTML5.html' },
    { title: 'Metadata', date: new Date('2020/02/28'), href: '/WSOA3028A_1827593/BlogPosts/Metadata.html' },
    { title: 'Events and Interactivity', date: new Date('2020/03/06'), href: '/WSOA3028A_1827593/BlogPosts/Events-and-Interactivity.html' },
    { title: 'Online learning and teaching', date: new Date('2020/03/20'), href: '/WSOA3028A_1827593/BlogPosts/Online-learning-and-teaching.html' },
    { title: 'Character exploration: Flowers and their meanings', date: new Date('2020/03/20'), href: '/WSOA3028A_1827593/BlogPosts/Character-exploration-Flowers-and-their-meanings.html' },
    { title: 'How would Macey Daniels deal with the COVID-19 pandemic?', date: new Date('2020-03-25'), href: '/WSOA3028A_1827593/BlogPosts/How-would-Macey-Daniels-deal-with-the-COVID-19-pandemic.html' },
    { title: 'So we are in the late 80s?', date: new Date('2020/04/24'), href: '/WSOA3028A_1827593/BlogPosts/So-we-are-in-the-late-80s.html' },
    { title: 'A close reading: Towards a study of information geographies', date: new Date('2020/05/01'), href: '/WSOA3028A_1827593/BlogPosts/Information-Geographies.html' },
    { title: 'A little example of the digital divide', date: new Date('2020/05/15'), href: '/WSOA3028A_1827593/BlogPosts/A-little-example-of-the-digital-divide.html' },
    { title: 'Racial Bias in AI', date: new Date('2020/05/22'), href: '/WSOA3028A_1827593/BlogPosts/Racial-Bias-in-AI.html' },
];

function initialiseLatestBlogPost() {
    let latestBlogPostElement = document.querySelector('#latestBlogPost');

    if (!latestBlogPostElement) return;

    const latestBlogPost = BlogPosts.sort((a, b) => {
        if (a.date > b.date) {
            return -1;
        }
        if (a.date < b.date) {
            return 1;
        }
        return 0;
    })[0];

    latestBlogPostElement.innerText = latestBlogPost.title;
    latestBlogPostElement.href = latestBlogPost.href;

};

function createNavBar() {

    let arrLength = BlogPosts.length;
    let result = "";
    for (var i = 0; i < arrLength; i++) {
        console.log(BlogPosts[i]);
        result += "<li><a href=" + BlogPosts[i].href + ">" + BlogPosts[i].title + "</a></li>" + "\n";
    }

    document.getElementsByTagName("nav")[0].innerHTML +=
        `<ul>
            <li><a href="/WSOA3028A_1827593/index.html">Home Page</a></li>
            <li><a href="#">My Blogs</a>
              <ul>` + result +

        `</ul >
            </li >
        <li><a href="/WSOA3028A_1827593/FlowersPage/MyFlowers.html">My Flowers</a></li>
        <li><a href="/WSOA3028A_1827593/PoliticsPage/MyPolitics.html">My Politics</a></li>
        <li><a href="/WSOA3028A_1827593/ProtestPage/MyProtest.html">My Protest</a></li>
        </ul > `;
}

