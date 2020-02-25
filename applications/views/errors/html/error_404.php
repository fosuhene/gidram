<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
  <title>Ghana Revenue Authority</title>

<style>
  @import url('https://fonts.googleapis.com/css?family=Eczar:800');
@import url('https://fonts.googleapis.com/css?family=Poppins:600');


body {
  font-family: "Poppins";
  height: 100vh;
  background: #121212;
  padding: 1em;
  overflow: hidden;
}

.background-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  user-select: ;
  h1 {
    position: ;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    font-family: "Eczar";
    font-size: 60vmax;
    color: #282828;
    letter-spacing: 0.025em;
    margin: 0;
    transition: 750ms ease-in-out;
  }
}

a {
  border: 2px solid #555;
  padding: 0.5em 0.8em;
  position: fixed;
  z-index: 1;
  color: #555;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: 150ms;
  svg > polyline {
    transition: 150ms;
  }
  &:hover {
    color: #333;
    background: #dadada;
    border-color:transparent;
    svg > polyline {
      stroke: #000;
    }
    + .background-wrapper > h1 {
      color: #dadada;
    }
  }
}

p {
  color: #dadada;
  font-size: calc(2em + 6vmin);
  position: relative;
  top: 10rem;
  right: 1.5rem;
  margin: 0;
  text-align: center;
  text-shadow: -1px -1px 0 #121212, 1px 1px 0 #121212, -1px 1px 0 #121212, 1px -1px 0 #121212;
  @media screen and (min-width: 340px) {
    width: 70%;
  }
  @media screen and (min-width: 560px) {
    width: 50%;
  }
  @media screen and (min-width: 940px) {
    width: 80%;
  }
  @media screen and (min-width: 1300px) {
    width: 70%;
  }}

</style>

</head>

<body>
  <!-- **********************************************************************************************************************************************************
      MAIN CONTENT
      *********************************************************************************************************************************************************** -->
  <a href="#">
 <svg height="0.8em" width="0.8em" viewBox="0 0 2 1" preserveAspectRatio="none">
  <polyline
        fill="none"
        stroke="#777777"
        stroke-width="0.1"
        points="0.9,0.1 0.1,0.5 0.9,0.9"
  />
   <!-- <p>The page you’re looking for does not exist.</p> -->
</svg>

 <a href=""></a>
</a>

<div class="background-wrapper">
  <p>Oops!! The page you’re looking for does not exist.</p>
  <!-- <p id="visual">404</p> -->
</div>


  <!-- js placed at the end of the document so the pages load faster -->
  <script >
    const visual = document.getElementById("visual")
const events = ['resize', 'load']

events.forEach(function(e){
  window.addEventListener(e, function(){
    const width = window.innerWidth
    const height = window.innerHeight
    const ratio = 45 / (width / height)
    visual.style.transform = "translate(-50%, -50%) rotate(-" + ratio + "deg)"
  });
});
  </script>
 <!--  <script src="lib/bootstrap/js/bootstrap.min.js"></script> -->
</body>

</html>
