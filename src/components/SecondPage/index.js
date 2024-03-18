import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto !important;
  box-shadow: -3px -14px 45px 16px rgba(0, 0, 0, 0.1);
  background: rgb(245, 243, 242);
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const Navbar = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
Navbar.Title = styled.span`
  color: rgb(64, 107, 207);
  margin-bottom: 12px;
  font-size: 37px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;
Navbar.Text = styled.span`
  margin-left: 10px;
  color: rgb(191, 90, 164);

  font-size: 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;
Navbar.Card = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
`;
Navbar.Sicel = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 30px;

  align-items: center;
  text-align: center;
  background-color: rgb(114, 135, 184);
  color: white;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
Menu.Text = styled.p`
  text-align: center;
  color: rgb(107, 108, 110);
  width: 70%;
  font-family: Georgia, "Times New Roman", Times, serif;
`;
export const MenuCard = styled.div`
  width: 90%;
  height: 50px;
`;
MenuCard.Text = styled.div``;
export const MenuHover = styled.div``;
MenuHover.Text = styled.label`
  width: 106%;
  display: flex;
  justify-content: center;
  color: black;
  font-size: 15px;
  font-family: Georgia, "Times New Roman", Times, serif;
`;
MenuHover.Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: rgb(114, 135, 184);
  border-radius: 2px;
`;
export const MenuHoverImg = styled.img`
  width: 100px;
  height: 50px;
`;
export const MenuFail = styled.input`
  margin-top: 15px;

`;
export const MenuBtn = styled.button`
color:pink;
margin:0 auto;
margin-top:20px;
padding:8px 110px;
`