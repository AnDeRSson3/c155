// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `ring${i}`;

      //position variables
      var posX = Math.random() * 100 + (-50);      
      var posY = Math.random() * 5 + (5);
      var posZ = Math.random() * 60 + -40;

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createCoins(id, position);
    }
  },

  createCoins: function(id,position) {
    var terrainEl = document.querySelector("#terrain");
    var ringEl = document.createElement("a-entity");
    ringEl.setAttribute("gltf-model", "./assets/treasure/model.gltf");
    ringEl.setAttribute("id",id);
    ringEl.setAttribute("material","color","#ff9100");
    ringEl.setAttribute("position",position);
    ringEl.setAttribute("geometry",{ primitive: "circle",radius: 1});   
    ringEl.setAttribute("animation",{
      property:"rotation",
      to: "0 360 0",
      loop:"true",
      dur:1000
    });
    ringEl.setAttribute("static-body", {shape:"sphere",sphereRadius:2})
    ringEl.setAttribute("game-play",{
      elementId:`#${id}`,
      
    })

    terrainEl.appendChild(ringEl);
  }
});
