function FindProxyForURL(url, host) {  
/*********************** URL MATCHING ***********************/
/************************************************************/

/*********************** HOST MATCHING ************************/
 if (shExpMatch(host, "*.qualtrics.com") || host=="qualtrics.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.login.oracle.com") || host=="login.oracle.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.support.symantec.com") || host=="support.symantec.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.app.datadoghq.com") || host=="app.datadoghq.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.github.com") || host=="github.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.login.symantec.com") || host=="login.symantec.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.informaticacloud.com") || host=="informaticacloud.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.ebayimg.com") || host=="ebayimg.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.brighttalk.com") || host=="brighttalk.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.s3.amazonaws.com") || host=="s3.amazonaws.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.raw.githubusercontent.com") || host=="raw.githubusercontent.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.app.saucelabs.com") || host=="app.saucelabs.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.ebay.com") || host=="ebay.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.docker.com") || host=="docker.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
/*************************************************************/
 return "DIRECT";
}