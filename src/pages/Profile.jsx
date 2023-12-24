import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import PageTitleComponent from "../components/PageTitleComponent";
import PastSubmissionsComponent from '../components/PastSubmissionsComponent';

const PageContainer = styled.div`
  padding: 0 20%;
`

const Profile = () => {
    return (
    <>
      <PageContainer className="container my-5">
          <PageTitleComponent title="Profile"></PageTitleComponent>
          <div className='my-5'>
            <PastSubmissionsComponent></PastSubmissionsComponent>
          </div>
      </PageContainer>
    </>
    )
  };
  
export default Profile;
  