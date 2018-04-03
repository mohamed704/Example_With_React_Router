import styled from 'styled-components';

const AppWrapper = styled.div`
   .ul{
    display: block;
    background-color: black;
    height: 4rem;
    width: 100%;
    justify-content: space-around;
    -webkit-margin-before: 0px;
    -webkit-margin-after: 0px;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
    height: -webkit-fill-available;
    width: 12rem;
   }
   .li{
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 0.2rem solid red;
    list-style-type: none;
   }
   .li:hover{
    background-color: gray;
    color: red;
    border-bottom: 0.2rem solid yellow;
   }
   .divFils{
     display: block;
     margin-right: 2rem;
     margin-top: 6rem;
   }
   .divRacine{
    display: flex;
   }
   .header{
    background-color: #d4d4d5;
    height: 6rem;
    position: fixed;
    top: 0;
    width: 100%;
   }
`;

export default AppWrapper;