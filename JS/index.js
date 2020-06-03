var BlogPosts = [
    { title: 'How would Macey Daniels deal with the COVID-19 pandemic?', date: new Date('2020-03-25'), href: '/WSOA3028A_1827593/BlogPosts/How-would-Macey-Daniels-deal-with-the-COVID-19-pandemic.html' },
    { title: 'So we are in the late 80s?', date: new Date('2020/04/24'), href: '/WSOA3028A_1827593/BlogPosts/So-we-are-in-the-late-80s.html' },
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
    document.getElementsByTagName("nav")[0].innerHTML +=
        `<ul>
            <li><a href="/WSOA3028A_1827593/index.html">Home Page</a></li>
            <li><a href="#">My Blogs</a>
              <ul>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/As-we-may-think-1945.html">Reflection: As we may think</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/Library-of-Babel-and-The-Garden-of-Forking-Paths.html">Reflection: Library of Babel and The Garden of Forking Paths</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/Character-Description.html">Character Description</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/Wireframes-and-Style-Guide.html">Wireframes and Style Guide</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/Theodore-H-Nelson-1981.html">Reflection: Theodore H. Nelson - 1981</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/Why-the-dot-com-bubble-was-an-important-part-of-internet-history.html">Why the dot-com bubble was an important part of internet history</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/The-link-between-changing-technology-and-the-development-and-spread-of-internet-culture.html">The link between changing technology and the development and spread of internet culture</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/Semantic-Mark-up-and-HTML5.html">Semantic Mark-up and HTML5</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/Metadata.html">Metadata</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/Events-and-Interactivity.html">Events and Interactivity</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/Online-learning-and-teaching.html">Online learning and teaching</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/Character-exploration-Flowers-and-their-meanings.html">Character exploration: Flowers and their meanings</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/How-would-Macey-Daniels-deal-with-the-COVID-19-pandemic.html">How would Macey Daniels deal with the COVID-19 pandemic?</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/So-we-are-in-the-late-80s.html">So we are in the late 80s?</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/A-little-example-of-the-digital-divide.html">A little example of the digital divide</a></li>
                 <li><a href="/WSOA3028A_1827593/BlogPosts/Racial-Bias-in-AI.html">Racial Bias in AI</a></li>
                </ul>
            </li>
            <li><a href="/WSOA3028A_1827593/FlowersPage/MyFlowers.html">My Flowers</a></li>
            <li><a href="/WSOA3028A_1827593/PoliticsPage/MyPolitics.html">My Politics</a></li>
        </ul>`;
}


