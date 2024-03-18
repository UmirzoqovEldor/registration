import { useState } from "react";
import {
  Container,
  Menu,
  MenuBtn,
  MenuCard,
  MenuFail,
  MenuHover,
  MenuHoverImg,
  Navbar,
} from ".";
import img from "../../assets/img/plastk-carta.png";

function Second() {
  //   const url =
  //     "https://sheet.best/api/sheets/387a5513-95cb-4b36-b513-3caee1e9c141";
  //   const [name, setName] = useState("");
  //   const [number, setNamber] = useState("");
  //   const [select, setSelect] = useState("");

  //   const getSelect = (event) => {
  //     setSelect(event.target.value);
  //     localStorage.setItem(
  //       "data",
  //       JSON.stringify({ name, number, select: event.target.value })
  //     );
  //   };

  //   const PostData = async() => {
  //     try{
  //       const response = await fetch(`${url}/tabs/lids`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           id: number,
  //           phone: number,
  //           name: name,
  //           status: select,
  //         }),
  //       });
  //       if(response.ok){
  //         alert("Successfully saved")
  //       }else{
  //         alert("Failed! Something went wrong")
  //       }
  //     }catch(error){
  //       alert(error.message)
  //     }
  //   };
  //   const getData = () => {
  //     if (!number.length || !name.length || !select.length) {
  //       alert(" malumotlaringiz notug'ri kiritildi");
  //     } else {
  //       PostData();
  //     }
  //   };
  return (
    <>
      <Container>
        <Navbar>
          <Navbar.Title>Webbrain Academiya</Navbar.Title>
          <div>
            <Navbar.Text>Tanlangan yunalish:</Navbar.Text>
            <Navbar.Text>React</Navbar.Text>
          </div>
          <Navbar.Text>579,999 ming sum</Navbar.Text>
          <Navbar.Card>
            <Navbar.Sicel>1</Navbar.Sicel>
            <Navbar.Sicel>2</Navbar.Sicel>
            <Navbar.Sicel>3</Navbar.Sicel>
          </Navbar.Card>
        </Navbar>
        <Menu>
          <Menu.Text>
            To'lovingizni amlga oshrib ,tulov chekni "skren qilib" saytga
            yuklang
          </Menu.Text>
          <MenuCard>
            <MenuCard.Text>Bank karta orqali to'lov</MenuCard.Text>
            <MenuHover>
              <MenuHover.Text>597.000 ming so'm</MenuHover.Text>
              <MenuHover.Card>
                <div>
                  <MenuHover.Text>8600 5614 6326 4567</MenuHover.Text>
                  <MenuHover.Text>Umirzoqov Eldor</MenuHover.Text>
                </div>
                <div>
                  <MenuHoverImg src={img}></MenuHoverImg>
                </div>
              </MenuHover.Card>
            </MenuHover>
            <MenuHover.Text  >chekni yuklang</MenuHover.Text>
            <MenuFail  type="file"></MenuFail>
            <div>
          <MenuBtn>Tayyor</MenuBtn>
          </div>
          </MenuCard>
          
        </Menu>
        
      </Container>
    </>
  );
}
export default Second;
