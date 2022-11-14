<div id="mySidebar" className="sidebar">
<a href="javascript:void(0)" className="closebtn" onclick="closeNav()"><img className="redx" src="src/images/redx.jfif"/></a>
<a href="/index.html">Home</a>
<a href="/About.html">About</a>
<a href="/Inspo.html">Inspiration</a>
<a href="/Developer.html">Developer</a>
</div>
<div id="main">
<br />
<br />
<button className="openbtn" onclick="openNav()"> <img className="imgicon" src="src/images/donuticon.png"/> </button>
</div>



<h2>Welcome to the Donut shop!</h2>
<p><br /> Today we are going to be making donuts! </p>
<p>To make donuts, click the Bake button below. One donut per click when you start.</p>
<p>As you make donuts, you can use them as currency to buy multipliers or automatic clickers.</p>
<h4> Donut Auto Clicker </h4>
<div className="flex-column">
<div className="column-item">Donut Auto Clicker </div>
<div className="column-item">
  ✽ Automatically clicks the Donut button once per second to help gain extra donuts.</div>
<div className="column-item">The Donut Multiplier</div>
<div className="column-item">
  ✽ Increases the number of donuts recieved per click of the donut button.</div>
</div>


<div className="container" >

<p id="donutsMade" name="donutsMade">Donuts: 0.00</p>


<button className="donutButton"> Bake!</button>


<section>
  <p id="autoClicker" name="autoClicker" >Donut Auto Clickers Owned: 0 <br />
  </p>
  <button className="buyAutoButton">Buy Auto Clicker</button> <br />
  <p id="priceForAuto" name="priceForAuto">Price: 100 donuts</p>
</section>

<section>
  <p id="clickMultiplier" name="clickMultiplier" >Donuts Per Click: 1</p>
  <br />
  <button className="buyclickMultiplier">Buy Donut Multiplier</button>
  <br />
  <p id="priceForMultiplier" name="priceForMultiplier"> <br /> Price: 100 donuts</p>
</section>
<br />
</div>

<button className="resetButton">Reset Game</button>