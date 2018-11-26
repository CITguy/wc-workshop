const express = require('express');
const router = express.Router();


router.get('/vanilla-html', (req, res) => {
    res.render('vanilla-html', {
        lesson: 1,
        title: 'Vanilla HTML, CSS, and JavaScript'
    })
})

router.get('/html-templates', (req, res) => {
    res.render('html-templates', {
        lesson: 2,
        title: 'HTML Templates'
    })
})

router.get('/shadow-dom', (req, res) => {
    res.render('shadow-dom', {
        lesson: 3,
        title: 'Shadow DOM'
    })
})

router.get('/autonomous-custom-elements', (req, res) => {
    res.render('autonomous-custom-elements', {
        lesson: 4,
        title: 'Autonomous Custom Elements'
    })
})
router.get('/html-imports', (req, res) => {
    res.render('html-imports', {
        lesson: 5,
        title: 'HTML Imports'
    })
})
router.get('/es-modules', (req, res) => {
    res.render('es-modules', {
        lesson: 6,
        title: 'ES Modules'
    })
})

/* fallback, ROOT route */
router.get('/', (req, res) => {
    res.render('index', { 
        title: 'Introduction to Web Components' 
    })
})

module.exports = router;
