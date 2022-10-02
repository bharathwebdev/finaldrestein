import React from 'react'
import styled from 'styled-components';
const DepartmentHeader = styled.h1`
    font-size: 10vw;

    color: white;
    text-align: center;
    margin-bottom: 1rem;
    cursor: pointer;
    /* &:hover ,:focus{
    background-color: red;

} */
`;
function About() {
  return (
    <DepartmentHeader>About</DepartmentHeader>
  )
}

export default About