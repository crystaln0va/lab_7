import Post from "../Post/Post"

const Posts = (props) => {

    // What is coming from the Dashboard:
    const posts = props.data.map(p => {
        return <Post
            id={p.id}
            key={p.id}
            title={p.title}
            author={p.author}
        />
    })
    
    return posts
}

export default Posts