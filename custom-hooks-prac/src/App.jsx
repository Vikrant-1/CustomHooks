import React, { useState } from "react";
import "./App.css";

// function components state based
// function MyCompnent() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Increament</button>
//     </div>
//   );
// }

// class component state based
// class MyCompnent2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={() => this.incrementCount()}>Increament</button>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <>
      <MyCompnent />
      <MyCompnent2 />
    </>
  );
}

export default App;
