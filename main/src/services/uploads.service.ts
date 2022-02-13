import { IUploadInfo } from "../data";
import { UploadDataMock } from "./../mocks/upload.mock";

class UploadService {
  getUserUploads(): IUploadInfo[] {
    return [UploadDataMock];
  }
}

export const uploadService = new UploadService();
