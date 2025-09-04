import {Router} from 'express';
import { getCourts, getCourt, createCourt, updateCourt, deleteCourt}  from './court.controllers';
import { upload } from '../config/multer.config';

const router = Router();

router.get('/courts', getCourts);
router.get('/court/:id', getCourt);
router.post('/court', upload.single("image_url"), createCourt);
router.put('/court/:id', upload.single("image_url"), updateCourt);
router.delete('/court/:id', deleteCourt);


export default router;