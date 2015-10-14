$(function() {

// This function flips the button in the blue box
document.getElementById('flipMe').onclick = function() {
    snabbt(document.getElementById('flipMe'), {
      position: [0, 0, 0],
      rotation: [0, 0, Math.PI],
      easing: 'ease'
    });
  };

// This function adds the attention animation to the button in the tan box
document.getElementById('chainButton').onclick = function() {
    snabbt(document.getElementById('chainButton'), {
      position: [0, 0, 0],
      rotation: [0, 0, Math.PI],
      easing: 'ease'
    }).snabbt({
      position: [0, 0, 0],
      rotation: [0,Math.PI, 0],
        easing: 'ease'
    });
};


// This is the transform function where you can change the default axis of where the rotation occurs. Not working.
document.getElementById('transformButton').onclick = function() {
    snabbt(document.getElementById('transformButton'), {
    rotation: [0, 2*Math.PI, 0],
    transformOrigin: [document.getElementById('transformButton').clientWidth/2, 0, 0]
  });
};



});