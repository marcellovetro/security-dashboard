import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NgModel } from '@angular/forms';
/**
 * importo la classe DomainService per gestire le richieste al server
 */
import {DomainService} from '../providers/domain.service';
import {ActivatedRoute, Router} from '@angular/router';


import {Domain} from "../object/domain";

@Component({
    selector: 'domain',
    templateUrl: './domain.component.html',
    styleUrls: ['./domain.css'],
    // include original styles
    encapsulation: ViewEncapsulation.None
})
/**
 * Componente principale della pagina domain
 */
export class DomainComponent implements OnInit {

    errorMessage: string;
    mode = 'Observable';
    domains: Domain[];
    public term: string = '';
    public chartData: any;
    public chartLabels: any;
    public chartType:string = 'pie';

    route: ActivatedRoute;

    constructor( private _router: Router, private _route: ActivatedRoute, private domainService: DomainService) {
        this.route = _route;
    }

    /**
     * durante l'inizializzazione del componente
     */
    ngOnInit() {
        // inizializzo le etichette del grafico a torta
        this.chartLabels = ['With HTTPS', 'Without HTTPS'];
        // richiamo il metodo per recuperare i dati
        this.getDomains();
    }

    /**
     * ottengo la lista dei domini
     */
    getDomains() {
        // richiamo il provider per
        this.domainService.getList()
            .subscribe(
                domains => this.setData(domains),
                error => this.errorMessage = <any>error);
    }

    /**
     * ricerca per dominio
     */
    search() {
        this.domainService.search(this.term)
            .subscribe(
                domains => this.setData(domains),
                error => this.errorMessage = <any>error);
    }

    /**
     * carico una lista di dati per essere mostrati
     * @param {Domain[]} data
     */
    setData(data: Domain[]) {
        // setto il vettore in ingresso nella lista dei domini da visualizzare
        this.domains = data;

        // calcolo i conteggi dei domini con e senza https
        let with_https_count = 0;
        let without_https_count = 0;
        // ciclo i domini in ingresso
        for (let i in data) {
            if (data[i].validHTTPS) {
                with_https_count++;
            } else {
                without_https_count++;
            }
        }
        // setto i totali nel vettore contenente i dati per il grafico a torta
        this.chartData = [with_https_count, without_https_count];
    }

    /**
     * resetto la ricerca
     */
    resetSearch() {
        // annullo il valore della variabile term
        this.term = null;
        // lancio la chiamata al servizio per ottenere la lista completa dei domini
        this.getDomains();
    }

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

    public searchPressHandler(event) {
        this.search();
    }
}
