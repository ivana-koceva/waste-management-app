import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import PageTitleComponent from "../components/PageTitleComponent";
import PastSubmissionsComponent from '../components/PastSubmissionsComponent';
import Person from '../images/person.png';
import FeedPost from '../images/feedpost.png';
import Waste from '../images/glasswaste.png';

const PageContainer = styled.div`
  padding: 0 20%;

  @media (max-width: 991px) {
    padding: 0 10%;
  }
`

const Profile = () => {
    return (
    <>
      <PageContainer className="container my-5">
          <PageTitleComponent title="Profile"></PageTitleComponent>
          <div className='my-5'>
            <PastSubmissionsComponent
            image={Waste}
            title="Submission #1"
            severity="Mildly Severe"
            categories="Glass, Metal"
            location="ul. Primer 123"
            review="Reviewed"
            ></PastSubmissionsComponent>
          </div>
      </PageContainer>
    </>
    )
  };
  
export default Profile;
  