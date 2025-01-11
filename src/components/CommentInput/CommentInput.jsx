import cs from "./CommentInput.module.scss";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

export const CommentInput = ({ productId, num_comments, setCommentStatus }) => {
  const [newComment, setNewComment] = useState();
  const { userData } = useContext(UserContext);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  const submitComment = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    let url = "https://api.mediehuset.net/bakeonline/comments";
    let token = userData?.access_token;
    let body = new URLSearchParams();

    body.append("title", "comment");
    body.append("comment", newComment);
    body.append("user_id", userData.user_id);
    body.append("product_id", productId);
    body.append("active", true);

    const options = {
      method: "POST",
      body: body,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setCommentStatus(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <section>
      <div className={cs.CommentHeader}>
        <p>kommentar</p>
        <p>{num_comments}</p>
      </div>
      <div className={cs.CommentInput}>
        <form>
          <span className={cs.CommentIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
              <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
            </svg>
          </span>
          <input
            onChange={(event) => setNewComment(event.target.value)}
            type="text"
            name="comment"
            id="comment"
            placeholder="Tilføj din kommentar...."
          />
          <button onClick={submitComment}>SEND</button>
        </form>
      </div>
    </section>
  );
};
