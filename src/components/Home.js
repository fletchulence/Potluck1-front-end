import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  background-image: url("https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dishes_at_Potluck.jpg");
  height: 100vh;
  background-size: cover;
  margin-top: 64px;
`;

const StyledText = styled.div`
  color: #700207;
  width: 50vw;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid red; */
`;

const Home = () => {
  return (
    <StyledBackground>
      <div className='homepage-text'>
        <StyledText>
          <h1>Welcome to Potluck Planner!</h1>
          <p>A place to plan and organize a potluck with friends and family</p>
        </StyledText>
      </div>
    </StyledBackground>
  );
};

export default Home;
