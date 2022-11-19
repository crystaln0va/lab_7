import Posts from "../Posts/Posts";
import { useState } from "react";

const Dashboard = () => {

    const [postsState, setPostsState] = useState([
        { id: 1, title: "Facebook", author: "Zuck" },
        { id: 2, title: "Twitter", author: "Musk" },
        { id: 3, title: "MySpace", author: "WhoKnows" }
    ])

    const [title, setTitle] = useState("");

    const changeName = (event) => {
        const postsCopyExpectFirst = postsState.slice(1);
        const element1 = postsState[0];
        const copyPosts = [{ ...element1, title }, ...postsCopyExpectFirst];
        setPostsState(copyPosts);
    };

    return (
        <div>
            <div className="PostHolder">
                <Posts data={postsState} />
            </div>

            <div>
                <input type="text" title="title" onChange={(e) => setTitle(e.target.value)}></input>
                <button onClick={changeName}>Change Name</button>
            </div>
        </div>
    )
}

export default Dashboard;