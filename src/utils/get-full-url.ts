import { Request } from "express";

const getFullUrl = (req: Request) => {
    const url = req.protocol + '://' + req.get('host');
    return url;
}

export { getFullUrl }