import { useState } from "react";
import { Container, Menu, Navbar } from ".";

function First() {
  const url =
    "https://sheet.best/api/sheets/387a5513-95cb-4b36-b513-3caee1e9c141";
  const [name, setName] = useState("");
  const [number, setNamber] = useState("");
  const [select, setSelect] = useState("");

  const getSelect = (event) => {
    setSelect(event.target.value);
    localStorage.setItem(
      "data",
      JSON.stringify({ name, number, select: event.target.value })
    );
  };

  const PostData = async() => {
    try{
      const response = await fetch(`${url}/tabs/lids`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: number,
          phone: number,
          name: name,
          status: select,
        }),
      });
      if(response.ok){
        alert("Successfully saved")
      }else{
        alert("Failed! Something went wrong")
      }
    }catch(error){
      console.log(error.message)
    }
  };
  const getData = () => {
    if (!number.length || !name.length || !select.length) {
      alert(" malumotlaringiz notug'ri kiritildi");
    } else {
      PostData();
    }
  };
  return (
    <>
      <Container>
        <Navbar>
          <Navbar.Title>Webbrain Academiya</Navbar.Title>
          <Navbar.Text>Ramazon Chegirmasi</Navbar.Text>
        </Navbar>
        <Menu>
          <Menu.Text>
            Malumotingizni tuliq kriting va qulay tarifni tanlang
          </Menu.Text>
          <Menu.BtnCard>
            <Menu.btn>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder=" Tuliq ismingiz"
              />
              <input
                type="number"
                onChange={(e) => setNamber(e.target.value)}
                placeholder=" 998-94-449-02-50"
              />
              <select onChange={getSelect}>
                <option value="tarifni tanlang">tarifni tanlang</option>
                <option value="Javascript">Javascript</option>
                <option value="React">React</option>
                <option value="Bootcamp">Bootcamp</option>
                <option value="HTML CSS">HTML & CSS</option>
              </select>
              <button
                onClick={() => {
                  getData();
                }}
              >
                Davom etish
              </button>
            </Menu.btn>
          </Menu.BtnCard>
        </Menu>
      </Container>
    </>
  );
}
export default First;
