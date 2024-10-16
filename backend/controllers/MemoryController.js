import MemoryModel from '../Models/memoriesdb.js';

export const createMemory = async (req, res) => {
    try {
        const body = req.body;
        body.picture = req.file ? req.file?.path : null;
        const mem = new MemoryModel(body);
        await mem.save();
        res.status(201).json({
            message: "Memory created",
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: err
        });
    }
};

export const getAllMemories = async (req, res) => {
    try {
        const mems = await MemoryModel.find({});
        res.status(200).json({
            message: "Memories retrieved",
            success: true,
            data: mems
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: err
        });
    }
};


export const getMemoryById = async (req, res) => {
    try {
        const {id} = req.params;
        const mem =     await MemoryModel.findOne({_id:id});
        res.status(200).json({
            message: "Get memory Details",
            success: true,
            data: mem
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: err
        });
    }
};

