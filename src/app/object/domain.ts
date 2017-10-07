export class Scan {
    domain: string;
    baseDomain: string;
    canonicalURL: string;
    live: boolean;
    redirect: boolean;
    redirectTo: string;
    validHTTPS: boolean;
    defaultstoHTTPS: boolean;
    downgradesHTTPS: boolean;
    strictlyForcesHTTPS: boolean;
    HTTPSBadChain: boolean;
    HTTPSBadHostname: boolean;
    HTTPSExpiredCert: boolean;
    HSTS: boolean;
    HSTSHeader: string;
    HSTSMaxAge: string;
    HSTSEntireDomain: boolean;
    HSTSPreloadReady: boolean;
    HSTSPreloadPending: boolean;
    HSTSPreloaded: boolean;
    baseDomainHSTSPreloaded: boolean;
    domainSupportsHTTPS: boolean;
    domainEnforcesHTTPS: boolean;
    domainUsesStrongHSTS: boolean;

}