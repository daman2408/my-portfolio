
    $(document).ready(function() {
        $('.drawer').drawer();
        $('.drawer-item').click(function() {
            $('.drawer').drawer('close');
        })
    });
    var drawer = document.getElementById('drawer-menu');
    drawer.style.position = "absolute";
    drawer.style.top = "50%";
    drawer.style.left = "50%";
    drawer.style.marginTop = -(drawer.offsetHeight / 2).toString() + 'px';
    drawer.style.marginLeft = -(drawer.offsetWidth / 2).toString() + 'px';

    var drawer = document.getElementById('drawer-menu');
    drawer.style.position = "absolute";
    drawer.style.top = "50%";
    drawer.style.left = "50%";
    drawer.style.marginTop = -(drawer.offsetHeight / 2).toString() + 'px';
    drawer.style.marginLeft = -(drawer.offsetWidth / 2).toString() + 'px';

    window.addEventListener('resize', function() {
      var windowIh = window.innerHeight.toString();
      var jum = document.getElementById("jumboId");
      jum.style.height = windowIh + "px";

      var thumbnail = (document.getElementById('techKingdomImage').offsetHeight).toString();
      var gotQ = document.getElementById('gotQ');
      gotQ.style.height = thumbnail + "px";
    })

    window.addEventListener("load", function() {
      var windowIh = window.innerHeight.toString();
      var jum = document.getElementById("jumboId");
      jum.style.height = windowIh + "px";

      var particle = document.getElementById('particles-js');
      particle.height = jum.toString() + "px";


    });

    particlesJS.load('particles-js', 'node_modules/particles.js/demo/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
