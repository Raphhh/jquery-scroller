# jQuery Scroller

A jQuery plugin that scrolls to an element. It is simple to setup. It can be added to any existing page without the need to change the HTML mark up.

## A. Install

1) Include a jQuery core library in your html.
For example, use this cdn:
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```

By default, Scroller needs also the jQuery easing.

For example, use this cdn:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
```


2) [Download the Scroller library](https://github.com/Raphhh/jquery-scroller/archive/master.zip), and include *dist/jquery.scroller.min.js* in your html.
For example:
```html
<script src="asset/raphhh/jquery-scroller/dist/jquery.scroller.min.js"></script>
```

3) Call the scroller plugin for all the anchors from which you want to scroll.
For example:
```html
<script>
    $(function(){
        $('a').scroller();
    });
</script>
```

Note that the anchors must specify in their href attribute the id of the element to scroll to.

## B. Options

$.fn.scroller accepts all the options of jQuery animate. [See the jQuery documentation](http://api.jquery.com/animate/).
