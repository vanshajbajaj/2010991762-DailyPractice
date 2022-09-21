var mass=0;

function getinp(){
    mass=document.getElementById("inp").value;
    document.getElementById("popup").style.display="none";
    document.getElementById("midd").style.display="flex";
    setTimeout(() => {
        document.getElementById("midd").style.opacity=1;
    }, 1000);
    mass=mass/9.8;
    calcweight(9.8);
    changeimg("planets/earth.jpg");
    changename("Earth");
}

function calcweight(gravity){

    // var mass=prompt("enter weight on earth");
    //var mass=document.getElementById("wt").value;
    //mass=mass/9.8;
    var res=mass*gravity;
    document.getElementById("outt").innerText=+res.toFixed(2)+" Kg";
    console.log(gravity); 

}

function changeimg(urll){

    document.getElementById("planetimg").style.backgroundImage="url('"+urll+"')";

}

function changename(nm){

    document.getElementById("pname").innerHTML=nm;

}