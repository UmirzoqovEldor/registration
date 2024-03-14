import styled from "styled-components"


export const Container = styled.div`
margin:0 auto !important;
box-shadow: -17px 11px 15px 0px rgba(0,0,0,0.1);
background:rgb(245, 243, 242);
width:100%;
height:100%;

`
export const Navbar = styled.div`
padding:20px;
display:flex;
flex-direction:column;
/* align-items:center; */

`
Navbar.Title=styled.span`
align-items:start;
color:rgb(64, 107, 207);
margin-bottom:12px;
font-size:20px;
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
Navbar.Text=styled.span`
font-size:20px;
padding:4px;
margin:0 auto;
background-color:rgb(114, 135, 184);
color:rgb(9, 35, 94);
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
border-top-right-radius:5px;
border-bottom-left-radius:5px
`
export const Menu = styled.div`
display:flex;
flex-direction:column;
align-items:start;
margin-top:30px`
 Menu.Text=styled.p`
 color:rgb(107, 108, 110);
 width:50%;
 padding:20px;
 `
 Menu.BtnCard=styled.div`
 `
 Menu.btn=styled.div`
 margin-left:20px;
 color:rgb(107, 108, 110);
 padding:5px 110px;
 
 align-items:start
 `

 /* const BaseUrl = 'https://sheet.best/api/sheets/6114b434-52e1-4adf-b147-59da0a290b3f'


const Index = (index) => {
    const [title,setName] = useState('');
    const [number,setNumber] = useState('');
    const [selecte, setSelect] = useState('Javascript');
    const onSelect = (e) => {
    setSelect(e.target.value)
    localStorage.setItem('data', JSON.stringify({title, number, selecte: e.target.value}))
    }
    const PostTarif = (body) => {
        if (selecte.length) {
            fetch(${BaseUrl}/tabs/${selecte}, {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json',
                },
                body: JSON.stringify(body)
            })
        }
    }
    const PostData = () => {
        const date = new Date();
        const body = {
            id: number,
            name: title,
            status: selecte,
            phone: number,
            language: navigator?.language,
            time: ${date.getHours()}:${date.getMinutes()}: ${date.getMilliseconds()},
        }
        fetch(${BaseUrl}/tabs/ALL, {
            method: 'POST', 
            headers : {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(() => PostTarif(body))
    }

    const CLickButton = () => {
        if (!number.length  !title.length  !selecte.length) {
            alert(Qaysidur malumot notug'ri kiritildi);
        }
        else {
            PostData()
        }
    } */

 