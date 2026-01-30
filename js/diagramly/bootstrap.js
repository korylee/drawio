export async function Bootstrap() {
  await Promise.all([
    mxscript(drawDevUrl + "js/cryptojs/aes.min.js"),
    mxscript(drawDevUrl + "js/spin/spin.min.js"),
    mxscript(drawDevUrl + "js/deflate/pako.min.js"),
    mxscript(drawDevUrl + "js/deflate/base64.js"),
    mxscript(drawDevUrl + "js/sanitizer/purify.min.js"),
    mxscript(drawDevUrl + "js/rough/rough.min.js"),
    mxscript(drawDevUrl + "js/freehand/perfect-freehand.js"),
  ]);

  // Uses grapheditor from devhost
  await import("../grapheditor/Editor.js");
  await import("../grapheditor/EditorUi.js");
  await mxscript(geBasePath + "/Sidebar.js");
  await mxscript(geBasePath + "/Graph.js");
  await import("../grapheditor/Format.jsx");
  await import("../grapheditor/Shapes.js");
  await import("../grapheditor/Actions.js");
  await import("../grapheditor/Menus.js");
  await mxscript(geBasePath + "/Toolbar.js");
  await mxscript(geBasePath + "/Dialogs.js");

  // Loads main classes
  await Promise.all([
    import("./sidebar/Sidebar.js"),
    import("./sidebar/Sidebar-ActiveDirectory.js"),
    import("./sidebar/Sidebar-Advanced.js"),
    import("./sidebar/Sidebar-AlibabaCloud.js"),
    import("./sidebar/Sidebar-AlliedTelesis.js"),
    import("./sidebar/Sidebar-Android.js"),
    import("./sidebar/Sidebar-ArchiMate.js"),
    import("./sidebar/Sidebar-ArchiMate3.js"),
    import("./sidebar/Sidebar-Arrows2.js"),
    import("./sidebar/Sidebar-Atlassian.js"),
    import("./sidebar/Sidebar-AWS.js"),
    import("./sidebar/Sidebar-AWS3.js"),
    import("./sidebar/Sidebar-AWS3D.js"),
    import("./sidebar/Sidebar-AWS4.js"),
    import("./sidebar/Sidebar-AWS4b.js"),
    import("./sidebar/Sidebar-Azure.js"),
    import("./sidebar/Sidebar-Azure2.js"),
    import("./sidebar/Sidebar-Basic.js"),
    import("./sidebar/Sidebar-Bootstrap.js"),
    import("./sidebar/Sidebar-BPMN.js"),
    import("./sidebar/Sidebar-C4.js"),
    import("./sidebar/Sidebar-Cabinet.js"),
    import("./sidebar/Sidebar-Cisco.js"),
    import("./sidebar/Sidebar-Cisco19.js"),
    import("./sidebar/Sidebar-CiscoSafe.js"),
    import("./sidebar/Sidebar-Citrix.js"),
    import("./sidebar/Sidebar-Citrix2.js"),
    import("./sidebar/Sidebar-Cumulus.js"),
    import("./sidebar/Sidebar-DFD.js"),
    import("./sidebar/Sidebar-Dynamics365.js"),
    import("./sidebar/Sidebar-EIP.js"),
    import("./sidebar/Sidebar-Electrical.js"),
    import("./sidebar/Sidebar-ER.js"),
    import("./sidebar/Sidebar-Floorplan.js"),
    import("./sidebar/Sidebar-Flowchart.js"),
    import("./sidebar/Sidebar-FluidPower.js"),
    import("./sidebar/Sidebar-GCP.js"),
    import("./sidebar/Sidebar-GCP2.js"),
    import("./sidebar/Sidebar-GCPIcons.js"),
    import("./sidebar/Sidebar-Gmdl.js"),
    import("./sidebar/Sidebar-IBM.js"),
    import("./sidebar/Sidebar-IBMCloud.js"),
    import("./sidebar/Sidebar-Infographic.js"),
    import("./sidebar/Sidebar-Ios.js"),
    import("./sidebar/Sidebar-Ios7.js"),
    import("./sidebar/Sidebar-Kubernetes.js"),
    import("./sidebar/Sidebar-LeanMapping.js"),
    import("./sidebar/Sidebar-Mockup.js"),
    import("./sidebar/Sidebar-MSCAE.js"),
    import("./sidebar/Sidebar-Network.js"),
    import("./sidebar/Sidebar-Network2.js"),
    import("./sidebar/Sidebar-Office.js"),
    import("./sidebar/Sidebar-OpenStack.js"),
    import("./sidebar/Sidebar-PID.js"),
    import("./sidebar/Sidebar-Rack.js"),
    import("./sidebar/Sidebar-Salesforce.js"),
    import("./sidebar/Sidebar-SAP.js"),
    import("./sidebar/Sidebar-Signs.js"),
    import("./sidebar/Sidebar-Sitemap.js"),
    import("./sidebar/Sidebar-Sysml.js"),
    import("./sidebar/Sidebar-ThreatModeling.js"),
    import("./sidebar/Sidebar-UML25.js"),
    import("./sidebar/Sidebar-Veeam.js"),
    import("./sidebar/Sidebar-Veeam2.js"),
    import("./sidebar/Sidebar-VVD.js"),
    import("./sidebar/Sidebar-WebIcons.js"),
  ]);

  await mxscript(drawDevUrl + "js/diagramly/util/mxJsCanvas.js");
  await mxscript(drawDevUrl + "js/diagramly/util/mxAsyncCanvas.js");

  await import("../diagramly/DrawioFile.js");
  await import("../diagramly/LocalFile.js");
  await import("../diagramly/LocalLibrary.js");
  await import("../diagramly/StorageFile.js");
  await mxscript(drawDevUrl + "js/diagramly/StorageLibrary.js");
  await mxscript(drawDevUrl + "js/diagramly/RemoteFile.js");
  await mxscript(drawDevUrl + "js/diagramly/RemoteLibrary.js");
  await mxscript(drawDevUrl + "js/diagramly/EmbedFile.js");
  await mxscript(drawDevUrl + "js/diagramly/Dialogs.js");
  await mxscript(drawDevUrl + "js/diagramly/Editor.js");
  await import("../diagramly/EditorUi.js");
  await import("../diagramly/DiffSync.js");
  await import("../diagramly/Settings.js");
  await mxscript(drawDevUrl + "js/diagramly/DrawioFilePolling.js");
  await mxscript(drawDevUrl + "js/diagramly/DrawioFileSync.js");

  //Comments
  await mxscript(drawDevUrl + "js/diagramly/DrawioComment.js");
  await mxscript(drawDevUrl + "js/diagramly/DriveComment.js");

  // Excluded in base.min.js
  await mxscript(drawDevUrl + "js/diagramly/DrawioClient.js");
  await mxscript(drawDevUrl + "js/diagramly/DrawioUser.js");
  await mxscript(drawDevUrl + "js/diagramly/UrlLibrary.js");
  await mxscript(drawDevUrl + "js/diagramly/DriveFile.js");
  await mxscript(drawDevUrl + "js/diagramly/DriveLibrary.js");
  await mxscript(drawDevUrl + "js/diagramly/DriveClient.js");
  await mxscript(drawDevUrl + "js/diagramly/DropboxFile.js");
  await mxscript(drawDevUrl + "js/diagramly/DropboxLibrary.js");
  await mxscript(drawDevUrl + "js/diagramly/DropboxClient.js");
  await mxscript(drawDevUrl + "js/diagramly/GitHubFile.js");
  await mxscript(drawDevUrl + "js/diagramly/GitHubLibrary.js");
  await mxscript(drawDevUrl + "js/diagramly/GitHubClient.js");
  await mxscript(drawDevUrl + "js/diagramly/OneDriveFile.js");
  await mxscript(drawDevUrl + "js/diagramly/OneDriveLibrary.js");
  await mxscript(drawDevUrl + "js/diagramly/OneDriveClient.js");
  await mxscript(drawDevUrl + "js/onedrive/mxODPicker.js");
  await mxscript(drawDevUrl + "js/diagramly/TrelloFile.js");
  await mxscript(drawDevUrl + "js/diagramly/TrelloLibrary.js");
  await mxscript(drawDevUrl + "js/diagramly/TrelloClient.js");
  await mxscript(drawDevUrl + "js/diagramly/GitLabFile.js");
  await mxscript(drawDevUrl + "js/diagramly/GitLabLibrary.js");
  await mxscript(drawDevUrl + "js/diagramly/GitLabClient.js");

  await import("./App.jsx");
  await import("./Menus.js");
  await mxscript(drawDevUrl + "js/diagramly/Pages.js");
  await mxscript(drawDevUrl + "js/diagramly/Trees.js");
  await mxscript(drawDevUrl + "js/diagramly/Minimal.js");
  await mxscript(drawDevUrl + "js/diagramly/DistanceGuides.js");
  await mxscript(drawDevUrl + "js/diagramly/mxRuler.js");
  await mxscript(drawDevUrl + "js/diagramly/mxFreehand.js");
  await mxscript(drawDevUrl + "js/diagramly/P2PCollab.js");
  await import("./DevTools.js");

  if (!window.DRAWIO_PUBLIC_BUILD) {
    await mxscript(drawDevUrl + "js/diagramly/Simple.js");
    await mxscript(drawDevUrl + "js/diagramly/vsdx/VsdxExport.js");
  }

  await mxscript(drawDevUrl + "js/mermaid/mermaid2drawio.js");

  // Vsdx/vssx support
  //   await mxscript(drawDevUrl + "js/diagramly/vsdx/mxVsdxCanvas2D.js");
  await mxscript(drawDevUrl + "js/diagramly/vsdx/bmpDecoder.js");
  await mxscript(drawDevUrl + "js/diagramly/vsdx/importer.js");
  await mxscript(drawDevUrl + "js/jszip/jszip.min.js");

  // GraphMl Import
  await mxscript(drawDevUrl + "js/diagramly/graphml/mxGraphMlCodec.js");

  // Org Chart Layout
  if (urlParams["orgChartDev"] == "1") {
    await mxscript(drawDevUrl + "js/orgchart/bridge.min.js");
    await mxscript(drawDevUrl + "js/orgchart/bridge.collections.min.js");
    await mxscript(drawDevUrl + "js/orgchart/OrgChart.Layout.min.js");
    await mxscript(drawDevUrl + "js/orgchart/mxOrgChartLayout.js");
  }

  // Miro Import
  await mxscript(drawDevUrl + "js/diagramly/miro/MiroImporter.js");
}

export default Bootstrap;
