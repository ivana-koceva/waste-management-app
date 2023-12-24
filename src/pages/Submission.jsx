import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import PageTitleComponent from "../components/PageTitleComponent";

const PageContainer = styled.div`
  padding: 0 20%;
`

const Submission = () => {
    return (
    <>
    <PageContainer className="container my-5">
      <PageTitleComponent title="Submission"></PageTitleComponent>
      </PageContainer>
    </>
    )
  };
  
export default Submission;
  