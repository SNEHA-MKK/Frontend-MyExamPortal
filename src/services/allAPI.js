import { serverUrl } from "./baseUrl"
import { commonAPI } from "./commonAPI"

//register
export const registerAPI = async (reqbody) => {
     return await commonAPI('POST', `${serverUrl}/user/register`, reqbody, "")
}

//login
export const loginApi = async (reqbody) => {
     return await commonAPI('POST', `${serverUrl}/user/login`, reqbody, "")
}

//get user details- profile
export const getUsers = async (reqbody) => {
     return await commonAPI('GET', `${serverUrl}/users-profile`,"", "")
}

//add admin profile
export const addAdminProfileApi = async (reqbody, reqHeader) => {
     return await commonAPI('POST', `${serverUrl}/adminProfile`, reqbody, reqHeader)
}

//get admin profile
export const getAdminProfileApi = async () => {
     return await commonAPI('GET', `${serverUrl}/admin-details`, "", "")
}

//addCatogary - admin
export const addAdCategoryApi = async (reqbody, reqHeader) => {
     return await commonAPI('POST', `${serverUrl}/admin-category`, reqbody, reqHeader)
}

//get all category - admin
export const getAllAdmCategory = async (reqHeader) => {
     return await commonAPI('GET', `${serverUrl}/admin-getcategory`, "", reqHeader)
}

//delete a category -admin

export const deleteACategoryApi = async (id, reqHeader) => {
     return await commonAPI('DELETE', `${serverUrl}/delete-category/${id}`, {}, reqHeader)
}

//delete a quiz -admin

export const deleteAQuizApi = async (id, reqHeader) => {
     return await commonAPI('DELETE', `${serverUrl}/delete-quiz/${id}`, {}, reqHeader)
}

//delete a quest -admin

export const deleteAQuestApi = async (id, reqHeader) => {
     return await commonAPI('DELETE', `${serverUrl}/delete-quest/${id}`, {}, reqHeader)
}


//update category-admin
export const updateCategoryApi = async (id, reqbody, reqHeader) => {
     return await commonAPI('PUT', `${serverUrl}/update-AdmCategory/${id}`, reqbody, reqHeader)
}

//update quiz-admin
export const updateQuizApi = async (id, reqbody, reqHeader) => {
     return await commonAPI('PUT', `${serverUrl}/update-AdmQuiz/${id}`, reqbody, reqHeader)
}

//addQuizzes - admin
export const addAdmQuizApi = async (reqbody, reqHeader, id) => {
     return await commonAPI('POST', `${serverUrl}/admin-quizz/${id}`, reqbody, reqHeader)
}

//get all quizzes - admin
export const getAllAdmQuiz = async (id, reqHeader) => {
     return await commonAPI('GET', `${serverUrl}/admin-getquiz/${id}`, "", reqHeader)
}


//addQuestions - admin
export const addQueApi = async (reqbody, reqHeader, id) => {
     return await commonAPI('POST', `${serverUrl}/admin-question/${id}`, reqbody, reqHeader)
}

//get all questions - admin
export const getAllAdmQuestion = async (id, reqHeader) => {
     return await commonAPI('GET', `${serverUrl}/admin-getquestion/${id}`, "", reqHeader)
}

//get all quizzes - user
export const getAllUserQuiz = async (searchKey, reqHeader) => {

     //query parameter = path?key = value
     return await commonAPI('GET', `${serverUrl}/user-getquiz?search=${searchKey}`, "", reqHeader)
}

export const getAllHomeQuiz = async () => {
     return await commonAPI('GET', `${serverUrl}/home-getquiz`, "", "")
}

//get all questions - user
export const getAllUserQuestions = async (id, reqHeader) => {
     return await commonAPI('GET', `${serverUrl}/user-getquestion/${id}`, "", reqHeader)
}

//evaluation

export const evaluateUserAnswers = async (id, userAnswers, reqHeader) => {
     return await commonAPI('POST', `${serverUrl}/evaluate-answers/${id}`, { userAnswers }, reqHeader)
}

//get user results
export const getUserResults = async (reqHeader) => {
     return await commonAPI('GET', `${serverUrl}/user-results`, "", reqHeader)
}

//get ADMIN results
export const getAdminResults = async (reqHeader) => {
     return await commonAPI('GET', `${serverUrl}/admin-results`, "", reqHeader)
}

//topper - quiz
export const quizTopperApi = async (id, reqHeader) => {
     return await commonAPI('GET', `${serverUrl}/postQuiz-topper/${id}`, "", reqHeader)
}

//get user Rank and Status
export const rankAndStatusApi = async (id, reqHeader) => {
     return await commonAPI('GET', `${serverUrl}/user-rank/${id}`, "", reqHeader)
}

//update profile-user

export const updateProfile = async (reqbody, reqHeader) => {
     return await commonAPI('PUT', `${serverUrl}/update-profile`, reqbody, reqHeader)
}


//add user feedback
export const addUserFeedback = async (reqbody, reqHeader) => {
     return await commonAPI('POST', `${serverUrl}/user-feedback`, reqbody, reqHeader)
}

//get all reviews - user
export const getAllReviews = async (reqHeader) => {
     return await commonAPI('GET', `${serverUrl}/get-reviews`, "", reqHeader)
}
