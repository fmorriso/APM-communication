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

### using SCSS
https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/include-font-awesome.md#using-sass
  
1. Create an empty file named `_variables.scss` in src/.  
1. Add the following to `_variables.scss`:
    ```  
    $fa-font-path : '../node_modules/font-awesome/fonts';
    ```  
1. In styles.scss add the following:
    ```  
    @import 'variables';
    @import '../node_modules/font-awesome/scss/font-awesome';
    ```
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

