// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const cylinderSurface = new Surface(
    800, /* width */
    450, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );

  r360.renderToSurface(
    r360.createRoot('Scene', { /* initial props */ }),
    cylinderSurface,
    'main'
  );
}

window.React360 = {init};
