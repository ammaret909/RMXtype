import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function PostFileAsp() {
  // const navigate = useNavigate();
  const [fileAsp, setFileAsp] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e: any) => {
    setFileAsp(e.target.files[0]);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData();
    if (fileAsp) {
      formData.append("file", fileAsp);
    }

    try {
      const response = await fetch(`http://localhost:8080/converts_asp`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // console.log("File uploaded successfully");
        alert("File uploaded successfully");
        window.location.reload();
      } else {
        // console.error("File upload failed");
        alert("File upload failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className=" m-4">
        <button
          type="submit"
          className="btn text-xl"
          onClick={() => {
            navigate("/menu/test");
          }}
        >
          &larr;
        </button>
        <form onSubmit={handleSubmit}>
          <input type="file" className="" onChange={handleFileChange} />
          <button type="submit" className="btn">
            Upload
          </button>
        </form>
      </div>
    </>
  );
}
