import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronRight, faCheck } from '@fortawesome/fontawesome-pro-regular'
import Container from './Container'
import Button from './Button'
import SectionHeader from './sectionHeader'

const About = styled.div`
  h3 {
    font-size: 2rem;
  }
`

const OverviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0f3552;

  &:before {
    background: #fff;
    height: 100%;
    clip-path: ellipse(150% 50% at 50% -10%);
    width: 100%;
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
  }
`

const Overview = styled.div`
  align-self: center;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0 0.5rem hsla(0, 0%, 0%, 0.12);
  padding: 3rem 4rem 2rem;
  margin: 1rem;
  max-width: 800px;
  z-index: 2;

  ul {
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  li {
    flex: 1 0 calc(50% - 2rem);
    display: flex;
    margin: 1rem;
  }

  li span {
    margin-right: 0.5rem;
    color: #278cd6;
  }
`

const Meet = styled.p`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  margin: 1rem auto 0;

  a:link,
  a:visited {
    color: #278cd6;
    text-decoration: none;
  }

  span {
    margin-left: 0.5rem;
  }
`

const Blogs = styled.div`
  padding-top: 6rem;
  background-color: #0f3552;
  color: #fff;
  text-align: center;
  font-size: 0.8rem;

  img {
    width: 100%;
  }

  h3 {
    font-size: 2.4rem;
  }

  ul {
    list-style: none;
    margin: 0;
    display: flex;
  }

  li {
    padding: 2rem;
    text-align: left;
  }

  li + li {
    border-left: thin solid #d8d8d9;
  }

  a:link,
  a:visited {
    color: white;
  }
`

const MoreButton = styled(Button)`
  padding: 1rem 2rem;
  margin: 6rem auto;
`

export default () => (
  <About>
    <Container>
      <SectionHeader>About Us</SectionHeader>
      <h3>Our Mission</h3>
      <p>
        Veris aims to Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
        elit. Nulla vitae elit libero, a pharetra augue.
      </p>
    </Container>
    <OverviewWrapper>
      <Overview>
        <h3>Company Overview</h3>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Governed by a non-profit entity to ensure direction of company moves in the right direction.
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Cras mattis consectetur
            purus sit amet.
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Cras mattis consectetur
            purus sit amet.
          </li>
          <li>
            <span>
              {' '}
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </li>
        </ul>
        <Meet>
          <Link to="/team">
            Meet our Team
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </Link>
        </Meet>
      </Overview>
    </OverviewWrapper>
    <Blogs>
      <Container>
        <h3>Latest Blog Articles</h3>
        <ul>
          <li>
            <img src="https://cdn-images-1.medium.com/max/1600/1*S7EJHf1InOWv64hWuNBICA.jpeg" />
            <h4>
              <a href="https://medium.com/verisfoundation/one-example-of-rising-costs-in-the-us-healthcare-system-an-executive-view-62feef15c98f">
                One Example of Why US Healthcare Costs are Rising — An Executive’s View
              </a>
            </h4>
            <p>
              As healthcare costs continue to increase there is an ever growing battle going on between healthcare
              providers and insurers.
            </p>
          </li>
          <li>
            <img src="https://cdn-images-1.medium.com/max/1600/1*S7EJHf1InOWv64hWuNBICA.jpeg" />
            <h4>
              <a href="https://medium.com/verisfoundation/one-example-of-rising-costs-in-the-us-healthcare-system-an-executive-view-62feef15c98f">
                One Example of Why US Healthcare Costs are Rising — An Executive’s View
              </a>
            </h4>
            <p>
              As healthcare costs continue to increase there is an ever growing battle going on between healthcare
              providers and insurers.
            </p>
          </li>
          <li>
            <img src="https://cdn-images-1.medium.com/max/1600/1*S7EJHf1InOWv64hWuNBICA.jpeg" />
            <h4>
              <a href="https://medium.com/verisfoundation/one-example-of-rising-costs-in-the-us-healthcare-system-an-executive-view-62feef15c98f">
                One Example of Why US Healthcare Costs are Rising — An Executive’s View
              </a>
            </h4>
            <p>
              As healthcare costs continue to increase there is an ever growing battle going on between healthcare
              providers and insurers.
            </p>
          </li>
        </ul>
        <MoreButton>Read More</MoreButton>
      </Container>
    </Blogs>
  </About>
)
