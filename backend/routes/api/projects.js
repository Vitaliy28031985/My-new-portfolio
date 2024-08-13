import express from 'express';
import Project from '../../models/project.js';

const router = express.Router();

router.get('/uk', async (req, res) => {
    const projects = await Project.find();
    const getData = [];
    projects.map(item => getData.push({
        id: item._id,
        avatar: item.avatar,
        titleUk: item.titleUk,
        descriptionUk: item.descriptionUk,
        technologies: item.technologies,
        gitLink: item.gitLink,
        pageLink: item.pageLink
    }))
    res.status(200).json(getData);
});

router.get('/en', async (req, res) => {
    const projects = await Project.find();
    const getData = [];
    projects.map(item => getData.push({
        id: item._id,
        avatar: item.avatar,
        titleEn: item.titleEn,
        descriptionEn: item.descriptionEn,
        technologies: item.technologies,
        gitLink: item.gitLink,
        pageLink: item.pageLink
    }))
    res.status(200).json(getData);
})

router.post('/', async (req, res) => {
    const { body } = req;
    const result = await Project.create({ ...body })
    res.status(201).json(result);
})

export default router;