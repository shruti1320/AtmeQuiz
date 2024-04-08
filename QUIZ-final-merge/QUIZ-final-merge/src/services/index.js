import axios from "axios";

// export const contestQuizQuestion = async (id) => {
//   try {
//     const response = await axios.get(
//       "https://atme-quiz.onrender.com/api/contests/6604b30057da7d5aabd8b9bf"
//     );
  
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//   }
// };

export const fetchCategories = async () => {
  try {
    const response = await axios.get(
      `https://atme-quiz.onrender.com/api/contests/category/CONTEST`
    );
   
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const fetchAllCategoryData = async () => {
  try {
    const response = await axios.get(`https://atme-quiz.onrender.com/api/contests`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoriesWisedata = async (category) => {
  try {
    const response = await axios.get(
      `https://atme-quiz.onrender.com/api/contests/category/${category}`
    );
   
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const fetchParticularContestdata = async (id) => {
  try {
    const response = await axios.get(
      `https://atme-quiz.onrender.com/api/contests/${id}`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching particular contest data", error);
  }
};

export const firstTwoRandomQuestion = async () => {
  try {
    const response = await axios.get(
      `https://atme-quiz.onrender.com/api/contests/questions/quiz`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching particular contest data", error);
  }
};