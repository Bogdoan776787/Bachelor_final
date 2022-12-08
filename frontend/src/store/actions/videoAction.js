import axios from 'axios';
import {WORD_TRANSLATED_SUCCESS} from "../types/videoType";

export const getTranslatedWords = (data) => async(dispatch) => {
     try{
          const response = await axios.post('localhost:5000/sign-language-translation',data);
           dispatch({
                type: WORD_TRANSLATED_SUCCESS,
                payload : {
                     word : response.data.word
                }
           })

     }catch (error){
          console.log(error.response.data);
     }
}
