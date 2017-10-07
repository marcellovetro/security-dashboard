import {Component, OnInit} from '@angular/core';
import {DomainService} from '../providers/domain.service';
import {ActivatedRoute, Router} from '@angular/router';

import {Domain} from "../object/domain";

@Component({
    selector: 'domain',
    templateUrl: './domain.component.html',
    styleUrls: ['../app.component.css']
})
export class DomainComponent implements OnInit {

    errorMessage: string;
    mode = 'Observable';
    domains: Domain[];
    term: string;
    public PlotlyLayout: any;
    public PlotlyData: any;
    public PlotlyOptions: any;

    route: ActivatedRoute;

    constructor( private _router: Router, private _route: ActivatedRoute, private domainService: DomainService) {
        this.route = _route;
    }

    ngOnInit() {

        this.PlotlyLayout = {
            title: "Domains with HTTPS",
            height: 500,
            width: 1200
        };
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

        let values = [
            0,
            0
        ];
        let labels = [
            'With HTTPS',
            'Without HTTPS',
        ];

        for (let i in data) {
            if (data[i].validHTTPS) {
                values[0]++;
            } else {
                values[1]++;
            }
        }
        this.PlotlyData = [
            {
                name: "Domains with HTTPS",
                type: 'pie',
                direction: 'counterclockwise',
                values:values,
                labels:labels,
            }
        ];
    }

    resetSearch() {
        this.term = null;
        this.getDomains();
    }
}
