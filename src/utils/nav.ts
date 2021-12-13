import {NavigateFunction} from "react-router";

const Nav = {
    to: (navigate: NavigateFunction, name: string, state?: Array<object> | object) => {
        if (state) {
            if (Array.isArray(state)) {
                navigate(name, {
                    state: [...state]
                });
            } else {
                navigate(name, {
                    state: {
                        ...state
                    }
                });
            }
        } else {
            navigate(name);
        }
    }
};
export default Nav;
