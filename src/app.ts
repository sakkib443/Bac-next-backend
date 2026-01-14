import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import { UserRoutes } from './app/modules/user/user.route';
import { StudentRoutes } from './app/modules/student/student.route';
import { MentorRoutes } from './app/modules/mentor/mentor.routes';
import { CourseRoutes } from './app/modules/courses/course.routes';
import { CategoryRoutes } from './app/modules/courseCategory/courseCategory.routes';
import { AuthRoutes } from './app/modules/auth/auth.routes';
import { CertificateRoutes } from './app/modules/certificate/certificate.routes';
import { BatchRoutes } from './app/modules/batch/batch.routes';
import { BlogRoutes } from './app/modules/blog/blog.routes';
import { ContactRoutes } from './app/modules/contact/contact.routes';
import { SettingsRoutes } from './app/modules/settings/settings.routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';


const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/user', UserRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/students', StudentRoutes);
app.use('/api/mentors', MentorRoutes);
app.use('/api/courses', CourseRoutes);
app.use('/api/categories', CategoryRoutes);
app.use('/api/certificate', CertificateRoutes);
app.use('/api/batch', BatchRoutes);
app.use('/api/blogs', BlogRoutes);
app.use('/api/contacts', ContactRoutes);
app.use('/api/settings', SettingsRoutes);

// fixed route
const getAController = (req: Request, res: Response) => {
  const a = 'Server is running successfully';
  res.status(200).json({ a });
};

app.get('/', getAController);

// global error handler (should be after all routes)
app.use(globalErrorHandler);

export default app;

