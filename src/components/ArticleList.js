import blogData from "../data/blog"
import Article from "./Article"

function ArticleList () {
  const { posts } = blogData
  return (
    <main>
      {posts.map((post) => (
      <Article
         key = {post.id}
         title = {post.title}
         date = {post.date}
         preview = {post.preview}
      />
    ))}
    </main>
    
  )

}

export default ArticleList