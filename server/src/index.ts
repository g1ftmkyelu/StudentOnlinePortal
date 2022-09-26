import App from './app/App'
import AdminRoute from './api/v1.0/routes/admin.route'
import ClassRoute from './api/v1.0/routes/class.route'
import ModuleRoute from './api/v1.0/routes/module.route'
import TopicRoute from './api/v1.0/routes/topic.route'
import ProgramRoute from './api/v1.0/routes/program.route'
import AnswerRoute from './api/v1.0/routes/answer.route'
import AnswerSheetRoute from './api/v1.0/routes/answerSheet.route'
import ExamRoute from './api/v1.0/routes/exam.route'
import LecturerRoute from './api/v1.0/routes/lecturer.route'
import QuestionRoute from './api/v1.0/routes/question.route'
import StudentRoute from './api/v1.0/routes/student.route'
import ScoreRoute from './api/v1.0/routes/score.route'

const Application=new App([
    new ModuleRoute(), 
    new TopicRoute(),
    new ProgramRoute(),
    new AnswerRoute(),
    new AnswerSheetRoute(),
    new ExamRoute(), 
    new LecturerRoute(),
    new QuestionRoute(),
    new StudentRoute(),
    new ScoreRoute(),
    new AdminRoute(),
    new ClassRoute(),
])

Application.run()
