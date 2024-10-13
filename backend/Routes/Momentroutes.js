import express from 'express';
import createMemory from '../controllers/MemoryController.js';

// Create a new router instance
const router = express.Router();

// Define your route
router.get("/", (req, res) => {
    res.send("Get All Employees");
});

router.post("/",createMemory)

// Export the router as default
export default router;
