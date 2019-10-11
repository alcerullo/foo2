function FindProxyForURL(url, host) {  
/*********************** URL MATCHING ***********************/
/************************************************************/

/*********************** HOST MATCHING ************************/
 if (shExpMatch(host, "*.slack-files.com") || host=="slack-files.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.qualtrics.com") || host=="qualtrics.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.management.azure.com") || host=="management.azure.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.core.windows.net") || host=="core.windows.net") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.windowsazure.com") || host=="windowsazure.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.ebay.com") || host=="ebay.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.content.force.com") || host=="content.force.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.toolbox.com") || host=="toolbox.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.s3.amazonaws.com") || host=="s3.amazonaws.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.login.oracle.com") || host=="login.oracle.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.microsoftonline.com") || host=="microsoftonline.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.informaticacloud.com") || host=="informaticacloud.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.ebayimg.com") || host=="ebayimg.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.slack-msgs.com") || host=="slack-msgs.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.app.salesforceiq.com") || host=="app.salesforceiq.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.slack.com") || host=="slack.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.app.saucelabs.com") || host=="app.saucelabs.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.atlassian.com") || host=="atlassian.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.ext.azure.com") || host=="ext.azure.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.support.symantec.com") || host=="support.symantec.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.app.datadoghq.com") || host=="app.datadoghq.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.myworkday.com") || host=="myworkday.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.salesforce.com") || host=="salesforce.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.bitbucket.org") || host=="bitbucket.org") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.workday.com") || host=="workday.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.docker.com") || host=="docker.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.portal.azure.com") || host=="portal.azure.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.login.live.com") || host=="login.live.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.login.symantec.com") || host=="login.symantec.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.force.com") || host=="force.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.brighttalk.com") || host=="brighttalk.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
/*************************************************************/
 return "DIRECT";
}