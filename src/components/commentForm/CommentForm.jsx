import React, { useEffect, useState } from "react";
import CTAButton from "../../shared/CTAButton";
import { getDateAndTime } from "../../utils";
import { useSendCommentMutation } from "../../Redux/service/api/comments";

export default function CommentForm({
  userToken,
  userID,
  isProduct,
  contentID,
  category,
  refetch,
}) {
  const [newComment, setNewComment] = useState("");
  const [sendComment, { isLoading: isSendingComment, isSuccess }] =
    useSendCommentMutation();

  useEffect(() => {
    if (isSuccess) {
      iziToast.show({
        message: "Your Comment Successfully Sent!😁",
        backgroundColor: "#4BB543",
        messageColor: "#fff",
      });
      refetch();
      setNewComment("");
    }
  }, [isSuccess]);

  function sendCommentHandler(e) {
    e.preventDefault();
    const { fullDate, fullTime } = getDateAndTime();

    const commentToSend = {
      isProduct,
      userID,
      contentID,
      category,
      content: newComment,
      isReply: 0,
      replyID: 0,
      isConfirmed: 1,
      date: fullDate,
      hour: fullTime,
    };

    sendComment(commentToSend);
  }
  return (
    <div className="comment-form">
      <h4>Write your opinion</h4>
      {userToken ? (
        <form>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={10}
          />
          <CTAButton $isUnique as="button" onClick={sendCommentHandler}>
            {isSendingComment ? "Sending..." : "SEND"}
          </CTAButton>
        </form>
      ) : (
        <p>To register a comment, please log in to the site first.</p>
      )}
    </div>
  );
}
