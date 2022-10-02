

import { Parallax,ParallaxLayer } from '@react-spring/parallax';
import earth  from './assets/earth.png'
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import styled from 'styled-components';
import { useState } from 'react';
//partical 

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Departments from './components/Departments';
import About from './components/About';

// window.scroll(function() {
  
//   // selectors
//   var $window = window,
//       $body = 'body',
//       $panel = '.panel';
  
//   // Change 33% earlier than scroll position so colour is there when you arrive.
//   var scroll = $window.scrollTop() + ($window.height() / 3);
 
//   $panel.each(function () {
//     var $this = (this);
    
//     // if position is within range of this panel.
//     // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//     // Remember we set the scroll to 33% earlier in scroll var.
//     if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
//       // Remove all classes on body with color-
//       $body.removeClass(function (index, css) {
//         return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
//       });
       
//       // Add class of currently active div
//       $body.addClass('color-' + this.data('color'));
//     }
//   });    
  
// })
const SlideText = styled.h1`

top: 50%;
left: 60%;



background-color: white;
text-align: center;
 z-index: 1000;
 font-size: 10vw;
 width: 60%;
 color: black;
`
function App() {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  });
  console.log(screenSize);

  return (
    <div className="App">
        <Particles className="particles" style={{
      position:'absolute',
      zIndex:-1000,
    }}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: { enable: false, force: 60, smooth: 50 }
            },
            resize: true,
          },
          modes: {
            push: {quantity: 4},
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
   
        
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 0.05,
              sync: true,
              startValue: "max",
              count: 1,
              destroy: "min"
            },
            value: {
              min: 0,
              max: 0.5
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        
      }}
      />
<div>





<Parallax pages={5}  style={{
       

       
       
      }}>
<ParallaxLayer offset={0}  speed={screenSize < 800 ? 0.1 :  2} factor={0.1}><Nav/></ParallaxLayer>
      <ParallaxLayer 
      offset={0} 
      factor={2.5} 
      speed={screenSize < 800 ? 0.9 : 1}
      style={{
        backgroundImage: `url(${earth})`,
        backgroundSize: `${screenSize < 800 ? 'contain' : 'fill'}`,
        backgroundPosition: "center 50%",

     zIndex:-100
        
      }}
     />

      <ParallaxLayer
          offset={1}
          speed={1}
          factor={1}

          className='panel'
          data-color="red"
          style={{
             display:'flex',
             justifyContent:'center',
            minHeight:'100vh'




   
          }}
        >

         <Departments/>
          </ParallaxLayer>
          <ParallaxLayer 
           offset={2}
           speed={-13}
           factor={2}
           horizontal
            style={{
              backgroundColor:'white',
              borderRadius: '50%',
              textAlign:'center',
              color:'black',
              display:'flex',
              justifyContent:'space-evenly',
              alignItems:'center',
              marginTop:'-100px'


            }}
            >
          <SlideText>Lets Goo.... Register now</SlideText>
           </ParallaxLayer>

          <ParallaxLayer offset={screenSize <800 ?  3.2:2.8} factor={1.5}>
<About/>
     </ParallaxLayer>
     </Parallax>


</div>
    
    </div>
  );
}

export default App;
