import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/surveys-user";

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser>{ }

export { SurveysUsersRepository }