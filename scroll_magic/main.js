//https://www.udemy.com/course/figma-diseno-de-prototipos-desde-cero/
//https://scrollmagic.io/
//https://color.adobe.com/es/search?q=dark+theme&page=2
//https://www.getrepeat.io/
//https://zesnullen.world/
//https://khaby.iconmagazine.de/
//https://bluefox.studio/
//https://www.dsrvlabs.com/
//https://www.helloelva.com/capabilities/

document.addEventListener("DOMContentLoaded", function() {
    // Crea una instancia de ScrollMagic Controller
    var controller = new ScrollMagic.Controller();
  
    // Crea una nueva escena
    var scene = new ScrollMagic.Scene({
      triggerElement: "#header-wrapper", 
      triggerHook: 0.2,
      reverse: true 
    })
    .setClassToggle("#header-wrapper", "header-moved")
    .addTo(controller); 

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#header-wrapper", 
        triggerHook: 0.3,
        reverse: true 
      })
      .setClassToggle("header", "header-moved-header")
      .addTo(controller); 
  });
  

  