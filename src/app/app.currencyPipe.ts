import { Pipe,PipeTransform } from "@angular/core";
@Pipe({
    name:'currencyPipe',
})
export class CurrencyPipe implements PipeTransform{
    transform(value: string,deviseDebart:String,deviseArrive:String): any {
        let symbole=""
        let valeur=0
        let display=false
        if(symbole==""){
            display=true
            if(deviseArrive=="USD"){
                symbole="$"
            }else if(deviseArrive=="FCFA"){
                symbole="FCFA"
            }else if(deviseArrive=="EUR"){
                symbole="£"
            }

            if(deviseDebart=="FCFA" && deviseArrive=="USD"){
                valeur=parseFloat(value)*550
            }else if(deviseDebart=="FCFA" && deviseArrive=="EUR"){
                valeur=parseFloat(value)*650
            }else if(deviseDebart=="EUR" && deviseArrive=="USD"){
                valeur=(parseFloat(value)/650)*550
            }else if(deviseDebart=="EUR" && deviseArrive=="FCFA"){
                valeur=parseFloat(value)/650
            }else if(deviseDebart=="USD" && deviseArrive=="FCFA"){
                valeur=parseFloat(value)/550
            }else if(deviseDebart=="USD" && deviseArrive=="EUR"){
                valeur=(parseFloat(value)/550)*650
            }else if(deviseDebart=="EUR" && deviseArrive=="EUR"){
                valeur=parseFloat(value)
            }else if(deviseDebart=="USD" && deviseArrive=="USD"){
                valeur=parseFloat(value) 
            }else if(deviseDebart=="FCFA" && deviseArrive=="FCFA"){
                valeur=parseFloat(value)
            }
        }
        return symbole+valeur;
    }
    
}