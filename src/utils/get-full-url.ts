import { Request } from "express";

const getFullUrl = (req: Request) => {
    const url = req.protocol + '://' + req.get('host');
    console.log(url)
    return url;
}

export { getFullUrl }