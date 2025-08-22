import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job", // if you have a Job model
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // applicant
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    qualification: { type: String, required: true },
    percentage: { type: String, required: true },
    address: { type: String, required: true },
    coverLetter: { type: String },
    resumeUrl: { type: String, required: true },
    publicId: { type: String }, // from Cloudinary, useful for delete
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
