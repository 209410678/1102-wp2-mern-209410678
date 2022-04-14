import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//import Landing_78 from "./pages/Landing_78";
import { Landing_78, Dashboard_78, Register_78, Error_78 } from './pages';
import styled from 'styled-components';

function App_78(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard_78 />} />
            <Route path='landing' element={<Landing_78 />} />
            <Route path='register' element={<Register_78 />} />
            <Route path='*' element={<Error_78 />} />
        </Routes>
        {/* <Landing_78 /> */}
        </BrowserRouter>
    )
}

export default App_78;