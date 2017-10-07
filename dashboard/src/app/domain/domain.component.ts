import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DomainService} from '../providers/domain.service';
import {ActivatedRoute, Router} from '@angular/router';


import {Domain} from "../object/domain";

@Component({
    selector: 'domain',
    templateUrl: './domain.component.html',
    styleUrls: ['../app.component.css'],
    // include original styles
    encapsulation: ViewEncapsulation.None
})
export class DomainComponent implements OnInit {

    errorMessage: string;
    mode = 'Observable';
    domains: Domain[];
    term: string;
    public chartData: any;
    public chartLabels: any;
    public chartType:string = 'pie';

    route: ActivatedRoute;

    constructor( private _router: Router, private _route: ActivatedRoute, private domainService: DomainService) {
        this.route = _route;
    }

    ngOnInit() {
        this.chartLabels = ['With HTTPS', 'Without HTTPS'];
        this.getDomains();
    }

    getDomains() {
        this.domainService.getList()
            .subscribe(
                domains => this.setData(domains),
                error => this.errorMessage = <any>error);
    }

    search() {
        this.domainService.search(this.term)
            .subscribe(
                domains => this.setData(domains),
                error => this.errorMessage = <any>error);
    }

    setData(data: Domain[]) {
        this.domains = data;

        let with_count = 0;
        let without_count = 0;
        for (let i in data) {
            if (data[i].validHTTPS) {
                with_count++;
            } else {
                without_count++;
            }
        }
        this.chartData = [with_count, without_count];
    }

    resetSearch() {
        this.term = null;
        this.getDomains();
    }

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
}
