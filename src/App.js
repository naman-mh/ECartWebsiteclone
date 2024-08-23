import { useEffect, useState } from 'react';
import Mover from './component/Mover';
import Api from './component/Api';
import ProductCard from './component/ProducCard';
import AddCart from './component/AddCart';




function App() {
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  //   useEffect(()=>{
  //     function handleMove(e) {
  //       setPosition({ x: e.clientX, y: e.clientY });
  //     }
  //     window.addEventListener('pointermove', handleMove);
  //     return () => {
  //       window.removeEventListener('pointermove', handleMove);
  //     };
  //   }, []);
  
  //   return (
  //     <>
  //     <div style={{
  //       position: 'absolute',
  //       backgroundColor: 'blue',
  //       borderRadius: '50%',
  //       opacity: 0.6,
  //       transform: `translate(${position.x}px, ${position.y}px)`,
  //       pointerEvents: 'none',
  //       left: -20,
  //       top: -20,
  //       width: 40,
  //       height: 40,
  //     }}>

      
  //     </div>
  return(

 
  <><div>HI</div>
      {/* <Mover/> */}
      {/* <Api/> */}
      <AddCart/>
      </>
     );
}

export default App;
