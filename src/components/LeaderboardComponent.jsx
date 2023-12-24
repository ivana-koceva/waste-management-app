import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';

const RankingWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 18px;
    box-shadow: 0px 1px 3.5px 2px rgba(0, 0, 0, 0.1);
    padding: 1rem 1.5rem;
    margin: 1rem 0;
`
const RankingPlace = styled.div`
    // background: #2B8500;
    // border-radius: 0px 0px 40px 40px;
`
const RankingPlaceContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`
const RankingImage = styled.img`
    width: 50px;
    border-radius: 50px;
`
const RankingName = styled.h5`
    font-weight: 400;
    font-size: 22px;
    line-height: 29px;
    color: #000000;
    margin: 0 20px;
`
const RankingPoints = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    color: #2B8500;
`
const RankingRow =styled.div`
    align-items: center;
`
export default function LeaderboardComponent({place, profileImage, name, points}) {
    return (
      <RankingWrapper className="container">
        <RankingRow className="row">
            <div className="col-2">
                <RankingPlace>{place}</RankingPlace>
            </div>
            
            <RankingPlaceContainer className="col-8">
                <RankingImage src={profileImage}></RankingImage>
                <RankingName>{name}</RankingName>
            </RankingPlaceContainer>

            <div className="col-2">
                <RankingPoints>{points}</RankingPoints>
            </div>
        </RankingRow>
        
        </RankingWrapper>
    )
};