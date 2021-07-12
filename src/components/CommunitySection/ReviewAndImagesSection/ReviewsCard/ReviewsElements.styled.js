import styled from "styled-components";

export const ReviewsContainer = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0px 15px 50px #0000000f;
  @media screen and (max-width: 750px) {
    width: 130px;
    height: 130px;
    padding-top: 8px;
    padding-left: 14px;
    padding-right: 14px;
  }
`;

export const Title = styled.div`
  font-weight: bolder;
  font-size: 18px;
  margin-bottom: 16px;
  @media screen and (max-width: 750px) {
    font-size: 10px;
    margin-bottom: 3px;
  }
`;

export const Description = styled.div`
  max-height: 127px;
  max-width: 190px;
  p {
    margin-bottom: 0px;
    font-size: 13px;
  }

  @media screen and (max-width: 750px) {
    p {
      font-size: 8px;
    }
  }
`;

export const LikesComments = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  @media screen and (max-width: 750px) {
    margin-top: -6px;
  }
`;

export const Likes = styled.div`
  margin-left: 15px;
`;

export const HeartImg = styled.img`
  @media screen and (max-width: 750px) {
    height: 9px;
    width: 9px;
    margin-top: 4px;
  }
`;

export const LikesCount = styled.span`
  font-size: 14px;
  margin-left: 4px;
  @media screen and (max-width: 750px) {
    font-size: 7px;
  }
`;

export const CommentImg = styled.img`
  @media screen and (max-width: 750px) {
    height: 9px;
    width: 9px;
    margin-top: 4px;
  }
`;

export const Comments = styled.div``;
export const CommentsCount = styled.span`
  font-size: 14px;
  margin-left: 4px;
  @media screen and (max-width: 750px) {
    font-size: 7px;
  }
`;
