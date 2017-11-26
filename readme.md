# HTML Framework

### Description

This is an html framework designed to expedite html layouts, as well as create a common ui abstraction accross css frameworks.

Current css frameworks being supported: `Bulma`, `Bootstrap3`

### Installation

- Just include jQuery and `js/Render.js` at the bottom of your page.

- Include a `<render type="bootstrap3"></render>` or `<render type="bootstrap3"></render>` in the header

Start with some of the modules below

### Modules
This html framework uses `modules` which are simply html elements to render html into different css frameworks.

#### `Menu` Module
Currently there is only 1 module: the `menu` module. This module renders a navbar. 

##### Options:
Options are simply elements inside the `menu` module

| Element       | Attributes    | Description
| ------------- | ------------- | -----------
| item          | `href`        | renders an item inside the navbar
| right         | none          | renders items on the right side of the navbar

##### Example:

```html
<menu class='navbar-inverse'>
    <item href='/home'>Home</item>
    <item href='/about-us'>About Us</item>
    <item href='/contact'>Contact</item>
    
    <right>
        <item href='/login'>Login</item>
        <item href='/register'>Register</item>
    </right>
</menu>
```

There will be future development to add functionality to multiple css frameworks as well as new modules like `card`, `forms`, or addons like `blog` etc.
