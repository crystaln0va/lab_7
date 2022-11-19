import Posts from "../Posts/Posts";
import { useEffect, useState } from "react";
import PostDetails from "../PostDetails/PostDetails";

const Dashboard = () => {

    // Initial data array
    const [postsState, setPostsState] = useState([
        { id: 1, title: "Facebook", author: "Zuck" },
        { id: 2, title: "Twitter", author: "Musk" },
        { id: 3, title: "MySpace", author: "WhoKnows" }
    ])

    // Monitor the title changing
    const [title, setTitle] = useState("");

    // Take the event generated from the "Change" button being clicked, and update the Posts array
    const changeName = (event) => {
        const postsCopyExpectFirst = postsState.slice(1);
        const element1 = postsState[0];
        const copyPosts = [{ ...element1, title }, ...postsCopyExpectFirst];
        setPostsState(copyPosts);
    };

    // Get posts from the Posts API
    const fetchPosts = () => {
        axios.get('http://localhost:8080/api/v1/posts')
            .then(response => {
                setPostsState(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    // Enact the above by making the useEffect call, prevent infinity loop
    useEffect(() => {
        fetchPosts()
    }, [])

    // Delete by ID:
    const deleteHandler = (id) => {
        axios.delete('http://localhost:8080/api/v1/posts/' + id)
            .then(response =>
                fetchPosts()
            )
            .catch(err => {
                console.log(err.message)
            })
    }

    // Monitor the select state of each of the products
    const [selectedState, setSelectedState] = useState(0)

    // Make the listener for which item becomes selected. When this changes, selectedState changes.
    const setSelected = (id) => {
        setSelectedState(id)
    }

    // Delete Post from the Post API when the given button is clicked
    const deleteButtonClicked = (id) => {
        axios.delete('http://localhost:8080/api/v1/posts/' + id)
        .then(response => {
            fetchProducts()
        })
        .catch( error => {
            console.log(error.message)
        })
    }

    // Add Post at Post API when add Post is selected
    const addButtonClicked = (postState) => {
        axios.post('http://localhost:8080/api/v1/posts',postState)
        .then(response => {
            fetchProducts()
        })
        .catch(error=> {
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="PostHolder">
                <Posts data={postsState} setSelected={setSelected}/>
            </div>
            <div>
                <PostDetails
                    id={selectedState}
                    deletePost={deleteButtonClicked}
                />
            </div>
            <div>
                <NewPost addButtonClicked={addButtonClicked}/>
            </div>
            <div>
                <input type="text" title="title" onChange={(e) => setTitle(e.target.value)}></input>
                <button onClick={changeName}>Change Name</button>
            </div>
        </div>
    )
}

export default Dashboard;