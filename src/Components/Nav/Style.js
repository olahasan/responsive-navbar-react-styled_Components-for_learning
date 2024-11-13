import styled from "styled-components";

export const All = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
`
// .all {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin: 0 30px;
// }


export const Logo = styled.div`
font-size: 30px;
font-weight: bold;

// @(min-width: 768px){
//     display:none;
// }

@media(min-width: 768px) {
    display:none;
  }
`


export const Ul = styled.ul`
list-style: none;
display: flex;

@media (max-width: 767px){
    position: absolute;
    z-index: 1;
    top: 49px;
    right: 4px;
    background-color: white;
    padding: 15px 25px 15px 0px;
  }

@media(min-width: 768px) {
    display:flex;
}
`
// ul{
//     list-style: none;
//     display: flex;
// }

export const Li = styled.li`
margin-left: 20px;
`
// li {
//     margin-left: 20px;
// }