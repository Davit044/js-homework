const UPLOAD = Symbol('upload');
const DOWNLOAD = Symbol('download');

class StorageProvider {
    constructor() {
        if (new.target === StorageProvider) {
            throw new Error("Abstract class");
        }
    }
}

class LocalStorageProvider extends StorageProvider {
    [UPLOAD](file) {
        console.log(`Uploading '${file}' to LOCAL storage.`);
    }

    [DOWNLOAD](filename) {
        console.log(`Downloading '${filename}' from LOCAL storage.`);
    }
}

class CloudStorageProvider extends StorageProvider {
    [UPLOAD](file) {
        console.log(`Uploading '${file}' to CLOUD storage...`);
    }

    [DOWNLOAD](filename) {
        console.log(`Downloading '${filename}' from CLOUD storage...`);
    }
}

function useStorage(provider) {
    if (typeof provider[UPLOAD] !== 'function' || typeof provider[DOWNLOAD] !== 'function') {
        throw new Error("Provider must implement upload and download methods.");
    }

    provider[UPLOAD]("file.txt");
    provider[DOWNLOAD]("file.txt");
}

const local = new LocalStorageProvider();
const cloud = new CloudStorageProvider();

useStorage(local);
useStorage(cloud);  
