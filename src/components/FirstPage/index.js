import styled from "styled-components"


export const Container = styled.div`
margin:0 auto !important;
box-shadow: -3px -14px 45px 16px rgba(0,0,0,0.1);
background:rgb(245, 243, 242);
width:100%;
height:100%;
border-radius:10px;
`
export const Navbar = styled.div`
padding:20px;
display:flex;
flex-direction:column;
align-items:center;

`
Navbar.Title=styled.span`

color:rgb(64, 107, 207);
margin-bottom:12px;
font-size:37px;
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
Navbar.Card =styled.div`
display:flex;
gap:20px;
`
Navbar.Sicel=styled.span`
width:50px;
height:50px;
border-radius:50%;
font-size:30px;

align-items:center;
text-align:center;
background-color:rgb(114, 135, 184);
color:white;
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
export const Menu = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`
 Menu.Text=styled.p`
 text-align:center;
 color:rgb(107, 108, 110);
 width:70%;
 font-family:Georgia, 'Times New Roman', Times, serif
 
 `
 Menu.BtnCard=styled.div`
 display:flex;
 flex-direction:column;
 row-gap:10px;
 `
 export const MenuInput = styled.input`
 /* box-shadow: -3px -14px 45px 0px rgba(0,0,0,0.1); */
 border-radius:10px;
 border-top:3px solid rgb(227, 223, 222);
 border-left:3px solid rgb(227, 223, 222);
 border-bottom:2px solid white;
 border-right:2px solid white;
 
 padding:8px
 `
 export const MenuSelect = styled.select`
 /* box-shadow: -3px -14px 45px 0px rgba(0,0,0,0.1); */
 border-radius:10px;
 border-top:3px solid rgb(227, 223, 222);
 border-left:3px solid rgb(227, 223, 222);
 border-bottom:2px solid white;
 border-right:2px solid white;
 
 padding:8px`

 export const MenuBtn=styled.button`
 margin-top:15px;
 color:rgb(107, 108, 110);
 padding:8px 110px;
 
 
 `

 