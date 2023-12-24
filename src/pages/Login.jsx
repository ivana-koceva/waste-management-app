import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import PageTitleComponent from "../components/PageTitleComponent";

const PageContainer = styled.div`
  padding: 0 20%;
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
  