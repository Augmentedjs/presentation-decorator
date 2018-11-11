<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [DirectiveView][1]
    -   [Parameters][2]
-   [DecoratorView][3]
    -   [Parameters][4]
    -   [events][5]
    -   [events][6]
    -   [initialize][7]
        -   [Parameters][8]
    -   [remove][9]
    -   [bindingAttribute][10]
    -   [injectTemplate][11]
        -   [Parameters][12]
    -   [removeTemplate][13]
        -   [Parameters][14]
    -   [boundElement][15]
        -   [Parameters][16]
        -   [Examples][17]
    -   [syncBoundElement][18]
        -   [Parameters][19]
    -   [syncAllBoundElements][20]
    -   [addClass][21]
        -   [Parameters][22]
    -   [removeClass][23]
        -   [Parameters][24]
    -   [bindModelChange][25]
        -   [Parameters][26]
    -   [syncModelChange][27]
        -   [Parameters][28]
    -   [unbindModelChange][29]
        -   [Parameters][30]
    -   [unbindModelSync][31]
        -   [Parameters][32]

## DirectiveView

**Extends Presentation.DecoratorView**

-   **See: Presentation.DecoratorView**

A DecoratorView that is designed to use templates and clean up when removed.

### Parameters

-   `options`  

## DecoratorView

**Extends Presentation.Colleague**

DecoratorView<br/>
An MVVM view designed around decorating the DOM with bindings.
This concept is designed to decouple the view from the backend contract.
Although this is achieved via views in general, the idea is:<br/>

<blockquote>As a Javascript Developer, I'd like the ability to decorate HTML and control view rendering without the use of CSS selectors</blockquote>
<em>Important to note: This view <strong>gives up</strong> it's template and events!
This is because all events and templates are used on the DOM directly.</em><br/>
To add custom events, use customEvents instead of 'events'<br/>
supported annotations:<br/>
<ul>
<li>data-click</li>
<li>data-function</li>
<li>data-style</li>
<li>data-append-template</li>
<li>data-prepend-template</li>
</ul>

### Parameters

-   `options`  

### events

Events Property - Do Not Override

### events

Custom Events Property - merge into built-in events

### initialize

Initialize method - Do Not Override

#### Parameters

-   `options`  

### remove

Remove method - Does not remove DOM elements only bindings.

### bindingAttribute

bindingAttribute method - Returns the binging data attribute name

Returns **[string][33]** Binding attribute name

### injectTemplate

injectTemplate method - Injects a template at a mount point

#### Parameters

-   `template` **[string][33]** The template to inject
-   `mount` **[Element][34]** The mount point as Document.Element or String

### removeTemplate

removeTemplate method - Removes a template (children) at a mount point

#### Parameters

-   `mount` **[Element][34]** The mount point as Document.Element or String
-   `onlyContent` **[boolean][35]** Only remove the content not the mount point

### boundElement

boundElement method - returns the bound element from identifier

#### Parameters

-   `id` **[string][33]** The identifier (not id attribute) of the element

#### Examples

```javascript
from HTML: <div data-myMountedView="something" id="anything"></div>
from JavaScript: let el = this.boundElement("something");
```

### syncBoundElement

syncBoundElement - Syncs the data of a bound element by firing a change event

#### Parameters

-   `id` **[string][33]** The identifier (not id attribute) of the element

### syncAllBoundElements

syncAllBoundElements - Syncs the data of all bound elements by firing a change events

### addClass

addClass - adds a class to a bount element

#### Parameters

-   `id` **[string][33]** The identifier (not id attribute) of the element
-   `cls` **[string][33]** The class to add

### removeClass

removeClass - remove a class to a bount element

#### Parameters

-   `id` **[string][33]** The identifier (not id attribute) of the element
-   `cls` **[string][33]** The class to remove

### bindModelChange

bindModelChange method - binds the model changes to functions

#### Parameters

-   `func` **func** The function to call when changing (normally render)

### syncModelChange

syncModelChange method - binds the model changes to a specified bound element

#### Parameters

-   `element` **[Element][34]** The element to bind as Document.Element or string

### unbindModelChange

unbindModelChange method - unbinds the model changes to elements

#### Parameters

-   `func` **func** The function to call when changing (normally render)

### unbindModelSync

unbindModelSync method - unbinds the model changes to a specified bound element

#### Parameters

-   `element` **[Element][34]** The element to bind as Document.Element or string

[1]: #directiveview

[2]: #parameters

[3]: #decoratorview

[4]: #parameters-1

[5]: #events

[6]: #events-1

[7]: #initialize

[8]: #parameters-2

[9]: #remove

[10]: #bindingattribute

[11]: #injecttemplate

[12]: #parameters-3

[13]: #removetemplate

[14]: #parameters-4

[15]: #boundelement

[16]: #parameters-5

[17]: #examples

[18]: #syncboundelement

[19]: #parameters-6

[20]: #syncallboundelements

[21]: #addclass

[22]: #parameters-7

[23]: #removeclass

[24]: #parameters-8

[25]: #bindmodelchange

[26]: #parameters-9

[27]: #syncmodelchange

[28]: #parameters-10

[29]: #unbindmodelchange

[30]: #parameters-11

[31]: #unbindmodelsync

[32]: #parameters-12

[33]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[34]: https://developer.mozilla.org/docs/Web/API/Element

[35]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
