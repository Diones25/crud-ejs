import { Router } from 'express';
import productController from '../controllers/productController.js';

const router = Router();

router.get('/', productController.homeRender);
router.get('/list', productController.listRender); 
router.post('/add', productController.create);
router.get('/edit/:id', productController.pageEdit);
router.post('/edit', productController.edit);
router.post('/delete', productController.remove);

export default router; 