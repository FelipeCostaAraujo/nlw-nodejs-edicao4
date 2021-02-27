import { Router } from 'express';
import { AnswerController } from './controllers/answer-controller';
import { AuthController } from './controllers/auth-controller';
import { NpsController } from './controllers/nps-controller';
import { SendMailController } from './controllers/send-mail-controller';
import { SurveysController } from './controllers/surveys-controller';
import { UserController } from './controllers/user-controller';
import AuthService from './services/auth-service';

const router = Router();
const authService = new AuthService()

const userController = new UserController();
const surveysController = new SurveysController();
const sendMainController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();
const authController = new AuthController();

router.get('/surveys', surveysController.show);
router.get('/answers/:value', answerController.execute);
router.get('/nps/:survey_id', npsController.execute);

router.post('/users', userController.create);
router.post('/surveys', authService.authorize, surveysController.create);
router.post('/auth', authController.auth);
router.post('/sendMain', sendMainController.execute);


export { router };
