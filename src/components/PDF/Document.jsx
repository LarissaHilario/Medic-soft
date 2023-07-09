import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

import ReactDOM from "react-dom";



// Create styles


// Create Document Component
const MyDocument = () => (
  <Document >
    <Page>
      <Text>Hello There</Text>
    </Page>
  </Document>
);

export default MyDocument
