import { useState, useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import QrIcon from "../assets/scanner.png";

const QrScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanTimedOut, setScanTimedOut] = useState(false);
  const qrScannerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isScanning) {
      setScanTimedOut(false); // Reset timeout message when starting scan
      const qrScanner = new Html5Qrcode("qr-reader");
      qrScannerRef.current = qrScanner;

      qrScanner
        .start(
          { facingMode: "environment" }, // Use back camera
          { fps: 10, qrbox: { width: 300, height: 300 } },
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
        console.warn("QR scanning timed out.");
        setScanTimedOut(true);
        stopScanning(false); // Stop scanning but keep UI visible
      }, 5000);

      return () => {
        clearTimeout(timeoutRef.current);
        if (qrScannerRef.current) {
          qrScannerRef.current.stop().catch(() => {}); // Ensure scanner stops safely
        }
      };
    }
  }, [isScanning]);

  const stopScanning = (hideScanner = true) => {
    clearTimeout(timeoutRef.current);
    if (qrScannerRef.current) {
      qrScannerRef.current
        .stop()
        .then(() => qrScannerRef.current.clear())
        .catch((err) => console.warn("Error stopping scanner:", err));
    }
    if (hideScanner) setIsScanning(false); // Hide only if explicitly asked
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

      {isScanning && (
        <div>
          <div id="qr-reader" style={{ width: "320px", margin: "auto" }}></div>
          {scanTimedOut && (
            <div className="mt-3 text-danger">
              <h5>Scan Timed Out</h5>
              <p>Please try again.</p>
            </div>
          )}
        </div>
      )}

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
