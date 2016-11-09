  var totalslides=2;      
      
  AFRAME.registerComponent('slides', {
        // could add the number of slides as parameters or better count them automatically
      init: function () {
        var interface = document.createElement("a-entity");
        var counter = document.createElement("a-entity");
        counter.setAttribute("id","counter");
        counter.setAttribute("counter","1");
        counter.setAttribute("scale","0.2 0.2 0.");
        counter.setAttribute("text","text: (Slide 1/"+totalslides+")");
        counter.setAttribute("position","2 0 1");
        counter.setAttribute("material","color: black");
        document.querySelector('a-scene').appendChild(counter);
        var arrowLeft = document.createElement("a-cone");
        arrowLeft.setAttribute("id","LookLeft");
        arrowLeft.setAttribute("position","-1 -2 3");
        arrowLeft.setAttribute("radius-bottom","1");
        arrowLeft.setAttribute("radius-top","0.1");
        arrowLeft.setAttribute("color","black");
        arrowLeft.setAttribute("rotation","90 -90 0");
        arrowLeft.setAttribute("event-set__1","_event: mouseenter; material.color: red; scale:1.5 1.5 1.5;");
        arrowLeft.setAttribute("event-set__2","_event: mouseleave; material.color: black; scale:1 1 1;");
        // no effect
        arrowLeft.addEventListener('mouseenter', function() {
          //console.log('LookLeft object looked at');
          document.querySelector('a-scene').emit('keydown:ArrowLeft');
        });
        interface.appendChild(arrowLeft);
        var arrowRight = document.createElement("a-cone");
        arrowRight.setAttribute("id","LookRight");
        arrowRight.setAttribute("position"," 1 -2 3");
        arrowRight.setAttribute("radius-bottom","1");
        arrowRight.setAttribute("radius-top","0.1");
        arrowRight.setAttribute("color","black");
        arrowRight.setAttribute("rotation","90 90 0");
        arrowRight.setAttribute("event-set__1","_event: mouseenter; material.color: red; scale:1.5 1.5 1.5;");
        arrowRight.setAttribute("event-set__2","_event: mouseleave; material.color: black; scale:1 1 1;");
        // no effect
        arrowRight.addEventListener('mouseenter', function() {
          //console.log('LookRight object looked at');
          document.querySelector('a-scene').emit('keydown:ArrowRight');
        });
        interface.appendChild(arrowRight);
        document.querySelector('a-scene').appendChild(interface);
        
    this.el.addEventListener('keydown:ArrowRight', function () {
        var counter = this.el.querySelector('#counter').getAttribute('counter');
        counter++;
        this.el.querySelector('#counter').setAttribute('text', 'text: (slide '+counter+'/'+totalslides+')');
        this.el.querySelector('#counter').setAttribute('counter', counter);
        var x = this.el.querySelectorAll('.slide'+counter);
        for(var index=0; index < x.length; index++ ) { x[index].setAttribute('visible', true);  }
        // show the current slide, hide the previous one
        var x = this.el.querySelectorAll('.slide'+(counter-1));
        for(var index=0; index < x.length; index++ ) { x[index].setAttribute('visible', false);  }

        //document.querySelector('#camera').emit('slide'+counter);
        //document.querySelector('#titletext').emit('slide'+counter);
        //document.querySelector('#board').emit('slide'+counter);
          
        }.bind(this));
        
    this.el.addEventListener('keydown:ArrowLeft', function () {
      var counter = this.el.querySelector('#counter').getAttribute('counter');
      counter--;
      this.el.querySelector('#counter').setAttribute('text', 'text: (slide '+counter+'/'+totalslides+')');
        this.el.querySelector('#counter').setAttribute('counter', counter);
      var x = this.el.querySelectorAll('.slide'+counter);
      for(var index=0; index < x.length; index++ ) { x[index].setAttribute('visible', true);  }
      // show the current slide, hide the next one
      var x = this.el.querySelectorAll('.slide'+(counter+1));
      for(var index=0; index < x.length; index++ ) { x[index].setAttribute('visible', false);  }

      //document.querySelector('#camera').emit('slide'+counter);
      //document.querySelector('#titletext').emit('slide'+counter);
      //document.querySelector('#board').emit('slide'+counter);
   
      }.bind(this));
        
       } // end of init
    
    }) // component registered
