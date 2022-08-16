import "./Main.scss";

function Main() {
  return (
    <>
      <div className="to-do header-wrapper">
        <div className="vertical-center">
          <img className="icon-image" src="image/logo.png" />
          <span className="header-text">| justgram</span>
        </div>
        <div className="vertical-center">
          <input placeholder="검색" />
        </div>
        <div className="vertical-center">
          <img
            className="icon-image"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            className="icon-image custom-margin-left"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            className="icon-image custom-margin-left"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </div>
      </div>
      <div className="flex-center">
        <div className="to-do contents-wrapper">
          <div className="feed-container">
            <div className="to-do feed-header padding-10">
              <div className="vertical-center">
                <img alt="이미지" /> 아이디
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
              <div className="feed-comment-list padding-10"></div>
              <div>42분전</div>
              <div className="feed-comment-write padding-10">
                <input
                  className="comment-write-input"
                  placeholder="댓글달기..."
                />
                <button className="comment-write-button">게시</button>
              </div>
            </div>
          </div>
          <div className="feed-container">
            <div className="to-do feed-header padding-10">
              <div className="vertical-center">
                <img alt="이미지" /> 아이디
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
              <div className="feed-comment-list padding-10"></div>
              <div>42분전</div>
              <div className="feed-comment-write padding-10">
                <input
                  className="comment-write-input"
                  placeholder="댓글달기..."
                />
                <button className="comment-write-button">게시</button>
              </div>
            </div>
          </div>
          <div className="feed-container">
            <div className="to-do feed-header padding-10">
              <div className="vertical-center">
                <img alt="이미지" /> 아이디
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
              <div className="feed-comment-list padding-10"></div>
              <div>42분전</div>
              <div className="feed-comment-write padding-10">
                <input
                  className="comment-write-input"
                  placeholder="댓글달기..."
                />
                <button className="comment-write-button">게시</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
