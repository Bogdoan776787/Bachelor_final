import axios from 'axios';
// import {WORD_TRANSLATED_SUCCESS} from "../types/videoType";

export const getTranslatedWords =  async (data) => {
     try{
          console.log("GET TRANSLATED WORD")
          const response = await axios.post('http://localhost:80/sign-language-translation',data);
          console.log("RESPONSE IS : ")
          console.log(response)
          //  dispatch({
          //       type: WORD_TRANSLATED_SUCCESS,
          //       payload : {
          //            word : response.data.word
          //       }
          //  })

     }catch (error){
          console.log(error.response.data);
     }
}
