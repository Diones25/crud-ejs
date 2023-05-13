const { Router } = require('express');
const productController = require('../controllers/productController.js');

const router = Router();

router.get('/', productController.homeRender);
router.get('/list', productController.listRender); 
router.post('/add', productController.create);
router.get('/edit/:id', productController.pageEdit);
router.post('/edit', productController.edit);
router.post('/delete', productController.remove);

module.exports = router; 