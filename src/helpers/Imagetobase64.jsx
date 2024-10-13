const Imagetobase64 = async (image) => {
    const reader = new FileReader();
    
    // Use FileReader to read image as data URL (base64)
    reader.readAsDataURL(image);
    
    const data = await new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result);  // Resolves with base64 string
      reader.onerror = (error) => reject(error);     // Rejects on error
    });
  
    return data;  // Return the base64 data
  };
  
  export default Imagetobase64