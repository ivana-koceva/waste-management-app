import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import PageTitleComponent from "../components/PageTitleComponent";
import LeaderboardComponent from '../components/LeaderboardComponent';
import Person from '../images/person.png';
import FeedPost from '../images/feedpost.png';

const PageContainer = styled.div`
  padding: 0 20%;

  @media (max-width: 991px) {
    padding: 0 10%;
  }
`

const Leaderboard = () => {
    return (
    <>
      <PageContainer className="container my-5">
          <PageTitleComponent title="Leaderboard"></PageTitleComponent>
        <div className='my-5'>
          <LeaderboardComponent 
          place="1"
          profileImage={Person}
          name="Tatjana Filipovska"
          points="1567 XP"
          ></LeaderboardComponent>
        </div>
      </PageContainer>
    </>
    )
  };
  
export default Leaderboard;
  