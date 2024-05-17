import { Injectable, Logger } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { Readable } from 'stream';

@Injectable()
export class FileUploadService {
  async uploadFile(file: Express.Multer.File): Promise<string> {
    const storage = new Storage({
      keyFilename: process.env.GCP_SERVICE_ACCOUNT_KEY,
    });

    const bufferStream = new Readable();
    bufferStream.push(file.buffer);
    bufferStream.push(null);

    const fileDestination = `${Date.now()}_${file.originalname}`;
    const uploadStream = storage.bucket(process.env.GCP_CLOUD_STORAGE_BUCKET_NAME).file(process.env.GCP_CLOUD_STORAGE_BUCKET_PATH + fileDestination).createWriteStream({
      resumable: false,
      metadata: {
        contentType: file.mimetype,
      },
      predefinedAcl: 'publicRead',
    });

    return new Promise<string>((resolve, reject) => {
      uploadStream.on('error', (error) => {
        reject(error);
      });

      uploadStream.on('finish', () => {
        resolve(`https://storage.googleapis.com/${process.env.GCP_CLOUD_STORAGE_BUCKET_NAME}/investigator/${fileDestination}`);
      });

      bufferStream.pipe(uploadStream);
    });
  }
}