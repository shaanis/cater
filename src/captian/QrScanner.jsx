import { useState, useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import QrIcon from "../assets/scanner.png";

const QrScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const qrScannerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isScanning) {
      const qrCodeScanner = new Html5Qrcode("qr-reader");
      qrScannerRef.current = qrCodeScanner;

      qrCodeScanner
        .start(
          { facingMode: "environment" }, // Use back camera
          { fps: 10, qrbox: { width: 250, height: 250 } },
          (decodedText) => {
            setScanResult(decodedText);
            stopScanning(); // Stop scanning once QR code is detected
          },
          (error) => {
            if (error.name !== "NotFoundException") {
              console.warn("QR Scan Error:", error);
            }
          }
        )
        .catch((err) => console.error("Scanner start error:", err));

      // Auto stop scanning after 1 minute
      timeoutRef.current = setTimeout(() => {
        stopScanning();
        console.warn("QR scanning timed out.");
      }, 5000); // Increased timeout to 1 min

      return () => stopScanning();
    }
  }, [isScanning]);

  const stopScanning = () => {
    clearTimeout(timeoutRef.current);
    if (qrScannerRef.current) {
      qrScannerRef.current
        .stop()
        .then(() => qrScannerRef.current.clear())
        .catch((err) => console.warn("Error stopping scanner:", err));
    }
    setIsScanning(false);
  };

  return (
    <div className="text-center">
      <img
        onClick={() => setIsScanning(true)}
        className="me-3"
        width={"50px"}
        src={QrIcon}
        alt="QR Scanner"
      />

      {isScanning && <div id="qr-reader" style={{ width: "300px", margin: "auto" }}></div>}

      {scanResult && (
        <div className="mt-3">
          <h5>Scanned QR Code:</h5>
          <p>{scanResult}</p>
          <button className="btn btn-success" onClick={() => setIsScanning(true)}>
            Scan Again
          </button>
        </div>
      )}
    </div>
  );
};

export default QrScanner;
