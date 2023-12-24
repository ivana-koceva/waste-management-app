import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import MapComponent from "./MapComponent";

const SubmissionsWrapper = styled.form`
    background: #FFFFFF;
    box-shadow: 0px 1px 3.5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 42px;
    padding: 1.5rem 2rem;

    @media (max-width: 991px) {
        padding: 1rem 1.5rem;
    }
`
const SubmissionImage = styled.input`
`
const SubmissionTitle = styled.label`
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`
const SubmitButton = styled.button`
    background: #2B8500;
    border-radius: 50px;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    padding: 0.5rem 1.5rem;
    border: none;
`
const CategoryLabel = styled.label`
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    padding: 1rem;
`
const SeverityButton = styled.input`
    background: #F1F1F1;
    border-radius: 50px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #1D1D1D;
    margin: 5px;
    border: none;
    padding: 1rem 1.5rem;
    
    &:active {
        background: #2B8500; 
        color: #FFFFFF;
    }
    @media (max-width: 991px) {
        padding: 1rem;
        font-size: 12px;
    }

    @media (max-width: 767px) {
        padding: 1rem;
        font-size: 12px;
    }

`
export default function SubmissionFormComponent({image, map}) {
    return (
      <SubmissionsWrapper>
        <div>
            <SubmissionTitle className="my-2">Image</SubmissionTitle><br/>
            <SubmissionImage type="file"></SubmissionImage>
        </div>
        <div className="my-5">
            <SubmissionTitle className="my-2">Severity</SubmissionTitle>
            <div className="container">
                <div className="row">
                    <SeverityButton type="button" value="Not Severe" className="col-xl-3 col-5"/>
                    <SeverityButton type="button" value="Mildly Severe" className="col-xl-3 col-5"/>
                    <SeverityButton type="button" value="Severe" className="col-xl-3 col-5"/>
                    <SeverityButton type="button" value="Landfill" className="col-xl-3 col-5"/>
                </div>
            </div>
        </div>
        <div className="my-5">
            <SubmissionTitle className="my-2">Category</SubmissionTitle>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-6">
                        <input type="checkbox" id="plastic" name="plastic" value="Plastic"/>
                        <CategoryLabel for="plastic">Plastic</CategoryLabel>
                    </div>
                    <div  className="col-xl-3 col-6">
                        <input type="checkbox" id="paper" name="paper" value="Paper"/>
                        <CategoryLabel for="paper">Paper</CategoryLabel>
                    </div>
                    <div className="col-xl-3 col-6">
                        <input type="checkbox" id="glass" name="glass" value="Glass"/>
                        <CategoryLabel for="glass">Glass</CategoryLabel>
                    </div>
                    <div className="col-xl-3 col-6">
                        <input type="checkbox" id="metal" name="metal" value="Metal"/>
                        <CategoryLabel for="metal">Metal</CategoryLabel>
                    </div>
                </div>
            </div>
        </div>
        <div className="my-5">
            <SubmissionTitle className="my-2">Pin Location</SubmissionTitle>
            <MapComponent></MapComponent>
        </div>
        
        <div className="text-end">
            <SubmitButton type="submit">Submit</SubmitButton>
        </div>
      </SubmissionsWrapper>
    )
  };