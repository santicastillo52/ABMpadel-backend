import { Court } from '../entities/court';
export const getCourts = async (req, res) => {
    try {
        const courts = await Court.find();
        res.status(200).json(courts);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
export const getCourt = async (req, res) => {
    try {
        const { id } = req.params;
        const court = await Court.findOneBy({ id: parseInt(id) });
        if (!court) {
            return res.status(404).json({ message: 'La cancha no existe.' });
        }
        return res.status(200).json(court);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
export const createCourt = async (req, res) => {
    try {
        const { name, wall_type, court_type, schedules } = req.body;
        const image_url = req.file ? `/uploads/${req.file.filename}` : "urlimg";
        console.log(schedules);
        const existingCourt = await Court.findOneBy({ name: name });
        if (existingCourt) {
            return res.status(409).json({ message: 'La cancha ya existe.' });
        }
        const court = new Court();
        court.name = name;
        court.wall_type = wall_type;
        court.court_type = court_type;
        court.image_url = image_url;
        court.schedules = JSON.parse(schedules || '{}');
        await court.save();
        return res.status(201).json(court);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
export const updateCourt = async (req, res) => {
    try {
        const { id } = req.params;
        const court = await Court.findOneBy({ id: parseInt(id) });
        if (!court) {
            return res.status(404).json({ message: 'La cancha no existe.' });
        }
        const updateData = { ...req.body };
        if (req.file) {
            updateData.image_url = `/uploads/${req.file.filename}`;
        }
        await Court.update({ id: parseInt(id) }, updateData);
        return res.status(200).json({ message: 'Cancha actualizada correctamente.' });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
export const deleteCourt = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Court.delete({ id: parseInt(id) });
        if (result.affected === 0) {
            return res.status(404).json({ message: 'La cancha no existe.' });
        }
        return res.status(200).json({ message: 'Cancha eliminada correctamente.' });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
//# sourceMappingURL=court.controllers.js.map