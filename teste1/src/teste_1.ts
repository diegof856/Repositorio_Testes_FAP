class teste_1{

     imprimirNumerosMenorQueCem():void {
        for (let i:number =1; i < 100;i +=2){
            console.log(i) 
           }
    }
    
    somaNumerosUmHaDez():void{
        let soma = 0;
        for(let i:number=1;i<10;i++){
            soma+=(i+(i+1))
            console.log(soma);
        }
    }
    converterTemperatura():string{
        let tempF = 80;
        console.log("Temperatura em Fahrenheit "+ tempF);
        let tempC = (tempF-32)/1.8;
        return "Temperatura convertida em Celsius " + tempC.toFixed(2);
    }
    calcularMediaVetor():void{
        let a = [3,5,8,9];
        let media = 0;
        let somaMedia = 0;
        for(let i=0; i<a.length;i++){
            somaMedia+=a[i];
        }
        media = somaMedia/a.length;
        console.log(media);
    }

}

let obj = new teste_1();
obj.imprimirNumerosMenorQueCem();
obj.somaNumerosUmHaDez();
console.log(obj.converterTemperatura());
obj.calcularMediaVetor();