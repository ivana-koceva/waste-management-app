import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';

const SubmissionsWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 18px;
    box-shadow: 0px 1px 3.5px 2px rgba(0, 0, 0, 0.1);
    padding: 1rem 1rem;
    margin: 1rem 0;
`
const SubmissionImageContainer = styled.div`
    display: flex;
    justify-content: center;
`
const SubmissionImage = styled.img`
    border-radius: 15px;
    width: 100%;
`
const SubmissionContainer = styled.div`
    display: grid;
`
const SubmissionTitle = styled.h4`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
`
const SubmissionText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
`
const SubmissionReview = styled.div`
    border-radius: 50px;
    color: #2B8500;
`
export default function PastSubmissionsComponent({image, title, severity, categories, location, review}) {
    return (
      <SubmissionsWrapper className="container">
        <div className="row">
            <SubmissionImageContainer className="col-lg-4 col-12">
                <SubmissionImage src={image}></SubmissionImage>
            </SubmissionImageContainer>
        <SubmissionContainer className="col-lg-6 col-md-8 my-3">
            <SubmissionTitle>{title}</SubmissionTitle>
            <SubmissionText>{severity}</SubmissionText>
            <SubmissionText>{categories}</SubmissionText>
            <SubmissionText>{location}</SubmissionText>
        </SubmissionContainer>
        <div className="col-lg-1 col-md-3">
            <SubmissionReview >{review}</SubmissionReview>
        </div>
        </div>
      </SubmissionsWrapper>
    )
  };