
import { GET_PROJECTS, ADDING_PROJECT, EDIT_PROJECT, SAVING_PROJECT, SAVED, THEME_SWITCH, DONE_SAVING } from '../Actions';

const initialState = {
    projects: [],
    nightVision: false,
    editingContent: false,
    editingHeader: false,
    isUserLoggedIn: true,
    saveInProgress: false,
    saved: false,
    gettingProjects: false,
    displayingAllProjects: false,
    searchText: '',
    theme: {primary: 'white', secondary: '#2BC1C4'}
}
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PROJECTS:
    return Object.assign({}, state, {projects: action.payload})
    case THEME_SWITCH:
    return Object.assign({}, state, {nightVision: !state.nightVision}, {theme: action.payload})
    case SAVED:
      return Object.assign({}, state, {saveInProgress: false, saved: true})
    case DONE_SAVING:
     return Object.assign({}, state, {saveInProgress: false, saved: false})
    case SAVING_PROJECT:
      return Object.assign({}, state, {saveInProgress: true, saved: false})
    case EDIT_PROJECT:
       let updatedProjects = [...state.projects].map(project => (project.id == action.payload.id) ? {id: action.payload.id, title: action.payload.title, content: action.payload.content} : project)
       console.log(Object.assign({}, state, {projects:updatedProjects}));
       return Object.assign({}, state, {saveInProgress: false, saved:false});
    case ADDING_PROJECT:
  
       return (Object.assign({}, state, {saveInProgress: false, saved:false}))
    default:
        return state;
  }
    
}
export default rootReducer;