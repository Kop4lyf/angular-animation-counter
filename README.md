# angular-animation-counter
Angularjs counter to animate the value change

## Description
This counter animates the change in value of the variable in span when the scope variable is changed

## Super easy to use
1. Include the js file in the dist folder to your html or add it to the build process if you are using Grunt/gulp.
2. Add the module "angular-animation-counter" to as a dependency to your app module.
3. Create a span/div(inputs not yet supported) and add attributes:

### BASIC USAGE:
```html
   <span inc-dec-counter value="{{scopeVariable}}"></span>
```
The counter will run for approx one second when the scope variable changes.

### ADVANCED USAGE:
1. The interval of animation can be set as interval attribute in seconds. It animates for that interval approx. It can also be a scope variable so that it can be customised in between.
```html
   <span inc-dec-counter  interval="10" value="{{scopeVariable}}"></span>
```
2. Adding locale for number formatting:
You can also provide locale so that it converts the number to local string values, seperated by commas/dots. In this following case the value of the span will be 1,22,222 (for 122222)
```html
   <span inc-dec-counter locale="en-IN"  interval="10" value="{{scopeVariable}}"></span>
```
Note that locale only changes the display value, the scope variable is not modified.

Feel free to log any issues.

###Disclaimer:
This directive uses a watch function to run the counter on change of value.
That being the only watch.

That's all folks :)
