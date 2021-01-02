const businessQuery = `
{  
    header {
        name,
        avatarImg,
        headerTagline,
        headerParagraph,
        contactEmail
    }
    contact {
        contactSubHeading
        social {
            img
            url
        }
    }
}`;

export default businessQuery;