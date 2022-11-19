import React, { useState } from "react";

const NewPost = (props)=>{
    const startingState = { title: "", content: "", author: "" };
    const [postState, setPostState] = useState(startingState);


    const addHandler = (event)=>{
        event.preventDefault();
        if(!postState.title || !postState.author||!postState.content) return;
        props.addButtonClicked(postState);
        setPostState(startingState);
    } 

    const onChange = (event) => {
        const { name, value } = event.target

        setPostState({ ...postState, [name]: value })
    }

    return (
        <div>
         
            <h1>New Post:</h1>
            <form>
                <label>Title</label>
                <input type="text"
                    name={'title'}
                    value={postState.title}
                    label={'title'}
                    onChange={(event) => { onChange(event) }}
                />

                <label>Author</label>
                <input type="text"
                    name={'author'}
                    value={postState.author}
                    label={'author'}
                    onChange={(event) => { onChange(event) }}
                />

                <button onClick={addHandler}> Add Post</button>
            </form>
        </div>
    );
}

export default NewPost;