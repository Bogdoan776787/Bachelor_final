import axios from 'axios';
import {WORD_TRANSLATED_SUCCESS} from "../types/videoType";

export const getFriends = () => async(dispatch) => {
     try{
          const response = await axios.get('localhost:5000/sign-language-translation');
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
