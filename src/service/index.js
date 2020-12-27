const API_URL = 'https://draw-dtz.begin.app/graphql'
// const API_URL = 'http://localhost:3333/graphql'

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
        id,
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
        id
        img,
        para
    }
    contact {
        contactSubHeading
        social {
            img
            url
        }
    }
}`

async function queryData() {
    let result = await fetch(API_URL, {
        method: 'post',
        body: JSON.stringify({query})
    })

    return await result.json()
}

export default queryData