import { useState, useEffect, Fragment } from 'react';
import './App.css';
import './Developer.js';

export default function App() {
  
  const buyDonutBtn = document.getElementsByClassName("donutButton")[0];
  
  const buyAutoClickBtn = document.getElementsByClassName("buyAutoButton")[0];

  const buyDonutMultiplierBtn = document.getElementsByClassName("buyclickMultiplier")[0];

  const resetGameBtn = document.getElementsByClassName("resetButton")[0];

  const currentDonuts = document.getElementById("donutsMade");

  const currentAutoClickers = document.getElementById("autoClicker");

  const currentDonutMultipliers = document.getElementById("clickMultiplier");

  const currentAutoClickersPrice = document.getElementById("priceForAuto");

  const currentDonutMultipliersPrice = document.getElementById("priceForMultiplier");

  let refreshDonutCountIntervalID = setInterval(updateDonutCount, 500);

  const myDonut = new DonutShop(); 

  buyDonutBtn.addEventListener("click", function(){
    myDonut.bakeDonut();
    myDonut.spoilDonut();
    currentDonuts.innerText ="Donuts: " + myDonut.getDonutCount();
  });

  buyAutoClickBtn.addEventListener("click", function(){
    myDonut.addAutoClicker();
    currentAutoClickers.innerText ="Donut Auto Clickers Owned: " + myDonut.getAutoClickerCount();
    currentAutoClickersPrice.innerText = "Price: " + myDonut.priceForAuto + " donuts";
    myDonut.startClickerInterval();
  });

  buyDonutMultiplierBtn.addEventListener("click", function(){
    myDonut.addDonutMultiplier();
    currentDonutMultipliers.innerText ="Donuts Per Click: " + myDonut.donutsEarned;
    currentDonutMultipliersPrice.innerText = "Price: " + myDonut.priceForMultiply + " donuts";
  });

  resetGameBtn.addEventListener("click", function(){
    myDonut.resetGame();
  });


  function updateDonutCount(){
    currentDonuts.innerText ="Donuts: " + myDonut.getDonutCount();
    currentAutoClickers.innerText ="Donut Auto Clickers Owned: " + myDonut.getAutoClickerCount();
    currentAutoClickersPrice.innerText = "Price: " + myDonut.priceForAuto + " donuts";
    currentDonutMultipliers.innerText ="Donuts Per Click: " + myDonut.donutsEarned;
    currentDonutMultipliersPrice.innerText = "Price: " + myDonut.priceForMultiply + " donuts";
    checkAutoClickerBtn();
    checkMultiplierClickerBtn();
  }

  function checkAutoClickerBtn(){
    if(myDonut.donutCount >= myDonut.priceForAuto){
      buyAutoClickBtn.disabled = false;
    }else{
      buyAutoClickBtn.disabled = true;
    }
  }

  function checkMultiplierClickerBtn(){
    if(myDonut.donutCount >= myDonut.priceForMultiply){
      buyDonutMultiplierBtn.disabled = false;
    }else{
      buyDonutMultiplierBtn.disabled = true;
    }
  }
  
  
  const imgicon = document.getElementById('imgiconlink')

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px"; 
    document.getElementById("imgiconlink").style.display = "none";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";    
    document.getElementById("imgiconlink").style.display = "block"
  }

return (
    <Fragment>

    <h1> Donut Maker </h1>
  <div id="mySidebar" className="sidebar">
    <img className="closebtn redx" onClick={closeNav} src="src/images/redx.jfif" alt='red X'/>
    <a href="/app.js">Home</a>
    <a href="/About.html">About</a>
    <a href="/Inspo.html">Inspiration</a>
    <a href="/Developer.js">Developer</a>
  </div>
  <div id="main">
    <br />
    <br />
    <button className="openbtn" onclick="openNav()"> 
    <img className="imgicon" src="src/images/donuticon.png" alt='donut'/> 
    </button>
  </div>
    <h2>Welcome to the Donut shop!</h2>
    <p><br /> Today we are going to be making donuts! </p>
    <p>To make donuts, click the Bake button below. One donut per click when you start.</p>
    <p>As you make donuts, you can use them as currency to buy multipliers or automatic clickers.</p>
    <div className="flex-column">
  <div className="column-item">Donut Auto Clicker 
    </div>
    <div className="column-item">
        ✽ Automatically clicks the Donut button 
        once per second to help gain extra donuts.
    </div>
    <div className="column-item">The Donut Multiplier</div>
    <div className="column-item">
        ✽ Increases the number of donuts recieved 
        per click of the donut button.
    </div>
  </div>
  <div className="container" >
    <p id="donutsMade" name="donutsMade">Donuts: 0.00</p>
    <button className="donutButton"> Bake!</button>
    <p id="autoClicker" name="autoClicker" >Donut Auto Clickers Owned: 0 <br />
    </p>
    <button className="buyAutoButton">Buy Auto Clicker</button> <br />
    <p id="priceForAuto" name="priceForAuto">Price: 100 donuts</p>
    <p id="clickMultiplier" name="clickMultiplier" >Donuts Per Click: 1</p>
    <br />
    <button className="buyclickMultiplier">Buy Donut Multiplier</button>
    <br />
    <p id="priceForMultiplier" name="priceForMultiplier"> <br /> Price: 100 donuts</p>
    <br />
  </div>
    <button className="resetButton">Reset Game</button>

  
    </Fragment>
  )

}
