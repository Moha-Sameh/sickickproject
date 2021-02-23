import styled from "styled-components";

const About = () => {
  return (
    <>
      <StyledAbout>
        <div>
          <h1>The Sickness</h1>
        </div>
        <div>
          <h3>Sickick is a new breed of artist.</h3>
        </div>
        <div>
          <p>
            The independent, masked producer, vocalist, and songwriter has come
            a long way since he first arrived on the music scene, achieving over
            100 million total views worldwide. His musical style known as
            SickHop draws from influences in trap, bass, reggaeton, electro and
            R&B. This blend of musical genres creates an atmospheric,
            otherworldly auditory experience that so many fans have come to
            adore.
          </p>
        </div>
        <div>
          <p>
            Despite his musical talent, the idea of fame and crowds once stirred
            fear within Sickick. The iconic mask became a physical
            representation for fear and allowed him to befriend his demons.
            Sickick uses his newfound confidence as a way to inspire his fans,
            known as the Sickick Army, to pursue their dreams and face their
            fears. With his increasingly populated touring calendar, Sickick
            continues to spread his message around the world:
          </p>
        </div>
        <StyledFooter>
          Everyone has a dark side, find the beauty in yours.
        </StyledFooter>
      </StyledAbout>
    </>
  );
};

const StyledAbout = styled.div`
  margin: 5rem;
  padding: 2rem;
  font-size: 2rem;
  color: white;
`;

const StyledFooter = styled.footer`
  position: fixed;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 60px;
`;

export default About;
