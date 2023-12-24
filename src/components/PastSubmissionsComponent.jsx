import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';

const SubmissionsWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 18px;
    box-shadow: 0px 1px 3.5px 2px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 1rem;
    margin: 1rem 0;
`
const SubmissionImage = styled.img`
    width: 190px;
    border-radius: 12px;
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
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`
const SubmissionReview = styled.div`
    border-radius: 50px;
`
export default function PastSubmissionsComponent({image, title, severity, categories, location, review}) {
    return (
      <SubmissionsWrapper>
        <SubmissionImage src={image} className="col-4"></SubmissionImage>
        <SubmissionContainer className="col-7">
            <SubmissionTitle>{title}</SubmissionTitle>
            <SubmissionText>{severity}</SubmissionText>
            <SubmissionText>{categories}</SubmissionText>
            <SubmissionText>{location}</SubmissionText>
        </SubmissionContainer>
        <SubmissionReview className="col-1">{review}</SubmissionReview>
      </SubmissionsWrapper>
    )
  };