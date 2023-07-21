import Button from "react-bootstrap/Button";
import React, { useState } from "react";

export default function Demo() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const handleSubmit = async (e) => {
    alert("Submited");
  };
  return (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
          <img alt="search" />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) =>
              setArticle({
                ...article,
                url: e.target.url,
              })
            }
            required
          />
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
