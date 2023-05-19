import fetch from 'node-fetch';
import * as imagesBank from '../images';

import homeQuery from './queries/home';
import businessQuery from './queries/business';
import activityQuery from './queries/activity';

// eslint-disable-next-line no-unused-vars
const API_DEV_URL = 'http://localhost:3333/graphql';
const API_URL = 'https://draw-dtz-staging.begin.app/graphql';

export async function queryHome() {
    let result = await fetch(API_URL, {
        method: 'post',
        body: JSON.stringify({ query: homeQuery})
    });

    let response = await result.json();
    loadLocalImages(response.data);

    return response;
}

export async function queryBusiness() {
    let result = await fetch(API_URL, {
        method: 'post',
        body: JSON.stringify({ query: businessQuery})
    });
    return result.json();
}

export async function queryActivity() {
    let result = await fetch(API_URL, {
        method: 'post',
        body: JSON.stringify({ query: activityQuery})
    });
    return result.json();
}

function loadLocalImages({ portfolio }) {
    portfolio.work.map(project => {
        if (project.imageSrc.indexOf('http') != 0) {
            project.imageSrc = imagesBank[project.imageSrc].default;
        }
    });

    portfolio.skills.map(skill => {
        if (skill.img.indexOf('http') != 0) {
            skill.img = imagesBank[skill.img].default;
        }
    });
}