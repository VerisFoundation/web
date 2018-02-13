import React from 'react'
import styled from 'styled-components'
import Container from '../components/container'
import Button from '../components/button'
import Navigation from '../components/navigation'
import heroBG from '../images/img_herobg@2x.png'

const Hero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${heroBG});
  background-size: cover;
  color: white;
  clip-path: ellipse(150% 50% at 50% 47%);
  min-height: 100vh;
`

const Section = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex: 1;

  aside {
    max-width: 600px;
  }
`

const Countdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  min-width: 320px;
  border: thin solid hsla(0, 100%, 100%, 0.42);
  background-color: hsla(0, 100%, 100%, 0.10);

  h2 {
    border-bottom: 0.1rem solid hsla(0, 100%, 100%, 0.42);
    padding: 1rem;
    margin: 0 0 1rem 0;
  }

  time {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }
`

const HeroButton = Button.extend`
  background-color: transparent;
  border: 0.1rem solid #278CD6;

  span {
    color: #278CD6;
    padding-left: 1rem;
  }
`

export default () => (
  <Hero>
    <Navigation />
    <Section>
      <aside>
        <h1>
          Blockchain built for the
          <br />
          American Healthcare System
        </h1>
        <p>
          The Veris Foundation is focused on directly connecting payers with providers, reducing yearly healthcare
          expenses by up to $59B, ultimately lowering healthcare costs for patients.
        </p>
        <HeroButton>
          Watch the Video
          <span>&#9654;</span>
        </HeroButton>
      </aside>
      <Countdown>
        <h2>VRS Presale</h2>
        <time>20:40:40:30</time>
        <Button>Learn More</Button>
      </Countdown>
    </Section>
  </Hero>
)