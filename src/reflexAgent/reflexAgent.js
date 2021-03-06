// MIT License
// Copyright (c) 2020 Luis Espino

var contadorVisitas=[0,0,0,0,0,0,0,0];
var supero2Visitas=[false,false,false,false,false,false,false,false];
const visitasNecesarias = 2;
 
function reflex_agent(location, state){
   	if (state=="DIRTY") {
		return "CLEAN";
	} else if (location=="A") {
		return "RIGHT";
	} else if (location=="B") {
		return "LEFT";
	}
}

function ensuciar(){
	let aleatorio = Math.floor(Math.random() * 3) + 1;
	if(aleatorio == 1 ){ //Si el random es 1 ensucio A Y B
		states[1]="DIRTY"; 
	}else if (aleatorio == 2) { //Si el random es 2 ensucio solo A
		states[2]="DIRTY";
	}else if (aleatorio == 3) { //Si el random es 2 ensucio solo A
		states[1]="DIRTY"; 
		states[2]="DIRTY"; 
	}
}

function validar2Visitas(){
	if (supero2Visitas[0]==true && supero2Visitas[1]==true &&
		supero2Visitas[2]==true && supero2Visitas[3]==true &&
		supero2Visitas[4]==true && supero2Visitas[5]==true &&
		supero2Visitas[6]==true && supero2Visitas[7]==true) {
		return true;
	}
	return false;
}

function llenar_bitacora(){
	if( states[0] == "A" && states[1]=="DIRTY" && states[2]=="DIRTY" ){ 
		document.getElementById("estado").src = "src/reflexAgent/img/estado1.png";
		contadorVisitas[0] += 1;
		if (contadorVisitas[0]>=visitasNecesarias) {
			supero2Visitas[0]=true;
		}
	}else if( states[0] == "A" && states[1]=="CLEAN" && states[2]=="DIRTY" ){
		document.getElementById("estado").src = "src/reflexAgent/img/estado2.png";
		contadorVisitas[1] += 1;
		if (contadorVisitas[1]>=visitasNecesarias) {
			supero2Visitas[1]=true;
		}
	}else if( states[0] == "B" && states[1]=="CLEAN" && states[2]=="DIRTY" ){
		document.getElementById("estado").src = "src/reflexAgent/img/estado3.png";
		contadorVisitas[2] += 1;
		if (contadorVisitas[2]>=visitasNecesarias) {
			supero2Visitas[2]=true;
		}
	}else if( states[0] == "B" && states[1]=="CLEAN" && states[2]=="CLEAN" ){
		document.getElementById("estado").src = "src/reflexAgent/img/estado4.png";
		contadorVisitas[3] += 1;
		if (contadorVisitas[3]>=visitasNecesarias) {
			supero2Visitas[3]=true;
		}
	}else if(  states[0] == "A" && states[1]=="CLEAN" && states[2]=="CLEAN" ){
		document.getElementById("estado").src = "src/reflexAgent/img/estado5.png";
		contadorVisitas[4] += 1;
		if (contadorVisitas[4]>=visitasNecesarias) {
			supero2Visitas[4]=true;
		}
	}else if(states[0] == "A" && states[1]=="DIRTY" && states[2]=="CLEAN"){
		document.getElementById("estado").src = "src/reflexAgent/img/estado6.png";
		contadorVisitas[5] += 1;
		if (contadorVisitas[5]>=visitasNecesarias) {
			supero2Visitas[5]=true;
		}
	}else if( states[0] == "B" && states[1]=="DIRTY" && states[2]=="CLEAN" ){
		document.getElementById("estado").src = "src/reflexAgent/img/estado7.png";
		contadorVisitas[6] += 1;
		if (contadorVisitas[6]>=visitasNecesarias) {
			supero2Visitas[6]=true;
		}
	}else if(states[0] == "B" && states[1]=="DIRTY" && states[2]=="DIRTY"){
		document.getElementById("estado").src = "src/reflexAgent/img/estado8.png";
		contadorVisitas[7] += 1;
		if (contadorVisitas[7]>=visitasNecesarias) {
			supero2Visitas[7]=true;
		}
	}
	document.getElementById("cont1").innerHTML = contadorVisitas[0];
	document.getElementById("cont2").innerHTML = contadorVisitas[1];
	document.getElementById("cont3").innerHTML = contadorVisitas[2];
	document.getElementById("cont4").innerHTML = contadorVisitas[3];
	document.getElementById("cont5").innerHTML = contadorVisitas[4];
	document.getElementById("cont6").innerHTML = contadorVisitas[5];
	document.getElementById("cont7").innerHTML = contadorVisitas[6];
	document.getElementById("cont8").innerHTML = contadorVisitas[7];
}

function test(states){
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
		let salida ="Location: ".concat(location).concat(" | Action: ").concat(action_result);
      	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
		document.getElementById("log_actual").innerHTML="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
		llenar_bitacora();
		console.log(salida);
		console.log(states)
		if (action_result == "CLEAN"){
        	if (location == "A") {
				states[1] = "CLEAN";
			} else if (location == "B") { 
				states[2] = "CLEAN";
			}
      	} else if (action_result == "RIGHT") {
			states[0] = "B";
		} else if (action_result == "LEFT") {
			states[0] = "A";		
		}
		let validacion = validar2Visitas();
		if(validacion==false){
			setTimeout(function(){ test(states); }, 2000);
		}else {
			console.log("Termino "+ contadorVisitas);
			
		}
	
	
}
setInterval(function(){ ensuciar(); }, 4000);
var states = ["A","DIRTY","DIRTY"];
test(states);
