import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio1';

  fnEjecutar() {
    let valDividendo = (<HTMLTextAreaElement>document.getElementById('txtDividendo')).value;
    let valDivisor = (<HTMLTextAreaElement>document.getElementById('txtDivisor')).value;

    let residuo = Number(valDividendo);
    let resultado = '';
    let operaciones = '';
    let primera = Number(valDividendo.substr(0, valDivisor.length));
    let tomados = valDivisor.length;
    if (primera <= Number(valDivisor)) {///porsiacaso no alcansa 
        primera = Number(valDividendo.substr(0, valDivisor.length + 1));
        tomados++;
    }
    resultado = (Math.floor(primera / Number(valDivisor))).toString();
    console.log(resultado, primera);
    let primulti = Number(resultado) * Number(valDivisor);
    let priResta=(primera - primulti).toString();
    operaciones += '-' + primulti + '<br>---------- <br>' + priResta;
    let operando=priResta;
    do {
        //console.log(operando);
        operaciones+='<strong>'+valDividendo.substr(tomados,1)+'</strong>';
        operando+=valDividendo.substr(tomados,1);
        tomados++;
        if(Number(operando)>Number(valDivisor)){
            let auxResultado=Math.floor(Number(operando) / Number(valDivisor));
            resultado+=auxResultado.toString();
            let multi=Number(auxResultado)*Number(valDivisor);
            let resta=Number(operando)-multi;
            operaciones+='<br> -'+multi+ '<br>---------- <br>' +resta;
            operando=resta.toString();
        }


    } while (tomados<Number(valDividendo));

    (<HTMLDivElement>document.getElementById('disResiduo')).innerHTML = operaciones;
    (<HTMLDivElement>document.getElementById('divResultado')).innerHTML = resultado;
}

}
