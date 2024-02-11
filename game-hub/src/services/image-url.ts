
const crop = (url:string)=> {
    const target = 'media/'
    const insertingPosition = url.indexOf(target)+ target.length;
    const newUrl   =  url.slice(0,insertingPosition) + 'crop/600/400/' + url.slice(insertingPosition)
    return newUrl
}

export default crop