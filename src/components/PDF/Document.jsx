import React from 'react';
import { Page, Text, Document } from '@react-pdf/renderer';




// Create styles


// Create Document Component
const MyDocument = () => (
  <Document >
    <Page>
      <Text>Paciente: Aylin Malpica</Text>
      <Text>Periodo: 11/junio al 18 de junio de 2023</Text>
    </Page>
  </Document>
);

export default MyDocument
