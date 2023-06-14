var parameters = {
  appName: "classic",
  id: "applet",
  width: 1000,
  height: 700,
  showToolBar: false,
  borderColor: null,
  showMenuBar: true,
  showAlgebraInput: true,
  showResetIcon: true,
  enableLabelDrags: false,
  enableShiftDragZoom: true,
  enableRightClick: false,
  capturingThreshold: null,
  showToolBarHelp: false,
  errorDialogsActive: true,
  useBrowserForJS: false,
//  material_id: "s5kkvsck"
//material_id: "qamjrsms"
//  material_id: "g4wtthhn",
//    material_id: "wtg6mgau"
//huxezptf
  material_id: "ywxqjcne"
};
var parameters2 = {
  appName: "classic",
  id: "applet",
  width: 1000,
  height: 700,
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
//    material_id: "wtg6mgau"
//huxezptf
//  material_id: "ywxqjcne"
};


// true to force web3d (not webSimple)
var applet = new GGBApplet(parameters, true);
var applet2 = new GGBApplet(parameters2, true);

//  when used with Math Apps Bundle, uncomment this:
//  applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.onload = function () {
  applet.inject("applet_container");
  applet2.inject("applet_container_2");
};
