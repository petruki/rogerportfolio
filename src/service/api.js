import fetch from 'node-fetch';
import * as imagesBank from '../images';

import homeQuery from './queries/home';
import businessQuery from './queries/business';
import activityQuery from './queries/activity';

const API_URL = 'https://draw-dtz.begin.app/graphql';
// const API_URL = 'http://localhost:3333/graphql';

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
    return await result.json();
}

export async function queryActivity() {
    let result = await fetch(API_URL, {
        method: 'post',
        body: JSON.stringify({ query: activityQuery})
    });
    return await result.json();
}

function loadLocalImages({ portfolio }) {
    portfolio.work.map(project => {
        if (project.imageSrc.indexOf('http') != 0) {
            project.imageSrc = imagesBank[project.imageSrc];
        }
    });

    portfolio.skills.map(skill => {
        if (skill.img.indexOf('http') != 0) {
            skill.img = imagesBank[skill.img];
        }
    });
}