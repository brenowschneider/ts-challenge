import express, { RequestHandler, Request, Response, NextFunction } from 'express';
import productComparisonRoutes from './api/routes/productComparisonRoutes';
const app = express();
const router = express.Router();

app.use('/api/comparison', productComparisonRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(4001, () => {
  console.log('Server started...');
});
