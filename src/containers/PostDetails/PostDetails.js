import { useEffect } from "react"


const PostDetails = (props) => {
    const [detail,setDetail] = useState(0)

    useEffect( () => {
        axios.get('http://localhost:8080/api/v1/posts/' + props.id)
        .then(response => {
            setDetail(response.data)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, [props.id])

    let myDisplay = null

    if ( props.id !== 0 ) {
        myDisplay = (

            <div>
                <h1>Information About Post</h1>
                <h2>ID:{detail.id}</h2>
                <h2>Title:{detail.title}</h2>
                <h2>Authot:{detail.author}</h2>
                <button onClick={() => props.deletePost(postDetail.id)}> Delete </button>
            </div>
        )
    }
}

export default PostDetails