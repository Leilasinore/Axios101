import { useEffect, useState } from "react";
import axios from "axios";
// limit, if 429 wait for 15 min and try again
const url = "https://jsonplaceholder.typicode.com/posts";

const FirstRequest = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map(post=>(
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default FirstRequest;
