// components/DrawingArea.js
import { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const DrawingArea = () => {
  const canvasRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState('#3498db'); // Blue as the initial color
  const [selectedWidth, setSelectedWidth] = useState(5); // Initial brush width

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
    });

    // Set initial drawing color and width
    canvas.freeDrawingBrush.color = selectedColor;
    canvas.freeDrawingBrush.width = selectedWidth;

    return () => {
      canvas.dispose();
    };
  }, [selectedColor, selectedWidth]);

  const changeColor = (color) => {
    setSelectedColor(color);
  };

  const changeWidth = (width) => {
    setSelectedWidth(width);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="mb-6 text-center">
        <label className="text-xl font-semibold mb-2">Select Color:</label>
        <div className="flex items-center justify-center">
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => changeColor(e.target.value)}
            className="mr-2 cursor-pointer"
          />
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => changeColor('#e74c3c')}
          >
            Red
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => changeColor('#2ecc71')}
          >
            Green
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => changeColor('#3498db')}
          >
            Blue
          </button>
        </div>
      </div>
      <div className="mb-6 text-center">
        <label className="text-xl font-semibold mb-2">Select Brush Width:</label>
        <input
          type="range"
          value={selectedWidth}
          min="1"
          max="20"
          onChange={(e) => changeWidth(parseInt(e.target.value))}
          className="w-64 cursor-pointer"
        />
      </div>
      <canvas
        ref={canvasRef}
        className="border border-gray-300 rounded-lg"
        width={800}
        height={600}
        style={{ maxWidth: '100%' }}
      ></canvas>
    </div>
  );
};

export default DrawingArea;
