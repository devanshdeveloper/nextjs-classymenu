import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding : 30
  },
  section: {},
});

function MenuPDF({ text }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{text}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default MenuPDF;
