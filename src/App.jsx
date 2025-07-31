import React, { useState } from "react";
import { Captcha } from "react-secure-captcha";
import { Toaster } from "sonner";

export default function App() {
  const [type, setType] = useState("canvas");
  const [length, setLength] = useState(6);
  const [width, setWidth] = useState(180);
  const [height, setHeight] = useState(50);
  const [fontSize, setFontSize] = useState(28);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [bgColor, setBgColor] = useState("#f9f9f9");
  const [textColor, setTextColor] = useState("#333");
  const [noise, setNoise] = useState(30);
  const [autoValidate, setAutoValidate] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(0.4);
  const [placeholder, setPlaceholder] = useState("Enter captcha");
  const [errorMessage, setErrorMessage] = useState("Invalid captcha");
  const [successMessage, setSuccessMessage] = useState("Captcha valid");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleValidation = (isValid) => {
    setIsCaptchaValid(isValid);
  };

  const fontOptions = [
    "Arial",
    "Courier New",
    "Georgia",
    "Tahoma",
    "Verdana",
    "Times New Roman",
    "Comic Sans MS"
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🧪 Captcha Demo</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1rem"
        }}
      >
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="canvas">Canvas</option>
            <option value="math">Math</option>
          </select>
        </label>
        <label>
          Length:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>
        <label>
          Width:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </label>
        <label>
          Font Size:
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
          />
        </label>
        <label>
          Font Family:
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
          >
            {fontOptions.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </label>
        <label>
          BG Color:
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </label>
        <label>
          Text Color:
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>
        <label>
          Noise:
          <input
            type="number"
            value={noise}
            onChange={(e) => setNoise(Number(e.target.value))}
          />
        </label>
        <label>
          Auto Validate:
          <input
            type="checkbox"
            checked={autoValidate}
            onChange={(e) => setAutoValidate(e.target.checked)}
          />
        </label>
        <label>
          Anim Duration:
          <input
            type="number"
            step="0.1"
            value={animationDuration}
            onChange={(e) => setAnimationDuration(Number(e.target.value))}
          />
        </label>
        <label>
          Placeholder:
          <input
            type="text"
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
          />
        </label>
        <label>
          Error Msg:
          <input
            type="text"
            value={errorMessage}
            onChange={(e) => setErrorMessage(e.target.value)}
          />
        </label>
        <label>
          Success Msg:
          <input
            type="text"
            value={successMessage}
            onChange={(e) => setSuccessMessage(e.target.value)}
          />
        </label>
      </div>
      <Toaster />
      <Captcha
        type={type}
        length={length}
        width={width}
        height={height}
        fontSize={fontSize}
        fontFamily={fontFamily}
        backgroundColor={bgColor}
        textColor={textColor}
        noise={noise}
        autoValidate={autoValidate}
        animationDuration={animationDuration}
        placeholder={placeholder}
        errorMessage={errorMessage}
        successMessage={successMessage}
        onValidate={handleValidation}
      />

      <p style={{ marginTop: 16 }}>
        ✅ Captcha Valid: <strong>{isCaptchaValid ? "Yes" : "No"}</strong>
      </p>
    </div>
  );
}
