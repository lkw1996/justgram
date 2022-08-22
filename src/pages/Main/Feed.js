import React, { useState, useRef, useEffect } from "react";
import Comment from "./Comment";

const Feed = ({ feedData }) => {
  const value = useRef();
  const [id, setId] = useState(1);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch("/data/comments.json")
      .then((res) => res.json())
      .then((data) => {
        setCommentList(data.comments);
      });
  }, []);

  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id: id,
      content: value.current.value,
      createdAt: new Date().toLocaleString(),
    };

    value.current.value = "";
    setCommentList([...commentList, newComment]);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      addComment();
    }
  };

  return (
    <>
      <div className="feed-container">
        <div className="to-do feed-header padding-10">
          <div className="vertical-center">
            <img src="" alt="이미지" /> 아이디
          </div>
          <div>...</div>
        </div>
        <div className="to-do feed-image">
          <img className="feed-img" src={feedData.feedImages[0].imgeUrl} />
        </div>
        <div>
          <span>{feedData.content}</span>
        </div>
        <div className="to-do feed-menu padding-10">
          <div>왼쪽 아이콘</div>
          <div>오른쪽 아이콘</div>
        </div>
        <div className="to-do feed-comment">
          <div className="feed-comment-like padding-10">
            ainworld님 외 10명이 좋아합니다.
          </div>
          <div className="feed-comment-list padding-10">
            {commentList.map((comment) => {
              return (
                <li key={comment.id}>
                  <Comment
                    id={comment.id}
                    content={comment.content}
                    writer={"익명"}
                    createdAt={comment.createdAt || "2022-01-01"}
                  />
                </li>
              );
            })}
          </div>
          <div>42분전</div>
          <div className="feed-comment-write padding-10">
            <input
              className="comment-write-input"
              placeholder="댓글달기..."
              ref={value}
              onKeyDown={onKeyDown}
            />
            <button className="comment-write-button" onClick={addComment}>
              게시
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
