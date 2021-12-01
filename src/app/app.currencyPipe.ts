import { Pipe,PipeTransform } from "@angular/core";
@Pipe({
    name:'currencyPipe',
})
export class CurrencyPipe implements PipeTransform{
    transform(value: string,deviseDebart:String,deviseArrive:String): any {
        let symbole=""
        let valeur=0
        let display=false
        let k=3
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
                valeur=parseFloat(((parseFloat(value)/655.9570)*1.134122).toPrecision(k))
            }else if(deviseDebart=="FCFA" && deviseArrive=="EUR"){
                valeur=parseFloat((parseFloat(value)/655.9570).toPrecision(k))
            }else if(deviseDebart=="EUR" && deviseArrive=="USD"){
                valeur=parseFloat((parseFloat(value)*1.134122).toPrecision(k))
            }else if(deviseDebart=="EUR" && deviseArrive=="FCFA"){
                valeur=parseFloat((parseFloat(value)*655.9570).toPrecision(k))
            }else if(deviseDebart=="USD" && deviseArrive=="FCFA"){
                valeur=parseFloat(((parseFloat(value)/1.134122)*655.9570).toPrecision(k))
            }else if(deviseDebart=="USD" && deviseArrive=="EUR"){
                valeur=parseFloat(((parseFloat(value))/1.134122).toPrecision(k))
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