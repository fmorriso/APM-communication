# APM Component Communication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Developer Notes
Notes taken starting in early February 2018
### Deborah Kurata
[Problem Solver](http://blogs.msmvps.com/deborahk/angular-component-communication-problem-solver)

[GitHub](https://github.com/DeborahK/Angular-Communication)
## My GitHub
[My private GitHub](https://github.com/fmorriso/APM-communication)

## Missing dependency in package.json
 "angular-in-memory-web-api": "latest",
## Replace Glyphicons with Font-Awesome
[tutorial](https://medium.com/@beeman/tutorial-add-bootstrap-to-angular-cli-apps-b0a652f2eb2)

Version 1.5.3 was OK
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";

For version 1.6.3 I must change this to:
$icon-font-path: "../node_modules/bootstrap-sass/assets/fonts/bootstrap/";

.angular-cli.json:

  // styles
  "../node_modules/font-awesome/css/font-awesome.css"
  
  // assets
  "../node_modules/font-awesome/fonts"
## Port in Use error and work-around
https://github.com/angular/angular-cli/issues/4201
```
netstat -a -o -n

taskkill /F /PID nnnnn
```
### PowerShell script reference
https://gallery.technet.microsoft.com/scriptcenter/Get-NetworkStatistics-66057d71

https://blogs.technet.microsoft.com/heyscriptingguy/2015/08/19/parsing-netstat-information-with-powershell-5/
## Bootstrap 4 references

[doc](https://getbootstrap.com/)

[blog](https://blog.getbootstrap.com/)

[Text sizing](https://getbootstrap.com/docs/4.0/utilities/sizing/)

