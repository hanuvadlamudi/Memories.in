import express from 'express';
import { createMemory, getAllMemories, getMemoryById } from '../controllers/MemoryController.js'; // Use named import
import cloudinaryFileUploader from '../Middlewares/FileUploader.js';

const router = express.Router();

// Define routes
router.post("/", cloudinaryFileUploader.single('picture'), createMemory);
router.get("/", getAllMemories);
router.get("/:id",getMemoryById);

// Export the router as default
export default router;
