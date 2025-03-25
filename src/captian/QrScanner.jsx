import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import QrIcon from "../assets/scanner.png";

const QrScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    let qrScanner;

    const startScanner = async () => {
      try {
        const devices = await Html5Qrcode.getCameras();
        if (devices.length > 0) {
          const backCameraId = devices[devices.length - 1].id; // Select the last camera (usually back camera)

          qrScanner = new Html5QrcodeScanner("qr-reader", {
            fps: 10,
            qrbox: { width: 250, height: 250 },
            supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
            facingMode: { exact: "environment" }, // Forces back camera
          });

          qrScanner.render(
            (decodedText) => {
              setScanResult(decodedText);
              setIsScanning(false);
              qrScanner.clear();
            },
            (error) => console.warn(error)
          );
        } else {
          console.warn("No camera devices found.");
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    if (isScanning) {
      startScanner();
    }

    return () => {
      if (qrScanner) qrScanner.clear();
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
