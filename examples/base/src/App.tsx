import { Refine, Resource } from "@pankod/refine";
import dataProvider from "@pankod/refine-simple-rest";
import "@pankod/refine/dist/styles.min.css";

import {
    useHistory,
    useLocation,
    useParams,
    BrowserRouter,
    Switch,
    Route,
    Prompt,
    Link,
    Redirect,
} from "react-router-dom";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    return (
        <Refine
            BrowserRouter={BrowserRouter}
            useHistory={useHistory}
            useLocation={useLocation}
            useParams={useParams}
            Switch={Switch}
            Route={Route}
            Prompt={Prompt}
            Link={Link}
            Redirect={Redirect}
            dataProvider={dataProvider(API_URL)}
            warnWhenUnsavedChanges
        >
            <Resource
                name="posts"
                list={PostList}
                create={PostCreate}
                edit={PostEdit}
                show={PostShow}
                canDelete
            />
        </Refine>
    );
};

export default App;
