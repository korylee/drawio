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
  await import('../grapheditor/Editor.js');
  await import('../grapheditor/EditorUi.js');
  await mxscript(geBasePath + "/Sidebar.js");
  await mxscript(geBasePath + "/Graph.js");
  await import('../grapheditor/Format.jsx');
  await mxscript(geBasePath + "/Shapes.js");
  await mxscript(geBasePath + "/Actions.js");
  await import('../grapheditor/Menus.js');
  await mxscript(geBasePath + "/Toolbar.js");
  await mxscript(geBasePath + "/Dialogs.js");

  // Loads main classes
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-ActiveDirectory.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Advanced.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-AlibabaCloud.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-AlliedTelesis.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Android.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-ArchiMate.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-ArchiMate3.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Arrows2.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Atlassian.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-AWS.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-AWS3.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-AWS3D.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-AWS4.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-AWS4b.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Azure.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Azure2.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Basic.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Bootstrap.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-BPMN.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-C4.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Cabinet.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Cisco.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Cisco19.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-CiscoSafe.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Citrix.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Citrix2.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Cumulus.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-DFD.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Dynamics365.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-EIP.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Electrical.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-ER.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Floorplan.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Flowchart.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-FluidPower.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-GCP.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-GCP2.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-GCPIcons.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Gmdl.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-IBM.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-IBMCloud.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Infographic.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Ios.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Ios7.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Kubernetes.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-LeanMapping.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Mockup.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-MSCAE.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Network.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Network2.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Office.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-OpenStack.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-PID.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Rack.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Salesforce.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-SAP.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Signs.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Sitemap.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Sysml.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-ThreatModeling.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-UML25.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Veeam.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-Veeam2.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-VVD.js");
  await mxscript(drawDevUrl + "js/diagramly/sidebar/Sidebar-WebIcons.js");

  await mxscript(drawDevUrl + "js/diagramly/util/mxJsCanvas.js");
  await mxscript(drawDevUrl + "js/diagramly/util/mxAsyncCanvas.js");

  await mxscript(drawDevUrl + "js/diagramly/DrawioFile.js");
  await mxscript(drawDevUrl + "js/diagramly/LocalFile.js");
  await mxscript(drawDevUrl + "js/diagramly/LocalLibrary.js");
  await mxscript(drawDevUrl + "js/diagramly/StorageFile.js");
  await mxscript(drawDevUrl + "js/diagramly/StorageLibrary.js");
  await mxscript(drawDevUrl + "js/diagramly/RemoteFile.js");
  await mxscript(drawDevUrl + "js/diagramly/RemoteLibrary.js");
  await mxscript(drawDevUrl + "js/diagramly/EmbedFile.js");
  await mxscript(drawDevUrl + "js/diagramly/Dialogs.js");
  await mxscript(drawDevUrl + "js/diagramly/Editor.js");
  await mxscript(drawDevUrl + "js/diagramly/EditorUi.js");
  await mxscript(drawDevUrl + "js/diagramly/DiffSync.js");
  await mxscript(drawDevUrl + "js/diagramly/Settings.js");
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
  await mxscript(drawDevUrl + "js/diagramly/Menus.js");
  await mxscript(drawDevUrl + "js/diagramly/Pages.js");
  await mxscript(drawDevUrl + "js/diagramly/Trees.js");
  await mxscript(drawDevUrl + "js/diagramly/Minimal.js");
  await mxscript(drawDevUrl + "js/diagramly/DistanceGuides.js");
  await mxscript(drawDevUrl + "js/diagramly/mxRuler.js");
  await mxscript(drawDevUrl + "js/diagramly/mxFreehand.js");
  await mxscript(drawDevUrl + "js/diagramly/P2PCollab.js");
  await mxscript(drawDevUrl + "js/diagramly/DevTools.js");

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
