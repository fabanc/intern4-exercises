# Description

This is a demonstration on how to set-up TypeScript and Intern to run multiple unit test suite, within a browser or a the command line. In addition the the previous exercise, we are now calling our unit test on a module that leverages the Esri JavaScript 4.x API.

# Learning points

## Make intern configuration file points to the packages used by dojo2 and the Esri API.

One of the main change is the list of packages we are now asking the intern loader to load with dojo2 in our configuration file `intern.json`

```json
      "packages": [
        { "name": "esri", "location": "https://js.arcgis.com/4.11/esri" },
        {
          "name": "dojo",
          "location": "https://js.arcgis.com/4.11/dojo"
        },
        {
          "name": "dijit",
          "location": "https://js.arcgis.com/4.11/dijit"
        },
        {
          "name": "dojox",
          "location": "https://js.arcgis.com/4.11/dojox"
        },
        {
          "name": "@dojo",
          "location": "https://js.arcgis.com/4.11/@dojo"
        },
        {
          "name": "moment",
          "location": "https://js.arcgis.com/4.11/moment"
        },
        {
          "name": "cldrjs",
          "location": "https://js.arcgis.com/4.11/cldrjs",
          "main": "dist/cldr"
        },
        {
          "name": "globalize",
          "location": "https://js.arcgis.com/4.11/globalize",
          "main": "dist/globalize"
        },
        {
          "name": "maquette",
          "location": "https://js.arcgis.com/4.11/maquette",
          "main": "dist/maquette.umd"
        },
        {
          "name": "maquette-css-transitions",
          "location": "https://js.arcgis.com/4.11/maquette-css-transitions",
          "main": "dist/maquette-css-transitions.umd"
        },
        {
          "name": "maquette-jsx",
          "location": "https://js.arcgis.com/4.11/maquette-jsx",
          "main": "dist/maquette-jsx.umd"
        },
        {
          "name": "tslib",
          "location": "https://js.arcgis.com/4.11/tslib",
          "main": "tslib"
        }
      ]
```

One required step in our configuration file to make sure the moment package does not return any error is adding the following lines:

```json
      "map": {
        "*": {
          "moment/moment": "esri/plugins/moment"
        }
      },
```

## Making a view model component we can test.

If you're not familiar with that model, please check out the API documentation. The idea of a view model compinent is that the code does not contain any UI specific instructions. In my case, I have created the following module that returns the number of layers in a map: `LayersCountViewModel`.

```typescript
class FeatureCountViewModel extends declared(Accessor) {
  @property()
  public view: MapView;

  getCount(): number {
    return this.view.allLayerViews.length;
  }
}
export = FeatureCountViewModel;
```

I have then added a unit test under `tests\unit\LayersCount\LayersCountViewModel.ts`.

Finally, I have added that unit test into the file `all.ts`, that loads all of our unit tests:

```typescript
import "./unit/standalone";
import "./unit/LayersCount/LayersCountViewModel";
```

# Running the tests

The process is exactly the same than in the previous exercises.

## From the command line:

Use the command `npx intern`

## From your browser:

- In your command line, start the local server using `npm run start`
- Go to: http://127.0.0.1:8080/node_modules/intern/

# Thanks

On this section, I owe a big thanks to Rene Rubaclave from Esri Inc for his help in getting moment to load. His GitHub repo is full of valuable information if your using the Esri JavaScript API. Here are few gold mines from him:

- His blog: https://odoe.net. You will even find some information on the view model pattern there: https://odoe.net/blog/view-models-in-arcgis-js-api/
- His github account. Especially this repository: https://github.com/odoe/arcgis-cli-app
