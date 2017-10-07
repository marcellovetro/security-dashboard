import {Component, OnInit} from '@angular/core';
import {ScanService} from '../providers/scan.service';

import {Scan} from "../object/scan";

@Component({
    selector: 'scan',
    templateUrl: './scan.html',
    styleUrls: ['../app.component.css']
})
export class ScanComponent implements OnInit {

    errorMessage: string;
    mode = 'Observable';
    scans: Scan[];
    term: string;

    constructor( private scanService: ScanService) {
    }

    ngOnInit() {
        this.getScans();
    }

    getScans() {
        this.scanService.getScans()
            .subscribe(
                scans => this.scans = scans,
                error => this.errorMessage = <any>error);
    }

    search() {
        this.scanService.searchScan(this.term)
            .subscribe(
                scans => this.scans = scans,
                error => this.errorMessage = <any>error);
    }

    resetSearch() {
        this.term = null;
        this.getScans();
    }
}
