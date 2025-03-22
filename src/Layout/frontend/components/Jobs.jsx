import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase/firestoreConfig";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsSnapshot = await getDocs(collection(db, "jobs"));
        const jobsList = jobsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJobs(jobsList);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-biegeBackground flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Jobs</h2>

      {jobs.length === 0 ? (
        <p className="text-gray-600">No jobs available.</p>
      ) : (
        <ul className="w-full max-w-3xl space-y-4">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-3"
            >
              <h3 className="text-2xl font-semibold text-blue-900">{job.title}</h3>
              <p className="text-gray-700">{job.jobDescription}</p>
              <h2 className="text-gray-700 text-xl">Requirment</h2>
              <p className="text-gray-700">{job.requirment}</p>
              <h2 className="text-gray-700 text-xl">Salary</h2>
              <p className="text-gray-700">{job.Salary}</p>
              <h2 className="text-gray-700 text-xl">Hours</h2>
              <p className="text-gray-700">{job.hours}</p>
              <button
                onClick={() => navigate(`/uploadResume/${job.id}/${job.title}`)}
                className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Apply Now
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Jobs;
