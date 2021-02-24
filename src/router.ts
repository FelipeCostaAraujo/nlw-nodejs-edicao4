import { Router } from 'express';
import { SurveysController } from './controllers/surveys-controller';
import UserController from './controllers/user-controller';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();


router.get('/surveys', surveysController.show)

router.post('/users', userController.create);
router.post('/surveys', surveysController.create)

export { router }