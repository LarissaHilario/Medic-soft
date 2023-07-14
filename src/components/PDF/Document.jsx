import React from 'react';
import { Page, Text, Document, Image, StyleSheet, Font } from '@react-pdf/renderer';


Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  
});



// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  image: {
    marginVertical: 0,
    marginHorizontal: 100,
    width:'300px',
    
  },
  text:{
    color:'#4F7FFD',
    fontFamily: 'Oswald'
 
  }
});

// Create Document Component
const MyDocument = () => {
  const name = localStorage.getItem('nombre')
  const lastname=localStorage.getItem('apellido')
  return(
    <Document >
    <Page style={styles.body}>
      <Image src="/logo.png" style={styles.image}/>
      <Text style={styles.text}>Paciente: {name} {lastname}</Text>
      <Text style={styles.text}>Periodo: 11/junio al 18 de junio de 2023</Text>

    </Page>
  </Document>
  )
  
};

export default MyDocument
