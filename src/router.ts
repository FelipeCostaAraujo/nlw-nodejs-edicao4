import { Router } from 'express';
import { SendMailController } from './controllers/send-mail-controller';
import { SurveysController } from './controllers/surveys-controller';
import UserController from './controllers/user-controller';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMainController = new SendMailController();

router.get('/surveys', surveysController.show)

router.post('/users', userController.create);
router.post('/surveys', surveysController.create)

router.post('/sendMain', sendMainController.execute)

export { router }