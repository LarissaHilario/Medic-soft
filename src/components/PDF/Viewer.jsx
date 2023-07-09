import React from "react"
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "./Document";

function Viewer() {
  return (
    <PDFViewer className="viewer" width='1920px' height='929px' >
      <MyDocument />
    </PDFViewer>
  )
}

export default Viewer