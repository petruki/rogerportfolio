const homeQuery = `
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

export default homeQuery;