 Final Project Structure (before zipping):

event-management/
│
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── components/
│   │   │   └── event-list/
│   │   │       ├── event-list.component.ts
│   │   │       ├── event-list.component.html
│   │   │       └── event-list.component.css
│   │   ├── directives/
│   │   │   └── highlight.directive.ts
│   │   └── pipes/
│   │       └── price-format.pipe.ts
│   ├── main.ts
│   └── styles.css
│
├── README.md
├── angular.json
├── package.json
├── tsconfig.json
├── .gitignore
└── (screenshots folder)/
    ├── list-display.png
    ├── formatted-prices.png
    └── highlighted-events.png


# Event Management Portal

## Description
A Single Page Application (SPA) built with Angular 18+ Standalone Components.  
Features:
- Displays a list of events in a table
- Formats ticket prices using a custom pipe (`PriceFormatPipe`)
- Highlights expensive events (price > ₹2000) using a custom directive (`HighlightDirective`)
- Formats event dates using Angular's built-in DatePipe
- Includes fade-in animation for table rows

---

## Installation & Run Steps

```bash
# Install Angular CLI if not installed
npm install -g @angular/cli

# Navigate into project folder
cd event-management

# Install dependencies
npm install

# Run the development server
ng serve

# Open in browser:
# http://localhost:4200



Implemented Features
1.Event List Display

-> Implemented in EventListComponent using *ngFor

-> Displays Name, Date, Price, and Category

2.Custom Pipe - PriceFormatPipe

-> Formats ticket prices to ₹ with comma separators and 2 decimal places

3.Custom Directive - HighlightDirective

-> Highlights expensive events (> ₹2000) with a light gold background

4.Date Formatting

-> Uses Angular's date pipe to display dd-MMM-yyyy format

## Screen Shot

![Event List Display](<Screenshot 2025-08-12 195259.png>)