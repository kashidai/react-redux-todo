const todos = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }

            ];
        case "DELETE_TODO":
            console.log("hi");
         return state.filter((value)=> value.text !== action.text);



            return


        default:
            return state;
    }
};

export default todos;
