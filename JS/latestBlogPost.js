const BlogPosts = [
    { title: 'How would Macey Daniels deal with the COVID-19 pandemic?', date: new Date('2020-03-25'), href = '/WSOA3028A_1827593/BlogPosts/How-would-Macey-Daniels-deal-with-the-COVID-19-pandemic.html' }
];

const initialiseLatestBlogPost = () => {
    const latestBlogPostElement = document.querySelector('.latestBlogPost');

    if (!latestBlogPostElement) return;

    const latestBlogPost = BlogPosts.sort((a, b) => {
        if (a.date > b.date) {
            return -1;
        }
        if (a.date < b.date) {
            return 1;
        }
        return 0;
    })[0]

    latestBlogPostElement.innerText = latestBlogPost.title;
}

document.addEventListener('DOMContentLoaded', () => {
    initialiseLatestBlogPost();
})