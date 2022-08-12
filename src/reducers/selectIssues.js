import {
    ADD_TO_SELECT_ISSUES,
  } from "../constants/selectIssuesConstants";
  
  export default function selectIssues(state = [], action) {
      switch (action.type) {
        case ADD_TO_SELECT_ISSUES:
            const selectedIssue = action.payload;
            const isSelectedIssueExist = state.find(i => i === selectedIssue)
            if(isSelectedIssueExist) {
                return state
            } else {
                return [...state, selectedIssue]
            }
      default:
        return state;
      }
    }