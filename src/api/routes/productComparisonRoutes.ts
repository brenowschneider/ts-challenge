import { Router } from 'express';
import { getProductComparison } from '../controllers/productComparisonController';

const router = Router();

router.get('/:consume', getProductComparison);

export default router;