import React, { useEffect, useState } from "react";
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

// life cycle event
// function MyCompnent() {
//   useEffect(() => {
//     console.error("component mounted");
//     return () => {
//       console.log("component unmounted");
//     };
//   }, []);

//   return <div>Function component</div>;
// }

class MyCompnent2 extends React.Component {
  componentDidMount() {
    console.log("Mounted");
  }

  componentWillUnmount() {
    console.log("unmount");
  }
  render() {
    return <div>Hi there</div>;
  }
}

function App() {
  const [show, setShow] = useState(true);

  // useEffect(() => {
  //   setInterval(() => {
  //     setShow((r) => !r);
  //   }, 5000);
  // }, []);
  return <>{show ? <MyCompnent2 /> : <div></div>}</>;
}

export default App;
