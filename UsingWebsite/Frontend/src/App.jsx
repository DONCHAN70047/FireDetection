import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

export default function LivePredict() {
  const videoRef = useRef(null);
  const [prediction, setPrediction] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const navigate = useNavigate(); 

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();

      const id = setInterval(async () => {
        if (!videoRef.current) return;

        const canvas = document.createElement("canvas");
        canvas.width = 224;
        canvas.height = 224;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(videoRef.current, 0, 0, 224, 224);

        const blob = await new Promise((resolve) =>
          canvas.toBlob(resolve, "image/jpeg")
        );
        const formData = new FormData();
        formData.append("file", blob, "frame.jpg");

        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/detect/`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        setPrediction(data.prediction);
      }, 2000);

      setIntervalId(id);
      setIsRunning(true);
    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  const stopCamera = () => {
    if (intervalId) clearInterval(intervalId);
    setIsRunning(false);
    setPrediction("");

    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };


  const record = () => {
    navigate("/records");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4">
      <div className="w-full max-w-lg bg-gray-950/70 backdrop-blur-lg shadow-2xl rounded-2xl border border-gray-700 p-6 flex flex-col items-center">
        {/* ...............Title................. */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold text-blue-400 mb-4"
        >
          Live Prediction System 🎥
        </motion.h1>

        {/* .......VideoPreview.......... */}
        <motion.video
          ref={videoRef}
          className="rounded-2xl border-4 border-blue-500 shadow-lg mb-4"
          style={{ width: "400px", height: "auto" }}
          autoPlay
          muted
        />

        {/* ...............PredictionOutput................. */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-gray-800 text-center py-3 rounded-xl shadow-inner mb-4"
        >
          <h2 className="text-lg font-bold tracking-wide">
            Prediction:{" "}
            <span className="text-green-400">
              {prediction || "Waiting..."}
            </span>
          </h2>
        </motion.div>

        {/* ...............Controls................. */}
        <div className="flex gap-4">
          {!isRunning ? (
            <div className="flex gap-4">
              <button
                onClick={startCamera}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow-lg transition-all duration-300"
              >
                ▶ Start
              </button>
              <button
                onClick={record} 
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-xl shadow-lg transition-all duration-300"
              >
                ⏺ Record Data
              </button>
            </div>
          ) : (
            <button
              onClick={stopCamera}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl shadow-lg transition-all duration-300"
            >
              ⏹ Stop
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
