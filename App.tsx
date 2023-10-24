
import {} from "antd";
import Ways from "./routes";
import Header from "./common/header/Header"
import { BrowserRouter, Routes } from "react-router-dom";





const AppHeader = () => {

  return(

    <>
   <Ways />
    </>
  )

}


function App () {
  return (

    <>

    
    <BrowserRouter>
    <Header />
      <Routes>
      </Routes>
    </BrowserRouter>
  

  

    </>
  )
   
}
export default AppHeader;

