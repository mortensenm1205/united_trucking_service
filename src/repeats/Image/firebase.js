import { storage } from '../../config/firebase';

export const downloadImage = (image_name) => {
    return storage.ref().child(image_name).getDownloadURL();
}