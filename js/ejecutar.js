function mm1_infinito(){
    
    console.log("-> Modelo M/M/1 INFINITO");
    try { 
        let mm1_λ = Number(document.getElementById("mm1_λ").value);
        let mm1_μ = Number(document.getElementById("mm1_μ").value);
        let mm1_n = document.getElementById("mm1_n").value;
        let mm1_t = document.getElementById("mm1_t").value;
        
        

        let modelo_mm1 = new MM1(mm1_λ,mm1_μ);
        let salida = "";
        salida += " Caracteristicas Operativas de Sistema - MODELO MM1 Infinito"+"\n";
        salida += " El sistema tiene capacidad: "+modelo_mm1.capacidad()+"\n";
        salida += " ρ = "+modelo_mm1.ro()+"\n";
        salida += " Po = "+modelo_mm1.p0()+"\n";
        salida += " Lq = "+modelo_mm1.Lq()+"\n";
        salida += " L = "+modelo_mm1.L()+"\n";
        salida += " Wq = "+modelo_mm1.Wq()+"\n";
        salida += " W = "+modelo_mm1.W()+"\n";
        salida += " Pw = "+modelo_mm1.Pw()+"\n";
        if (mm1_n=="") {
        } else {
            mm1_n = Number(document.getElementById("mm1_n").value);
            salida += " Pn = "+modelo_mm1.Pn(mm1_n)+"\n";
        }
        if (mm1_t=="") {
        } else {
            mm1_t = Number(document.getElementById("mm1_t").value);
            salida += " P(Wq > t) = "+modelo_mm1.P_Wq_mayor(mm1_t)+"\n";
            salida += " P(W > t) = "+modelo_mm1.P_w_mayor(mm1_t)+"\n";
        }
        salida += "\n";

        let tempo = textMap.get("code_mm1");    //Obtengo el textarea de la pestaña
        tempo.setValue(salida);
    }
    catch (err) {
        console.log(err);
      
    }

}

function mmk(){
    console.log("-> Modelo M/M/K ");
    try { 
        let mmk_λ = Number(document.getElementById("mmk_λ").value);
        let mmk_μ = Number(document.getElementById("mmk_μ").value);    
        let mmk_K = Number(document.getElementById("mmk_K").value);  
        let mmk_n = document.getElementById("mmk_n").value;
        let mmk_t = document.getElementById("mmk_t").value;
        

        let modelo_mmk = new MMK(mmk_λ,mmk_μ,mmk_K);

        let salida = "";
        salida += " Caracteristicas Operativas de Sistema - MODELO MMK"+"\n";
        salida += " El sistema tiene capacidad: "+modelo_mmk.capacidad()+"\n";
        salida += " ρ = "+modelo_mmk.ro()+"\n";
        salida += " Po = "+modelo_mmk.p0()+"\n";
        salida += " Lq = "+modelo_mmk.Lq()+"\n";
        salida += " L = "+modelo_mmk.L()+"\n";
        salida += " Wq = "+modelo_mmk.Wq()+"\n";
        salida += " W = "+modelo_mmk.W()+"\n";
        salida += " Pw = "+modelo_mmk.Pw()+"\n";
        

        if (mmk_n!="") {
            mmk_n = Number(document.getElementById("mmk_n").value);
            salida += " Pn = "+modelo_mmk.Pn(mmk_n)+"\n";
            salida += " P(Wq = 0) = "+modelo_mmk.P_Wq_igual(mmk_n)+"\n";
        }

        if (mmk_n!="" && mmk_t!="") {
            mmk_n = Number(document.getElementById("mmk_n").value);
            mmk_t = Number(document.getElementById("mmk_t").value);
            salida += " P(Wq > t) = "+modelo_mmk.P_Wq_mayor(mmk_n,mmk_t)+"\n";
        }

        if (mmk_t!="") {
            mmk_t = Number(document.getElementById("mmk_t").value);
            
            salida += " P(W > t) = "+modelo_mmk.P_w_mayor(mmk_t)+"\n";
        }
        salida += "\n";

        let tempo = textMap.get("code_mmk");    //Obtengo el textarea de la pestaña
        tempo.setValue(salida);
    }
    catch (err) {
        console.log(err);
    }
}
