import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';

const RankingWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 18px;
    box-shadow: 0px 1px 3.5px 2px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 1rem;
    margin: 1rem 0;
`
const RankingPlace = styled.div`
    background: #9F9F9F;
    border-radius: 0px 0px 40px 40px;
`
const RankingPlaceContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`
const RankingImage = styled.img`
    width: 60px;
    border-radius: 50px;
`
const RankingName = styled.h5`
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
`
const RankingPoints = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
`
export default function LeaderboardComponent({place, profileImage, name, points}) {
    return (
      <RankingWrapper>
        <RankingPlace className="col-2">{place}</RankingPlace>
        <RankingPlaceContainer className="col-8">
            <RankingImage src={profileImage}></RankingImage>
            <RankingName>{name}</RankingName>
        </RankingPlaceContainer>
        <RankingPoints className="col-2">{points}</RankingPoints>
        </RankingWrapper>
    )
};