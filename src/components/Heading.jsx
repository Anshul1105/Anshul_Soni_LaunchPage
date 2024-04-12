import React from 'react';
import styles from "./Heading.module.css";
import rocketImage from "../assets/rocket_animation/rocket_1.png"; // Adjust the image path

// import RocketIconSVG from './RocketIconSVG';

const Heading = () => {
  return (
    <div>
      {/* <div class={styles.header-container}> */}
        {/* <img src="../assets/rocket_animation/rocket_1.png" alt="Rocket" class={styles.logo}></img> */}
          <h1 className={styles.h1}>Launching New Module Soon!</h1>
      
      <p>Exciting things are in the works! We're currently <b>Crafting a new feature</b> for you.
        <br></br>Keep an eye out for updates — We're working to make it available soon!</p>
    </div>
  );
};

// Export the Heading component
export default Heading;