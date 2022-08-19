import React, { useState, useRef } from "react";

const Feed = () => {
  const value = useRef();
  const [id, setId] = useState(1);
  const [commentList, setCommentList] = useState([
    {
      id: 0,
      content: "쪽팔리네",
    },
  ]);

  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id: id,
      content: value.current.value,
    };

    setCommentList([...commentList, newComment]);
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
          <img
            className="feed-img"
            src="https://images.unsplash.com/photo-1659434322358-72fd6d1e74ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80"
          />
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
              return <li key={comment.id}>{comment.content}</li>;
            })}
          </div>
          <div>42분전</div>
          <div className="feed-comment-write padding-10">
            <input
              className="comment-write-input"
              placeholder="댓글달기..."
              ref={value}
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
