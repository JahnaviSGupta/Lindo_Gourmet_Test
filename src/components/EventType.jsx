import Layout from "./Layout";
import {EventTypeEntityComponent} from "./UnchurchCommand" ;

export default function EventType () {
    return (
        <Layout>
            <div className="login-page-wrapper w-full py-10">
                <div className="container-x mx-auto">
                    <EventTypeEntityComponent/>
                </div>
            </div>
        </Layout>
    );
}
