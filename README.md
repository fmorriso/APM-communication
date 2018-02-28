# APM Component Communication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1 and Angular 5.2.6.

## My GitHub
[My GitHub](https://github.com/fmorriso/APM-communication)

## Modifications
* Upgraded Angular-CLI to 1.7.1
* Upgraded Angular to 5.2.6
* Upgraded Bootstrap to 4.0.0
* Changed style from CSS to SCSS to better mesh with Bootstrap 4.x
* Override of Bootstrap 4.0 variables via _variables.scss
* Added Font Awesome to replace old Bootstrap 3.x icons no longer included with Bootstrap 4.x
* Converted all Bootstrap 3.x Panel to Card
* Converted Bootstrap 3.x navigation to Bootstrap 4.x navigation, including "hamburger stack" collapse click event.
* Put Angular routes into separate variables of type Routes. 

## Developer Notes
Notes taken starting in early February 2018
### Deborah Kurata
[Problem Solver](http://blogs.msmvps.com/deborahk/angular-component-communication-problem-solver)

[GitHub](https://github.com/DeborahK/Angular-Communication)

## Missing dependency in package.json
 "angular-in-memory-web-api": "latest",
## Replace Glyphicons with Font-Awesome
[tutorial](https://medium.com/@beeman/tutorial-add-bootstrap-to-angular-cli-apps-b0a652f2eb2)

### Using Font-Awesome SCSS in Angular-CLI
[reference](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/include-font-awesome.md#using-sass)
  
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
## Port in Use error and work-around (no longer needed: Angular-CLI 1.7.1 fixed it)
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

## angular-ngrx-data - simplify use of ngRx pattern
[introduction](https://github.com/johnpapa/angular-ngrx-data/blob/master/docs/introduction.md#introduction-to-ngrx-data)

[github](https://github.com/johnpapa/angular-ngrx-data)

