import express, {
  Request,
  Response,
  NextFunction,
} from 'express';
import productComparisonRoutes from './api/routes/productComparisonRoutes';
const app = express();
const router = express.Router();

app.use('/api/comparison', productComparisonRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message:
      'Something went wrong, please review the api endpoint before attempting to make another request. If the problem persists please contact the system administrator',
  });
});

app.listen(4001, () => {
  console.log('Server started...');
});
