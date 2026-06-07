import { useState } from "react";
import axios from "axios";

function WritingAssistant() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const improveText = async () => {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/aihelper/",
        { text }
      );

      setResult(res.data.result);
      setText("");
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white border rounded-2xl p-5">

      <h2 className="text-lg font-semibold text-orange-500">
         AI Writing Assistant
      </h2>

      <textarea
        className="w-full mt-3 p-3 text-sm bg-gray-100 rounded-xl outline-none"
        rows="4"
        placeholder="Write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={improveText}
        className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full text-sm"
      >
        {loading ? "Improving..." : "Improve Text"}
      </button>

      {result && (
        <div className="mt-4 bg-gray-50 p-3 rounded-xl text-sm">
          <p className="font-medium text-gray-700">Improved:</p>
          <p className="text-gray-600 mt-1">{result}</p>
        </div>
      )}

    </div>
  );
}

export default WritingAssistant;