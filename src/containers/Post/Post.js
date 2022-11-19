

// The setup for each individual post



const Post = (props) => {

return(
    <div className="Content">
        <h1>ID: {props.id}</h1>
        <h2>Title: {props.title}</h2>
        <h3>Author: {props.author}</h3>
    </div>
)
    
}

export default Post