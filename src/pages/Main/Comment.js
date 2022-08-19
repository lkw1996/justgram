const Comment = (props) => {
  const { id, content, writer, createdAt } = props;
  return (
    <span>
      {content} - {writer} <span>{createdAt}</span>
    </span>
  );
};

export default Comment;
