import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import PageTitleComponent from "../components/PageTitleComponent";
import FeedPostComponent from '../components/FeedPostComponent';
import Person from '../images/person.png';
import FeedPost from '../images/feedpost.png';

const PageContainer = styled.div`
  padding: 0 20%;

  @media (max-width: 991px) {
    padding: 0 10%;
  }
`

const Feed = () => {
    return (
    <>
      <PageContainer className='container my-5'>
          <PageTitleComponent title="Feed"></PageTitleComponent>
          <div className="my-5">
            <FeedPostComponent 
            name="Tatjana Filipovska"
            profileImage={Person}
            feedImage={FeedPost}
            text="At the community's Earth Day celebration last month, 
            volunteers rallied together, collecting over 1,000 pounds of 
            recyclable materials in just a few hours, fostering a sense of 
            environmental stewardship and camaraderie among participants."
            ></FeedPostComponent>
          </div>
      </PageContainer>
    </>
    )
  };
  
export default Feed;
  