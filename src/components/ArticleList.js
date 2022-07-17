import Article from "./Article"

const ArticleList = ({post}) => {
const posts = post.map(post => {
    return <Article key={post.id} title={post.title} preview={post.preview} date={post.date} />
})
    return(
        <main>
            {posts}
        </main>
    )
}

export default ArticleList; 