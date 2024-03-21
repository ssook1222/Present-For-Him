import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './view/Main/Main.jsx';

import Ending1 from './view/Ending1/Ending1.jsx';
import Ending2 from './view/Ending2/Ending2.jsx';
import Ending3 from "./view/Ending3/Ending3.jsx"

import Message1 from './view/Phone/Message1.jsx';
import Message2 from './view/Phone/Message2.jsx';
import Message3 from './view/Phone/Message3.jsx';
import Message4 from './view/Phone/Message4.jsx';
import Message5 from './view/Phone/Message5.jsx';

import Omokgyo from './view/Omokgyo/Omokgyo.jsx';
import Ghm from './view/GHM/Ghm.jsx';
import Yyd from './view/Yyd/Yyd.jsx';

import HDepartment from './view/Omokgyo/HDepartment.jsx';
import Sotdon from './view/Omokgyo/Sotdon.jsx';

import Square from './view/GHM/Square.jsx';
import West from './view/GHM/West.jsx';

import Ship from './view/Yyd/Ship.jsx';
import Duck from './view/Yyd/duck.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} > </Route>

        <Route exact path="/ending1" element={<Ending1 />} > </Route>
        <Route exact path="/ed2" element={<Ending2 />} > </Route>
        <Route exact path="/end3" element={<Ending3 />} > </Route>

        <Route exact path="/msg1" element={<Message1 />} > </Route>
        <Route exact path="/msg2" element={<Message2 />} > </Route>
        <Route exact path="/msg3" element={<Message3 />} > </Route>
        <Route exact path="/msg4" element={<Message4 />} > </Route>
        <Route exact path="/msg5" element={<Message5 />} > </Route>

        <Route exact path="/omokgyo" element={<Omokgyo />} > </Route>
        <Route exact path="/Hdepartment" element={<HDepartment />}> </Route>
        <Route exact path="/Sotdon" element={<Sotdon />}> </Route>

        <Route exact path="/Ghm" element={<Ghm />} > </Route>
        <Route exact path="/Square" element={<Square />} > </Route>
        <Route exact path="/West" element={<West />} > </Route>

        <Route exact path="/Yyd" element={<Yyd />} > </Route>
        <Route exact path="/Duck" element={<Duck />} > </Route>
        <Route exact path="/Ship" element={<Ship />} > </Route>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
