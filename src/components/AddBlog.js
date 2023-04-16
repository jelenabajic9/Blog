import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Loader = () => (
    <div className="around-loader">
        <div className="loader">
        </div>
    </div>
);


export const AddBlog = () => {
    const navigate = useNavigate();

    const [blog, setBlog] = useState({
        id: "",
        title: "",
        image: "",
        content: ""
    });

    const [blogs, setBlogs] = useState([]);
    const [lastBlogId, setLastBlogId] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('https://jsonblob.com/api/jsonBlob/1096846519373676544')
            .then(response => response.json())
            .then(data => {
                setBlogs(data); // Set the current state of blogs to the state
                // Get the highest blog ID and add 1 to it
                const highestId = Math.max(...data.map(blog => blog.id), 0);
                setLastBlogId(highestId + 1);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);


    const setTitle = (e) => {
        setBlog({ ...blog, title: e.target.value });
    }
    const setImageUrl = (e) => {
        setBlog({ ...blog, image: e.target.value });
    }
    const setAuthor = (e) => {
        setBlog({ ...blog, author: e.target.value });
    }
    const setContent = (e) => {
        setBlog({ ...blog, content: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const newBlog = {
            ...blog,
            id: lastBlogId
        };

        const updatedBlogs = [...blogs, newBlog];

        fetch('https://jsonblob.com/api/jsonBlob/1096846519373676544', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBlogs)
        })
            .then(response => {
                console.log(response);
                setBlogs(updatedBlogs);
                setLastBlogId(lastBlogId + 1);
                navigate("/");
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });

    }


    return (
        <div className="blog-page max-width">
            {isLoading && <Loader />}
            <form action="" className="add-blog-form" onSubmit={handleSubmit}>
                <label>Add blog</label>
                <input type="text" name="title" maxLength={20} placeholder="Title" onChange={setTitle} />
                <input type="text" name="image" placeholder="Image URL" onChange={setImageUrl} />
                <input type="text" name="author" placeholder="Author" onChange={setAuthor} />
                <textarea name="content" id="" placeholder="Blog content" onChange={setContent}></textarea>
                <button type="submit" >Add blog</button>
            </form>
        </div>
    )
}