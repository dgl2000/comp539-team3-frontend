// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// import Main from "./components/main"

// function App() {
//   return (
//     <div className="App">
//       <Main />
//     </div>
//   );
// }

// export default App;


import Main from "./components/main/main"
import TopUrlTable from "./components/topUrlTable/topUrlTable";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/login/login";
function App() {
  // return (
  // <div className="App">
  //   <Main />
  //   <TopUrlTable />
  // </div>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/mainPage" element=
          {<div className="App">
            <Main />

          </div>} />
        <Route path="/dashboard" element={<TopUrlTable />} />
        <Route path="/login" element={<LoginForm />} />


        {/* </Route> */}
      </Routes>
    </BrowserRouter>

  );

}

export default App;





