import { useEffect, useState } from "react";

const HttpClientDemo = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    apiClient
      .client()
      .getPosts()
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      <h2>HTTP Client Demo</h2>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <span>{JSON.stringify(post)}</span>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default HttpClientDemo;
