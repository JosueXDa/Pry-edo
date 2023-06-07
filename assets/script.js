var parameters = {
  appName: "classic",
  id: "applet",
  width: 1200,
  height: 800,
  showToolBar: false,
  borderColor: null,
  showMenuBar: false,
  showAlgebraInput: false,
  showResetIcon: true,
  enableLabelDrags: false,
  enableShiftDragZoom: true,
  enableRightClick: false,
  capturingThreshold: null,
  showToolBarHelp: false,
  errorDialogsActive: true,
  useBrowserForJS: false,
//  material_id: "s5kkvsck"
//  material_id: "qamjrsms"
  material_id: "g4wtthhn",
};

// true to force web3d (not webSimple)
var applet = new GGBApplet(parameters, true);
//  when used with Math Apps Bundle, uncomment this:
//  applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.onload = function () {
  applet.inject("applet_container");
};
