import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firestoreConfig";

const AddJobForm = () => {
  // create state variables to store form input values
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requirment, setRequirment] = useState("");
  const [salary, setSalary] = useState("");
  const [hours, setHours] = useState("");

  // handle job posting function
  const postJob = async () => {
    // check if required fields are filled
    if (!jobTitle || !jobDescription || !requirment || !salary) {
      alert("Please Fill out necessary fields.");
      return;
    }

    try {
      // add job posting details to firestore collection
      const jobRef = await addDoc(collection(db, "jobs"), {
        title: jobTitle,
        jobDescription: jobDescription,
        requirment: requirment,
        salary: salary,
        hours: hours,
        postedAt: new Date(), 
      });

      console.log("Job posted successfully! Job ID:", jobRef.id);
      alert("Job posted successfully!");
      
      // reset form fields
      setJobTitle("");
      setJobDescription("");
      setRequirment("");
      setSalary("");
      setHours("");
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-biegeBackground p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Post a Job
        </h2>

        {/* job title input */}
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* job description input */}
        <textarea
          placeholder="Job Description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {/* job requirement input */}
        <textarea
          placeholder="Job Requirement"
          value={requirment}
          onChange={(e) => setRequirment(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {/* salary input */}
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {/* working hours input */}
        <input
          type="text"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* submit button */}
        <button
          onClick={postJob}
          className="w-full bg-buttonPrimary text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Post Job
        </button>
      </div>
    </div>
  );
};

export default AddJobForm;
