import React from "react";

function Footer() {
  const styles = {
    footer: {
      width: "100%",
      background: "#111111",
      color: "white",
      textAlign: "center",
      padding: "10px 0",
      borderTop: "1px solid #333",
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={{ margin: 0 }}>© 2026 Movies App - All rights reserved</p>
    </footer>
  );
}

export default Footer;