let attemptedUploads = 0;

do{
    console.log("Attempting upload...");
     attemptedUploads ++;
}while( attemptedUploads < 5);
console.log("Upload attempts exceeded maximum");
