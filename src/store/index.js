import { defineStore } from 'pinia'

export const useStore = defineStore('main', {

    state: () => ({
        path: '',
        appendUrl: '',
        panel1: {
            email: '',
            password: '',
            token: '',
            error: '',
            surveys: '',
        },
        // server: 'http://127.0.0.1:8000/api/',
        server: 'https://dev.thetechub.us/full/code/public/api/',
    }),
    getters: {
        checkHome: state =>  state.path === '/',
        checkComponent: state =>  state.path.includes('/components'),
        checkCard: state =>  state.path.includes('/components/cards'),
        checkCard1: state =>  state.path.includes('/components/cards/1-products-card'),
        checkCard2: state =>  state.path.includes('/components/cards/2-qr-code-card'),
        checkCard3: state =>  state.path.includes('/components/cards/3-nft-card'),
        checkCard4: state =>  state.path.includes('/components/cards/4-order-card'),
        checkCard5: state =>  state.path.includes('/components/cards/5-stats-preview-card'),
        checkCard6: state =>  state.path.includes('/components/cards/6-three-column-preview-card'),
        checkCard7: state =>  state.path.includes('/components/cards/7-profile-card'),
        checkForm: state =>  state.path.includes('/components/forms'),
        checkForm1: state =>  state.path.includes('/components/forms/1-card-details'),
        checkLanding: state =>  state.path.includes('/components/landings'),
        checkLanding1: state =>  state.path.includes('/components/landings/1-landing-page'),
        checkProfile: state =>  state.path.includes('/components/profiles'),
        checkProfile1: state =>  state.path.includes('/components/profiles/1-profile-page'),
        checkNotification: state =>  state.path.includes('/components/notifications'),
        checkNotification1: state =>  state.path.includes('/components/notifications/1-notification-component'),
        checkReview: state =>  state.path.includes('/components/reviews'),
        checkReview1: state =>  state.path.includes('/components/reviews/1-review-component'),
        checkPanel: state =>  state.path.includes('/components/panels'),
        checkPanel1: state =>  state.path.includes('/components/panels/1-panel-component'),
    },
    actions: {
        checkForErrors(res){
            this.panel1.error = '';

            if(res.email){
                this.panel1.error = res.email[0];
            } else if(res.password){
                this.panel1.error = res.password[0];
            } else if(res.password_confirmation){
                this.panel1.error = res.password_confirmation[0];
            }
        },
        patchData(res){
            const response = res.response;
            this.panel1.email = response.user.email
            this.panel1.password = response.user.password
            this.panel1.token = response.token ?? ''
        },
        assignSurveys(res){
            this.panel1.surveys = res.response.surveys;
        },
        async panel1Actions(action, method, data, route){

            const res = await fetch(this.server + action, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${this.panel1.token}`
                },
                method: method,
                body: JSON.stringify(data)
            }).then(res => res.json())

            if(route === 'user'){
                if(!res.status){
                    this.checkForErrors(res.error);
                } else if(res.status) {
                    this.patchData(res);
                }
            } else if (route === 'surveys') {
                this.assignSurveys(res);
            } else if(route === 'addSurvey'){
                this.assignSurveys(res);
            }
            
        }
    }
})