var bestTime = 0;
var start = new Date().getTime();
document.getElementById("circle").onclick = function click() {
    document.getElementById("circle").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    var currentTime = timeTaken;
    if (currentTime < bestTime || bestTime === 0) {
        bestTime = currentTime;
    }
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    document.getElementById("bestTime").innerHTML = bestTime + "s";
    //setTimeout(reappear, Math.random()* 2000)
            
    function reappear() {
                 
        var i, hexColor = '#', hexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        for (i = 0; i < 6; i++) {
            var randomNum = Math.floor(Math.random() * 16);
            hexColor = hexColor + hexNum[randomNum];
                    //console.log(hexCol);   
        }
        var hexCol = hexColor;
        //console.log(hexCol);
        var top = Math.random() * 400;
        var left = Math.random() * 400;
        var div = ['circle', 'square', 'trapezoid'];
        var randomShape = Math.floor(Math.random() * 3);
                //console.log(randomShape)
        var shape = div[randomShape];
        if (shape === "square") {
                     //console.log(shape)
            document.getElementById("circle").style.borderRadius = "0";
            document.getElementById("circle").style.height = "100px";
	        document.getElementById("circle").style.width = "100px";
            document.getElementById("circle").style.backgroundColor = hexCol;
            document.getElementById("circle").style.borderBottom = "0";
        } else if (shape === 'trapezoid') { 
            document.getElementById("circle").style.borderBottom = "50px solid" + hexCol; 
            document.getElementById("circle").style.borderLeft = "25px solid white"; 
            document.getElementById("circle").style.borderRight = " 25px solid white";
            document.getElementById("circle").style.height = "0px";
	        document.getElementById("circle").style.width = "125px";
            document.getElementById("circle").style.borderRadius = "0";
            document.getElementById("circle").style.backgroundColor = "none";
                     
        } else {
            document.getElementById("circle").style.borderRightStyle = "none";
            document.getElementById("circle").style.borderRight = "0";
            document.getElementById("circle").style.borderLeftStyle = "none";
            document.getElementById("circle").style.borderLeft = "0";
            document.getElementById("circle").style.borderBottomStyle = "none";
            document.getElementById("circle").style.borderBottom = "0"; 
            document.getElementById("circle").style.borderRadius = "50%";
            document.getElementById("circle").style.height = "100px";
	        document.getElementById("circle").style.width = "100px";
            document.getElementById("circle").style.backgroundColor = hexCol;
        }
                        
                 
        document.getElementById("circle").style.display = "block"; 
        document.getElementById("circle").style.top = top + "px"; 
        document.getElementById("circle").style.left = left + "px";
        start = new Date().getTime();
    }
    setTimeout(reappear, Math.random() * 2000);
};