const API_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

async function getQRCode(destinationUrl) {
    let result = await fetch(API_URL + destinationUrl, {
        method: 'get',
        'Accept': 'image/png'
    });

    const blob = await result.blob();
    var img = URL.createObjectURL(blob);
    return img;
}

export default getQRCode;