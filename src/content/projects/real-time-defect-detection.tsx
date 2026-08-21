export const meta = {
  slug: "real-time-defect-detection",
  title: "Real-time Defect Detection",
  category: "COMPUTER VISION",
  year: "2025",
  description: "A lightweight CNN that flags surface defects from a live camera feed in under 30ms per frame, deployed on edge hardware.",
  tags: ["PyTorch", "OpenCV", "ONNX", "FastAPI"],
};

export default function RealTimeDefectDetectionProject() {
  return (
    <>
      <p className="text-gray-600 leading-relaxed">
        Manual quality inspection is slow and inconsistent. The goal was a
        model that catches surface defects in real time without expensive
        GPUs on site.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        I started with a MobileNetV3 backbone and a small detection head,
        then trained on a curated dataset of ~12k annotated frames.
      </p>
    </>
  );
}