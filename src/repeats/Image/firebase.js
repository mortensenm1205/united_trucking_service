import { storage } from '../../config/firebase';

export const downloadHeadImage = (image_name) => {
    if (image_name === "/") {
        return storage.ref().child("home.jpg").getDownloadURL();
    } else {
        return storage.ref().child(image_name + ".jpg").getDownloadURL();
    }
}

export const downloadImage = (image_name) => {
    switch (image_name) {
        case "/":
            return storage.ref().child("main_home_image.jpg").getDownloadURL();
        case "/about":
            return storage.ref().child("main_about_image.jpg").getDownloadURL();
        case "/contact":
            return storage.ref().child("main_contact_image.jpg").getDownloadURL();
        case "/services":
            return storage.ref().child("main_services_image.jpg").getDownloadURL();
        default:
            return image_name;
    }
}