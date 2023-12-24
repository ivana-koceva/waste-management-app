import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import PageTitleComponent from "../components/PageTitleComponent";

const PageContainer = styled.div`
  padding: 0 20%;

  @media (max-width: 991px) {
    padding: 0 10%;
  }
`

const Login = () => {
    return (
      <>
    <PageContainer className="container my-5">
        <PageTitleComponent title="Login"></PageTitleComponent>
    </PageContainer>
    </>
    )
  };
  
export default Login;
  