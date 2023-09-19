import axios from 'axios';

const plantAnalyse = async (File) => {
  console.log(File, 'FileFile');
  const formData = new FormData();
  formData.append("image", File);

  try {
    const response = await axios.post("http://127.0.0.1:5000/submit", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.status === 200) {
      const responseData = response.data;
      console.log(responseData, 'responseData');

      return responseData
    } else {
      console.error("Error uploading the file");
    }
  } catch (error) {
    console.error("Error uploading the file:", error);
  }
};

export { plantAnalyse };
