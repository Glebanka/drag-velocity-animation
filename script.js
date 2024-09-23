
Draggable.create('.green-box', {
  handle: '.handle',
  onDrag: function(e) {
    console.log(e);
    if(e.movementX > 0){
      gsap.timeline()
      .to('.green-box', {rotate: e.movementX*2, duration: 0.5}, 0)
    } else {
      gsap.timeline()
      .to('.green-box', {rotate: e.movementX*2, duration: 0.5}, 0)
    }
  },
  onDragEnd: function(e) {
      gsap.timeline()
      .to('.green-box', {duration:1, rotate: 0, ease: "elastic.out(1.2,0.3)"}, 0)
    }
    
})
gsap.timeline()
