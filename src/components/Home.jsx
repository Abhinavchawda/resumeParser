import React, { useState } from "react";
import axios from "axios";
import { FaFileUpload, FaFileAlt } from "react-icons/fa";

function Home() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file first");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post("http://localhost:5000/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setResult(res.data);
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to upload file. Check console for details.");
        }
    };

    return (
        <div className="min-h-screen">
            {/* Main Content */}
            <main className="flex-1 flex flex-col justify-center items-center py-10">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Upload Your Resume</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <label className="block w-full border border-dashed border-gray-400 rounded-lg p-6 cursor-pointer text-center bg-gray-50 hover:bg-gray-100 transition-colors">
                            <FaFileUpload className="mx-auto text-3xl mb-2 text-blue-600" />
                            <span className="text-gray-600">{file ? file.name : "Choose a file to upload"}</span>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-800 transition-colors"
                        >
                            Upload and Parse
                        </button>
                    </form>

                    {/* Displaying Parsed Result */}
                    {result && (
                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-700">Parsed Information:</h3>
                            <div className="bg-gray-100 p-4 mt-4 rounded-md text-gray-700">
                                <p><strong>Name:</strong> {result.name}</p>
                                <p><strong>Email:</strong> {result.email}</p>
                                <p><strong>Phone:</strong> {result.phone}</p>
                                <p><strong>Pincode:</strong> {result.pincode}</p>
                                <p><strong>CGPA:</strong> {result.cgpa}</p>
                                <p><strong>Work Experience:</strong> {result.workExperience}</p>
                                <p><strong>College/Institute:</strong> {result.college}</p>
                                <p><strong>Projects:</strong> {result.projects}</p>
                                <p><strong>Awards:</strong> {result.awards}</p>
                                <p><strong>Languages:</strong> {result.languages.join(", ")}</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Home;