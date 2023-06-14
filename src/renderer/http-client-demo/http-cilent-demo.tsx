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
          <>
            <div key={index}>{JSON.stringify(post)}</div>
            <br />
            <br />
          </>
        );
      })}
    </div>
  );
};

export default HttpClientDemo;
