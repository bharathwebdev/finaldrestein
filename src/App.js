

import { Parallax,ParallaxLayer } from '@react-spring/parallax';
import earth  from './assets/earth.png'
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';

//partical 

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

window.scroll(function() {
  
  // selectors
  var $window = window,
      $body = 'body',
      $panel = '.panel';
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = (this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + this.data('color'));
    }
  });    
  
})

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="App">

  <Particles className="particles" style={{
      position:'absolute',
      zIndex:-100,
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
     <Parallax pages={4}  style={{
      display:'flex',
      

     }}>

      <ParallaxLayer 
      offset={0} 
      factor={2.5} 
      speed={1}
      style={{
          backgroundImage: `url(${earth})`,
            backgroundSize: "fill",
            backgroundPosition: "center",
            zIndex:2,
           
           }}
      >
      <Nav/>
      <ParallaxLayer offset={0.1} speed={1} style={{
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        top:-200,
        color:'white'
      }}>
        <Main/>
      </ParallaxLayer>
      </ParallaxLayer>
      <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={10}
          className='panel'
          data-color="red"
          style={{
             display:'flex',
             justifyContent:'center',




          }}
        >
          <h1 style={{fontSize: "7rem",color:'white'}}>departments</h1>
          </ParallaxLayer>
     </Parallax>
    </div>
  );
}

export default App;
