import { createRouter, createWebHashHistory, createWebHistory,  } from "vue-router";

import Home from '../components/Home.vue'
import Components from '../components/Components.vue'
import Cards from '../components/Cards.vue'
import Card1 from '../components/CardsList/Card-1.vue'
import Card2 from '../components/CardsList/Card-2.vue'
import Card3 from '../components/CardsList/Card-3.vue'
import Card4 from '../components/CardsList/Card-4.vue'
import Card5 from '../components/CardsList/Card-5.vue'
import Card6 from '../components/CardsList/Card-6.vue'
import Card7 from '../components/CardsList/Card-7.vue'
import Forms from '../components/Forms.vue'
import Form1 from '../components/FormsList/Form-1.vue'
import Landings from '../components/Landings.vue'
import Landing1 from '../components/LandingsList/Landing-1.vue'
import Profiles from '../components/Profiles.vue'
import Profile1 from '../components/ProfilesList/Profile-1.vue'
import Notifications from '../components/Notifications.vue'
import Notification1 from '../components/NotificationsList/Notification-1.vue'
import Reviews from '../components/Reviews.vue'
import Review1 from '../components/ReviewsList/Review-1.vue'
import Panels from '../components/Panels.vue'
import Panel1 from '../components/PanelsList/Panel-1.vue'


const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/components',
        component: Components,
        children: [
            {
                path: 'cards',
                component: Cards,
                children: [
                    {
                        path: '1-products-card',
                        component: Card1,
                    },
                    {
                        path: '2-qr-code-card',
                        component: Card2,
                    },
                    {
                        path: '3-nft-card',
                        component: Card3,
                    },
                    {
                        path: '4-order-card',
                        component: Card4,
                    },
                    {
                        path: '5-stats-preview-card',
                        component: Card5,
                    },
                    {
                        path: '6-three-column-preview-card',
                        component: Card6,
                    },
                    {
                        path: '7-profile-card',
                        component: Card7,
                    },
                ]
            },
            {
                path: 'forms',
                component: Forms,
                children: [
                    {
                        path: '1-card-details',
                        component: Form1,
                    },
                ]
            },
            {
                path: 'landings',
                component: Landings,
                children: [
                    {
                        path: '1-landing-page',
                        component: Landing1,
                    },
                ]
            },
            {
                path: 'profiles',
                component: Profiles,
                children: [
                    {
                        path: '1-profile-page',
                        component: Profile1,
                    },
                ]
            },
            {
                path: 'notifications',
                component: Notifications,
                children: [
                    {
                        path: '1-notification-component',
                        component: Notification1,
                    },
                ]
            },
            {
                path: 'reviews',
                component: Reviews,
                children: [
                    {
                        path: '1-review-component',
                        component: Review1,
                    },
                ]
            },
            {
                path: 'panels',
                component: Panels,
                children: [
                    {
                        path: '1-panel-component',
                        component: Panel1,
                    },
                ]
            },

        ]
    },
  ]
  
export const router = createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
history: createWebHistory(),
// history: createWebHashHistory(),
// base: '/tailwind/',
routes, // short for `routes: routes`
})