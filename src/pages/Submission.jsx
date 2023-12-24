import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import PageTitleComponent from "../components/PageTitleComponent";
import SubmissionFormComponent from '../components/SubmissionFormComponent';

const PageContainer = styled.div`
  padding: 0 20%;
  
  @media (max-width: 991px) {
    padding: 0 10%;
  }
`

const Submission = () => {
    return (
    <>
    <PageContainer className="container my-5">
      <PageTitleComponent title="Submission"></PageTitleComponent>
      <div className='my-5'>
        <SubmissionFormComponent></SubmissionFormComponent>
      </div>
      </PageContainer>
    </>
    )
  };
  
export default Submission;
  