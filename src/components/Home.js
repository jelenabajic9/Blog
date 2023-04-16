import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = ({ postId }) => {

    useEffect(() => {
        getBlob();
    }, []);

    const [items, setItems] = useState([]);

    function getBlob() {
        fetch("https://jsonblob.com/api/jsonBlob/1096846519373676544")
            .then(response => response.json())
            .then(data => {
                setItems(data);
                console.log(data);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="max-width home-page">
            <h1>All posts</h1>
            <div className="blog-gallery">
                {Array.isArray(items) && items.map(item => (
                    <div className="post" key={item.id}>
                        <Link to={`/blog/${item.id}`} onClick={() => postId(item.id)}>
                            <div className="blog-img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="blog-info">
                                <h2>{item.title}</h2>
                                <h3>{item.author}</h3>
                            </div>
                        </Link>
                    </div>

                ))}
                {items.length === 0 &&
                    <div className="loader">
                    </div>
                }
            </div>

        </div >
    )
}
