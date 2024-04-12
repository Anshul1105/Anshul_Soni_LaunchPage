
const ShinyText = () =>{
    return <>
        
        <div className="shinyText"><h1>GET READY FOR THE REVEAL!</h1></div>
    </>

}
export default ShinyText;


// import React, { useEffect, useRef } from 'react';
// import styles from './ShinyText.module.css';
// import SVG1 from '../assets/Shiny_Text/text1.svg';
// import SVG2 from '../assets/Shiny_Text/text2.svg';
// import SVG3 from '../assets/Shiny_Text/text3.svg';
// import SVG4 from '../assets/Shiny_Text/text4.svg';

// const ShinyText = () => {
//   const animationStart = useRef(0);
//   const animationTimer = useRef(null);

//   useEffect(() => {
//     const handleAnimation = () => {
//       if (animationStart.current < 3) {
//         animationStart.current++;
//         animationTimer.current = setTimeout(() => {
//           handleAnimation();
//         }, animationStart.current === 0? 300 : 1);
//       }
//     };

//     handleAnimation();

//     return () => {
//       clearTimeout(animationTimer.current);
//     };
//   }, []);

//   return (
//     <div className="svg-container">
//       <div className="svg-wrapper">
//         {animationStart.current === 0 && (
//           <img src={SVG1} alt="SVG1" className={styles[animationStart.current === 0? 'show' : '']} />
//         )}
//         {animationStart.current === 1 && (
//           <img src={SVG2} alt="SVG2" className={styles[animationStart.current === 1? 'show' : '']} />
//         )}
//         {animationStart.current === 2 && (
//           <img src={SVG3} alt="SVG3" className={styles[animationStart.current === 2? 'show' : '']} />
//         )}
//         {animationStart.current === 3 && (
//           <img src={SVG4} alt="SVG4" className={styles[animationStart.current === 3? 'show' : '']} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShinyText;
