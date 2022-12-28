import React from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import Component2 from "./Component2";
import { EditModule } from "./features/dashboardEditModule";

// import { stores } from "./store";
// import { storess } from "./abcstores";

const Component1 = () => {
    return (
        // <Provider store={storess}>
        <DynamicModuleLoader modules={[EditModule]}>
            <div>
                <h1>Hi</h1>
                <Component2 />
            </div>
        </DynamicModuleLoader>
        // </Provider>
    )
};

export default Component1;