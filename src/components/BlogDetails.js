import React, { useState, useEffect } from "react";

export const BlogDetails = ({ postId }) => {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        getBlog();
    }, []);


    function getBlog() {
        fetch("http://jsonblob.com/api/jsonBlob/1096846519373676544")
            .then(response => response.json())
            .then(data => {
                setBlog(data);
                console.log(data);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="blog-page max-width">
            {blogs.length > 0 && blogs.map(blog => blog.id === postId ? (
                <div className="blog" key={blog.id}>
                    <div className="blog-image">
                        <img src={blog.image} alt="" />
                    </div>
                    <div className="author">{blog.author}</div>
                    <div>
                        <p>{blog.content}</p>
                    </div>
                </div>

            ) : null)}
            {blogs.length === 0 &&
                <div className="loader">
                </div>
            }
        </div>
    )

}