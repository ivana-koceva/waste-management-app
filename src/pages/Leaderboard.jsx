import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import PageTitleComponent from "../components/PageTitleComponent";
import LeaderboardComponent from '../components/LeaderboardComponent';

const PageContainer = styled.div`
  padding: 0 20%;
`

const Leaderboard = () => {
    return (
    <>
      <PageContainer className="container my-5">
          <PageTitleComponent title="Leaderboard"></PageTitleComponent>
        <div className='my-5'>
          <LeaderboardComponent></LeaderboardComponent>
        </div>
      </PageContainer>
    </>
    )
  };
  
export default Leaderboard;
  