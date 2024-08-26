import logo from './logo.svg';
import React from 'react';
//import './App.css';
import AlbumFeatures from './features/Album';

function App() {


  return (
    <div className="App">
      {/* <TodoFeature /> */}
      <AlbumFeatures />
    </div>
  );
}

export default App;







// const name = 'Kien Muaha'
// const age = 18;
// const isFemale = true;
// const student = {
//   name: 'Kien 1'
// };

// const colorlst = ['red', 'green', 'blue'];

// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hoafng Trung Kieen
//         </p>
//         <p>Sin chrào {name} - {age} {isFemale ? 'Female' : 'Male'} {null} {undefined}</p>

//         {isFemale ? <p>Female</p> : <p>Male</p>}

//         {/* nếu là Female thì render ra thẻ <p> này */}
//         {isFemale && <p>Female</p>}
//         {/* còn không thì ra thẻ <p> này */}
//         {!isFemale && <p>Male</p>}

//         {/* điều kiện chỉ có thể render ra 1 biến cha mà thôi */}


//         {/* render nhiều biến cho 1 điều kiện */}
//         {isFemale && (
//           <div>
//             <p>Female1</p>
//             <p>Female2</p>
//             <p>Female3</p>
//           </div>
//         )}


//         {isFemale && (
//           <React.Fragment>
//             <p>Female4</p>
//             <p>Female5</p>
//             <p>Female6</p>
//           </React.Fragment>
//         )}


//         {isFemale && (
//           <>
//             <p>Female7</p>
//             <p>Female8</p>
//             <p>Female9</p>
//           </>
//         )}

//         {/* Object */}
//         <p>{student.name}</p>

//         {/* Mảng */}
//         <ul>
//           {colorlst.map(color => (
//             <li key={color} style={{ color }}>{color}</li>
//           ))}
//         </ul>




//       </header>