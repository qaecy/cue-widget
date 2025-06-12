# Cue widget
The Cue widget is a simple web-component that runs Cue inside a host application.

### Setup

Below you see a minimal example of how the widget is used in your web app. The individual snippets are described in detail in this section.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Cue widget</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <script
      src="https://cdn.jsdelivr.net/gh/qaecy/cue-widget/main.js"
      type="module"
    ></script>
  </head>
  <body>
    <qaecy-cue fab="true"></qaecy-cue>

    <script>
      // ARRANGE
      const PROJECT_ID = '<MY-PROJECT>';
      const VIEW = 'document-search-simple';
      const OPTIONS = {
        auth: {
          userPwEnabled: true,
          providers: ['microsoft.com', 'google.com'],
          persistence: 'LOCAL',
        },
        config: {
          apiKey: '<API-KEY>',
          appId: '<APP-ID>',
          measurementId: '<MEASUREMENT-ID>'
        },
        hostApp: 'sharepoint',
        fab: {
          containerWidth: '400px',
          containerHeight: '70vh',
        },
      };

      const container = document.getElementById('container');
      const widget = document.getElementsByTagName('qaecy-cue')[0];

      // APPLY
      widget.setAttribute('view', VIEW);
      widget.setAttribute('pid', PROJECT_ID);

      // Load options once the widget is ready
      const timer = setInterval(() => {
        try {
          widget.options(OPTIONS);
          clearInterval(timer);
        } catch (err) {
          //
        }
      }, 5);
    </script>
  </body>
</html>
```

#### 1. Load web component
The latest version of the web component is loaded from cdn `https://cdn.jsdelivr.net/gh/qaecy/cue-widget/main.js`. 

It is recommended to specify a specific version like `https://cdn.jsdelivr.net/gh/qaecy/cue-widget@v0.0.1/main.js`

```html
<script
  src="https://cdn.jsdelivr.net/gh/qaecy/cue-widget/main.js"
  type="module"
></script>
```

#### 2. Add HTML tag
The `<qaecy-cue>` HTML tag is now available. If the attribute *fab* is set to true it will load as a Floating Action Button (FAB) and if not, Cue will scale to fit its parent element.
```html
<qaecy-cue fab="true"></qaecy-cue>
```

#### 3. Specify required attributes
*pid* (project id) and *view* are required attributes. These can just be hardcoded like `<qaecy-cue fab="true" pid="<MY-PROJECT>" view="document-search"></qaecy-cue>` but in a typical application they will be set dynamically:

```javascript
const widget = document.getElementsByTagName('qaecy-cue')[0];
widget.setAttribute('view', 'document-search');
widget.setAttribute('pid', '<MY-PROJECT>');
```

#### 4. Set options
The widget must be instantiated before options can be set. A hacky way to do this is to try setting the options every 5ms until the widget is available:
```javascript
setInterval(() => {
  try {
    widget.options(OPTIONS);
    clearInterval(timer);
  } catch (err) {
    //
  }
}, 5);
```

Reach out to the QAECY team to get an *<API-KEY>*, *<APP-ID>* and *<MEASUREMENT-ID>*.
