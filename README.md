# angular
Angular sample applications/demo
Followed the below youtube channel and created the samples
https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ

<PRE>
  History
=======
2010 - Angular Js
2016 - Angular 2

Semantic Versioning
===================
Major.Minor.Fix

Commands
========
npm install -g @angular/cli
ng new hello-world
ng g c test

Component - is a building block of the application
=========
1. Template
- View
- HTML
2. Class
- Code
- TypeScripts
- Data & Methods
3. Meta Data
- Information
- Decorator

3 ways to specify selector
=======================
<app-test"></app-test> selector:"app-test"
<div class=".app-test"></div> selector:".app-test"
<div app-test></div>selector:"[app-test]"

Specifying inline templates
===========================
template:`<div>
Inline Template with multi lin using back ticks
</div>'

templateURL:"./test.component.html"

Interpolation
=============
{{name}} >> from public property
{{2+2}} >> expression
{{"Welcome" + name}} >> string concatenation
{{name.length}} >> property of the string
{{greetUser()}} >> call method to display
{{a=2+1}} >> assignments not allowed
{{location.href}} >> global variables not allowed

Property Binding
================
$0 - represents current element
$0.getAttribute('value')
$0.value

** Attributes and Properties are not same
** Attributes defined by HTML
** Properties defined by DOM
** Attributes initialize the DOM properties and then they are done. 
** Attribute values cannot change once they are initialized.
** Property values however can change
Why property binding?
Interpolation works only with string values. There a changes we may need to bind boolean values.
<pre>
<input [id] = "myId" value="Jay" type="text">
<input id = "{{myId}}" value="Jay" type="text">
<input disabled="false" id = "{{myId}}" value="Jay" type="text">
<input [disabled]="isDisabled" id = "{{myId}}" value="Jay" type="text">
<input bind-disabled="isDisabled" id = "{{myId}}" value="Jay" type="text">
</pre>

Class Binding
=============
<pre><h2 class="text-success"> Jay</h2>
<h2 [class]="successClass"> Jay</h2>
<h2 class="text-special" [class]="successClass"> Jay</h2>
<h2 [class.text-danger]="hasError" > Jay</h2>
<h2 [ngClass]="messageClasses"> Jay</h2>
</pre>

Style Binding
============
<pre><h2 [style.color]="hasError ? 'red' : 'green'">Style Binding1</h2>
<h2 [style.color]="highlightColor">Style Binding2</h2>
<h2 [ngStyle]="titleStyles">Style Binding3</h2>
</pre>

Event Binding
=============
<pre><Button (click) ="onClick($event)"> Greet </Button>
<Button (click) ="greeting='Welcome Jay'"> Greet </Button>
<h1> Template Reference Variables: </h1>
<input #myInput type="text">
<Button (click) ="logMessage(myInput.value)"> Log </Button>
</pre>

Two Way Binding
===============
Forms Module to be imported in app modules.
[[ngModel)] = Banana in the box

Structural Directives
====================
ngIf, ngSwitch, ngFor

ngIf
----
<h2 *ngIf="true"> Display </h2> -- If statement

Inline syntax:
<h2 "ngIf="display; else elseBlock"> Display If </h2>  -- If Else statement, elseBlock is templateVariable
<ng-template #elseBlock>
<h2> Else Block</h2>
</ng-template>

Multi line syntax:
  <div *ngIf="displayName; then thenBlock else elseBlock"> 
  </div>

  <ng-template #thenBlock>
    Then Block
  </ng-template>
  
  <ng-template #elseBlock>
    Else Block
  </ng-template>

ngSwitch
--------
[ngSwitch], *ngSwitchCase, *ngSwitchDefault
</PRE>

