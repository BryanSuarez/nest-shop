import { v4 as uuidv4 } from 'uuid';

export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error | null, filename: string) => void,
) => {
  const fileExtension = file.mimetype.split('/')[1];
  const fileName = `${uuidv4()}.${fileExtension}`;
  callback(null, fileName);
};
