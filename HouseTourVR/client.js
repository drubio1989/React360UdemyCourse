// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const buttonsPanel = new Surface(
    400,
    550,
    Surface.SurfaceShape.Flat
  );

  buttonsPanel.setAngle(
    -0.6,
    0.1
  )

  const infoPanel = new Surface(
    400,
    550,
    Surface.SurfaceShape.Flat
  );

  infoPanel.setAngle(
    0.6,
    0.1
  )

  r360.renderToSurface(
    r360.createRoot('Buttons', { /* initial props */ }),
    buttonsPanel
  );

  r360.renderToSurface(
    r360.createRoot('InfoPanel', { /* initial props */ }),
    infoPanel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_front_door.jpg'));
}

window.React360 = {init};
