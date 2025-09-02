import {Router} from 'express';
import { getCourts, getCourt, createUser, updateUser, deleteUser} from './court.controllers';
import { upload } from '../config/multer.config';

const router = Router();

router.get('/courts', getCourts);
router.get('/court/:id', getCourt);
router.post('/court', upload.single("image_url"), createUser);
router.put('/court/:id', upload.single("image_url"), updateUser);
router.delete('/court/:id', deleteUser);


export default router;