import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ps from "../style/pages/Product.module.scss";
import { CommentInput } from "../components/CommentInput/CommentInput";
import { CommentCard } from "../components/CommentCard/CommentCard";
import { useGet } from "../hooks/useGet";
import { UserContext } from "../context/userContext";
import { Pagination } from "../components/Pagination/Pagination";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { userData } = useContext(UserContext);
  const [commentStatus, setCommentStatus] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [pageCount, setPageCount] = useState(1);

  const pageForward = () => {
    if (endIndex < commentData?.data?.items.length) {
      setStartIndex((prev) => prev + 3);
      setEndIndex((prev) => prev + 3);
      setPageCount((prev) => prev + 1);
    }
  };

  const pageBackward = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 3);
      setEndIndex((prev) => prev - 3);
      setPageCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    document.title = `${data?.item?.title} - Bageriet`;
  }, [product]);

  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/bakeonline/products/${id}`
  );
  // console.log(data);

  // console.log(userData);

  const commentData = useGet(
    `https://api.mediehuset.net/bakeonline/comments/${id}`,
    userData?.access_token,
    commentStatus
  );

  console.log(commentData);

  const convertedDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString("da-DK", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <>
      <section className={ps.ProductSection}>
        <button>❤ Like</button>
        <h2>{data?.item?.title}</h2>
        <img src={data?.item?.image.fullpath} alt={product?.title} />
        <p>{data?.item?.description}</p>
      </section>
      {userData ? (
        <>
          <CommentInput productId={id} setCommentStatus={setCommentStatus} />
          {commentData?.data?.items
            ?.slice(startIndex, endIndex)
            .map((comment) => {
              return (
                <CommentCard
                  key={comment.id}
                  image={data?.item.image.fullpath}
                  name={comment.user.firstname + " " + comment.user.lastname}
                  date={convertedDate(comment.created)}
                  comment={comment.comment}
                />
              );
            })}
          <Pagination
            pageForward={pageForward}
            pageBackward={pageBackward}
            pageCount={pageCount}
          />
        </>
      ) : (
        <h4>Du skal være logget ind</h4>
      )}
    </>
  );
};
