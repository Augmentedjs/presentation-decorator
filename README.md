# presentation-decorator
Augmented.js Presentation Decorator (MVVM) View Module

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [DirectiveView](#directiveview)
    -   [Parameters](#parameters)
-   [DecoratorView](#decoratorview)
    -   [Parameters](#parameters-1)
    -   [events](#events)
    -   [events](#events-1)
    -   [initialize](#initialize)
        -   [Parameters](#parameters-2)
    -   [remove](#remove)
    -   [bindingAttribute](#bindingattribute)
    -   [injectTemplate](#injecttemplate)
        -   [Parameters](#parameters-3)
    -   [removeTemplate](#removetemplate)
        -   [Parameters](#parameters-4)
    -   [boundElement](#boundelement)
        -   [Parameters](#parameters-5)
        -   [Examples](#examples)
    -   [syncBoundElement](#syncboundelement)
        -   [Parameters](#parameters-6)
    -   [syncAllBoundElements](#syncallboundelements)
    -   [addClass](#addclass)
        -   [Parameters](#parameters-7)
    -   [removeClass](#removeclass)
        -   [Parameters](#parameters-8)
    -   [bindModelChange](#bindmodelchange)
        -   [Parameters](#parameters-9)
    -   [syncModelChange](#syncmodelchange)
        -   [Parameters](#parameters-10)
    -   [unbindModelChange](#unbindmodelchange)
        -   [Parameters](#parameters-11)
    -   [unbindModelSync](#unbindmodelsync)
        -   [Parameters](#parameters-12)

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

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Binding attribute name

### injectTemplate

injectTemplate method - Injects a template at a mount point

#### Parameters

-   `template` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The template to inject
-   `mount` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** The mount point as Document.Element or String

### removeTemplate

removeTemplate method - Removes a template (children) at a mount point

#### Parameters

-   `mount` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** The mount point as Document.Element or String
-   `onlyContent` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Only remove the content not the mount point

### boundElement

boundElement method - returns the bound element from identifier

#### Parameters

-   `id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The identifier (not id attribute) of the element

#### Examples

```javascript
from HTML: <div data-myMountedView="something" id="anything"></div>
from JavaScript: let el = this.boundElement("something");
```

### syncBoundElement

syncBoundElement - Syncs the data of a bound element by firing a change event

#### Parameters

-   `id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The identifier (not id attribute) of the element

### syncAllBoundElements

syncAllBoundElements - Syncs the data of all bound elements by firing a change events

### addClass

addClass - adds a class to a bount element

#### Parameters

-   `id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The identifier (not id attribute) of the element
-   `cls` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The class to add

### removeClass

removeClass - remove a class to a bount element

#### Parameters

-   `id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The identifier (not id attribute) of the element
-   `cls` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The class to remove

### bindModelChange

bindModelChange method - binds the model changes to functions

#### Parameters

-   `func` **func** The function to call when changing (normally render)

### syncModelChange

syncModelChange method - binds the model changes to a specified bound element

#### Parameters

-   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** The element to bind as Document.Element or string

### unbindModelChange

unbindModelChange method - unbinds the model changes to elements

#### Parameters

-   `func` **func** The function to call when changing (normally render)

### unbindModelSync

unbindModelSync method - unbinds the model changes to a specified bound element

#### Parameters

-   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** The element to bind as Document.Element or string
