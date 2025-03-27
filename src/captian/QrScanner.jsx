import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner, Html5Qrcode, Html5QrcodeScanType } from "html5-qrcode";
import QrIcon from "../assets/scanner.png";

const QrScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [qrScanner, setQrScanner] = useState(null);

  useEffect(() => {
    if (isScanning) {
      const scanner = new Html5QrcodeScanner(
        "qr-reader",
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
        },
        false
      );

      scanner.render(
        (decodedText) => {
          setScanResult(decodedText);
          setIsScanning(false);
          scanner.clear(); // Stop scanning after success
        },
        (error) => {
          console.warn("QR Scan Error:", error);
        }
      );

      setQrScanner(scanner);
    }

    return () => {
      if (qrScanner) {
        qrScanner.clear().catch((err) => console.warn("Error clearing scanner:", err));
      }
    };
  }, [isScanning]);

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
