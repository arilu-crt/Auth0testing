import { createApp } from 'vue'
import VueAuth0Plugin from 'vue-auth0-plugin'
import { domain, clientId } from '../auth_config.json'
import App from './App.vue'
import store from './store';
import router from './router'
import './assets/css/style.css';


/* 
createApp(App).use(router).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
 */


const app = createApp(App)
app.use(VueAuth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
        router.push(
            appState && appState.targetUrl
                ? appState.targetUrl
                : window.location.pathname
        )
    }

});
app.use(router);
app.use(store);



app.mount('#app');