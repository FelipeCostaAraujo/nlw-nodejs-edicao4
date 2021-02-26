import { Router } from 'express';
import { AnswerController } from './controllers/answer-controller';
import { NpsController } from './controllers/nps-controller';
import { SendMailController } from './controllers/send-mail-controller';
import { SurveysController } from './controllers/surveys-controller';
import { UserController } from './controllers/user-controller';

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMainController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.get('/surveys', surveysController.show)
router.get('/answers/:value', answerController.execute);

router.post('/users', userController.create);
router.post('/surveys', surveysController.create)

router.post('/sendMain', sendMainController.execute)

router.get('/nps/:survey_id', npsController.execute)

export { router };
