import FrontendLayout from "../Layout/frontend/FrontendLayout";
import About from "../Layout/frontend/components/About";
import Contact from "../Layout/frontend/components/Contact";
import Jobs from "../Layout/frontend/components/Jobs";
import UploadPDF from "../Layout/frontend/components/UploadPDF";
import ProtectedRoute from "../routes/ProtectedRoute"; // Import ProtectedRoute

const Frontend = {
    element: <FrontendLayout />,
    children: [
        {
            path: "/frontendAbout",
            element: (
                <ProtectedRoute>
                    <About />
                </ProtectedRoute>
            ),
        },
        {
            path: "/uploadResume/:jobId/:jobTitle",
            element: <UploadPDF />,
        },
        {
            path: "/contact",
            element: (
                <ProtectedRoute>
                    <Contact />
                </ProtectedRoute>
            ),
        },
        {
            path: "/jobs",
            element: (
                <ProtectedRoute>
                    <Jobs />
                </ProtectedRoute>
            ),
        },
    ],
};

export default Frontend;
