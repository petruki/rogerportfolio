import fetch from 'node-fetch';
import * as imagesBank from '../images';

const API_URL = 'https://draw-dtz.begin.app/graphql';
// const API_URL = 'http://localhost:3333/graphql';

const query = `
{  
    header {
        name,
        avatarImg,
        headerTagline,
        headerParagraph,
        contactEmail
    }
    work {
        title,
        para,
        imageSrc,
        url
    }
    about {
        aboutParaOne,
        aboutParaTwo,
        aboutParaThree,
        aboutParaFour,
        aboutImage
    }
    skills {
        img,
        para,
        references {
            title,
            description,
            link
        }
    }
    contact {
        contactSubHeading
        social {
            img
            url
        }
    }
}`;

async function queryData() {
    let result = await fetch(API_URL, {
        method: 'post',
        body: JSON.stringify({query})
    });

    let response = await result.json();
    loadLocalImages(response);

    return response;
}

function loadLocalImages({ data }) {
    data.work.map(project => {
        if (project.imageSrc.indexOf('http') != 0) {
            project.imageSrc = imagesBank[project.imageSrc];
        }
    });

    data.skills.map(skill => {
        if (skill.img.indexOf('http') != 0) {
            skill.img = imagesBank[skill.img];
        }
    });
}

export default queryData;