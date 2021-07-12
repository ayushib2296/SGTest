import React from "react";
import {
  ReviewsContainer,
  Title,
  Description,
  LikesComments,
  Likes,
  HeartImg,
  LikesCount,
  Comments,
  CommentImg,
  CommentsCount,
} from "./ReviewsElements.styled";
import likes from "../../../../images/likes.png";
import comments from "../../../../images/comments.png";

const ReviewsCard = ( {data} ) => {
  const { sectionId, title, description, likesCount, commentsCount } = data;
  let marLeft = sectionId === 1 ? "25px" : "0px"
  return (
    <ReviewsContainer style={{marginLeft: marLeft}}>
      <Title>{title}</Title>
      <Description dangerouslySetInnerHTML={{__html: description}} />
      <LikesComments>
        <Comments>
          <CommentImg src={comments} />
          <CommentsCount>{commentsCount}</CommentsCount>
        </Comments>
        <Likes>
          <HeartImg src={likes} />
          <LikesCount>{likesCount}</LikesCount>
        </Likes>
      </LikesComments>
    </ReviewsContainer>
  );
};

export default ReviewsCard;
