import styled from "styled-components";

const PostWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 1px 3.5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 46px;
    padding: 3rem;
    margin: 1rem 0;
`
const PostText = styled.p`

    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #1E1E1E;
`
const PostImage = styled.img`
    width: 616px;
    height: 339px;
    border-radius: 18px;
`
const PostProfileContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`
const PostProfileImage = styled.img`
    width: 65px;
    border-radius: 50px;
`
const PostProfileName = styled.h5`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #000000;
`
export default function FeedPostComponent({name, profileImage, feedImage, text}) {
    return (
      <PostWrapper>
        <PostProfileContainer>
            <PostProfileImage src={profileImage} alt="Profile Image"></PostProfileImage>
            <PostProfileName>{name}</PostProfileName>
        </PostProfileContainer>
        <PostImage src={feedImage} alt="Feed Image"></PostImage>
        <PostText>{text}</PostText>
        </PostWrapper>
    )
  };