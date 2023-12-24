import styled from "styled-components";

const PostWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 1px 3.5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 46px;
    padding: 3rem;
    margin: 1rem 0;

    @media (max-width: 991px) {
        padding: 0 2rem;
    }

    @media (max-width: 767px) {
        padding: 1.5rem;
    }
`
const PostText = styled.p`
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #1E1E1E;

    @media (max-width: 991px) {
        font-size: 16px;
    }

    @media (max-width: 767px) {
        font-size: 14px;
    }
`
const PostImage = styled.img`
    width: 100%;
    height: 100%;
    height: 339px;
    border-radius: 18px;
`
const PostProfileContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const PostProfileImage = styled.img`
    width: 50px;
    border-radius: 50px;
`
const PostProfileName = styled.h5`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #000000;
    margin: 0 20px;

    @media (max-width: 991px) {
        font-size: 20px;
    }

    @media (max-width: 767px) {
        font-size: 18px;
    }
`
export default function FeedPostComponent({name, profileImage, feedImage, text}) {
    return (
      <PostWrapper>
        <PostProfileContainer>
            <PostProfileImage src={profileImage} alt="Profile Image"></PostProfileImage>
            <PostProfileName>{name}</PostProfileName>
        </PostProfileContainer>
        <PostImage src={feedImage} alt="Feed Image" className="my-3"></PostImage>
        <PostText>{text}</PostText>
        </PostWrapper>
    )
  };