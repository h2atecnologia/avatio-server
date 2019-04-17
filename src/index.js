import express from 'express';
import Avatar, {Config} from 'avatio-avatar/dist/ssr';
import Vue from 'vue';
import * as Renderer from 'vue-server-renderer';
import { convert } from 'convert-svg-to-png';
import _ from 'lodash';
import crypto from 'crypto';
import predefined from '../predefined';

const app = express();
const renderer = Renderer.createRenderer();
const hash = crypto.createHash('sha256');


function randomFromText(sex, text) {
    const map = [];
    if (predefined[sex][text.split('@')[0]]) {
        console.log(predefined[sex][text.split('@')[0]]);
        return predefined[sex][text.split('@')[0]];
    }

    text = crypto.createHash('sha256').update(text).digest('hex');
    console.log(text);

    Config[sex].variants.forEach((variant) => {
        const values = variant.values.filter((item) => item.randomizer !== false);
        map.push({component: variant.component, prop: variant.prop, values});
    });

    const numbers = text.split('').map((c) => c.charCodeAt());
    const modulos = [];
    if (numbers.length > map.length) {
        const loops = Math.floor(numbers.length / map.length);
        for (let loop = 0; loop <= loops; loop++) {
            for (let i = 0; i < map.length; i++) {
                modulos[i] = modulos[i] ? modulos[i] : 0;
                const mapIndex = i + (map.length * loop);
                if (numbers.length > mapIndex) {
                    modulos[i] += numbers[mapIndex];
                }
            }
        }
    } else if (numbers.length < map.length) {
        for (let i = 0; i < map.length; i++) {
            modulos[i] = modulos[i] ? modulos[i] : 0;
            modulos[i] += numbers[i % numbers.length];
        }
    }
    const result = {};
    map.forEach((item, i) => {
        if (!result[item.component]) {
            result[item.component] = {};
        }
        result[item.component][item.prop] = item.values[modulos[i] % item.values.length].value;
    });

    console.log(result);

    return result;
}

function random(sex) {
    const result = {};

    Config[sex].variants.forEach((variant) => {
        if (!result[variant.component]) {
            result[variant.component] = {};
        }

        const random = Math.floor(Math.random() * variant.values.length);
        result[variant.component][variant.prop] = variant.values[random].value;
    });

    return result;
}

function vueAppFactory(sex, options = {}, text = null) {
    options = _.merge(text ? randomFromText(sex, text) : random(sex), options);
    return new Vue({
        components: {Avatar},
        template: `<avatar :config="config" :options="options"></avatar>`,
        data: {
            options,
            config: Config[sex]
        }
    });
}

app.get('/avatar.svg', (req, res) => {
    let options = req.query.options;
    if (req.query.baseoptions) {
        options = JSON.parse(new Buffer(req.query.baseoptions, 'base64').toString());
    }
    const vueApp = vueAppFactory(req.query.sex || 'Female', options, req.query.text);
    renderer.renderToString(vueApp, (err, svg) => {
        res.set('Content-Type', 'image/svg+xml').end(svg);
    });
});

app.get('/avatar.png', (req, res) => {
    let options = req.query.options;
    if (req.query.baseoptions) {
        options = JSON.parse(new Buffer(req.query.baseoptions, 'base64').toString());
    }
    const vueApp = vueAppFactory(req.query.sex || 'Female', options, req.query.text);
    renderer.renderToString(vueApp, (err, svg) => {
        const png = convert(svg, {
            width: parseInt(req.query.width || 500, 10),
            puppeteer: {
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            }
        }).then(function(png) {
            res.set('Content-Type', 'image/png').end(png);
        });
    });
});


module.exports = app;