import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import PageTitleComponent from "../components/PageTitleComponent";
import FeedPostComponent from '../components/FeedPostComponent';

const PageContainer = styled.div`
  padding: 0 20%;
`

const Feed = () => {
    return (
    <>
      <PageContainer className='container my-5'>
          <PageTitleComponent title="Feed"></PageTitleComponent>
          <div className="my-5">
            <FeedPostComponent></FeedPostComponent>
          </div>
      </PageContainer>
    </>
    )
  };
  
export default Feed;
  