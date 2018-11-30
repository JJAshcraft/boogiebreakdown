import axios from 'axios';




export const GET_PROJECTS = 'GET_PROJECTS';
export const ADDING_PROJECT = 'ADDING_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const SAVING_PROJECT = 'SAVING_PROJECT';
export const SAVED = 'SAVED';
export const THEME_SWITCH = 'THEME_SWITCH';
export const DONE_SAVING = 'DONE_SAVING';




export const addNote = (e, project, history) => {
    console.log('adding project...');
    console.log(history);
    e.preventDefault();
    
     return (dispatch) => {
     dispatch({type: SAVING_PROJECT})

     setTimeout(()=>{dispatch({type: SAVED})}, 1000);
     setTimeout(()=>{dispatch({type: DONE_SAVING})}, 2000);
     setTimeout(()=>{history.push('/')}, 2000)
    
    }
   
    
}


export const themeSwitch = (nightVision) => {
    console.log('switching themes');
    //passes in nightVision as payload
    if(nightVision === false){  //then we are switching it to true
    return ({type: THEME_SWITCH, payload: {primary: 'black', secondary: '#B3FFAB'}})
    } else {
    return ({type: THEME_SWITCH, payload: {primary: 'white', secondary: 'black'}})
    }
}

